import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      setSubmitMessage(error.response?.data?.error || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section bg-[#0b0f1a] py-16 px-10">
      <h2 className="section-title">
        Contact <span>Me!</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div>
          <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            Feel free to contact me for any work or suggestions. I'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#00c6ff]/10 flex items-center justify-center mr-4">
                <Mail className="text-[#00c6ff]" />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Email</h4>
                <p className="text-white">mdkaif196905@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#00c6ff]/10 flex items-center justify-center mr-4">
                <Phone className="text-[#00c6ff]" />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Phone</h4>
                <p className="text-white">+91 9952890468</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#00c6ff]/10 flex items-center justify-center mr-4">
                <MapPin className="text-[#00c6ff]" />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Location</h4>
                <p className="text-white">Krishnagiri, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="bg-[#0f1624] border border-[#00c6ff] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00c6ff] focus:bg-[#0f1624]/70 transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="bg-[#0f1624] border border-[#00c6ff] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00c6ff] focus:bg-[#0f1624]/70 transition-all"
              />
            </div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full bg-[#0f1624] border border-[#00c6ff] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00c6ff] focus:bg-[#0f1624]/70 transition-all resize-none"
            ></textarea>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#00c6ff] hover:bg-[#0072ff] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Submit <Send size={16} className="ml-2" />
                </>
              )}
            </button>
            
            {submitMessage && (
              <div className={`p-3 rounded-md ${
                submitMessage.includes('success') 
                  ? 'bg-green-500/20 border border-green-500 text-green-500'
                  : 'bg-red-500/20 border border-red-500 text-red-500'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;