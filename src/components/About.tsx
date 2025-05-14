import React, { useEffect, useRef } from 'react';
import { Code2, Laptop, Server, Sparkles } from 'lucide-react';

interface ParticleProps {
  count: number;
}

const Particles: React.FC<ParticleProps> = ({ count }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            '--tx': `${Math.random() * 100 - 50}px`,
            '--ty': `${Math.random() * 100 - 50}px`,
            animation: `particleFloat ${2 + Math.random() * 2}s linear infinite`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="about" ref={sectionRef} className="section bg-[#0b0f1a] py-16 px-10 flex flex-col items-center overflow-hidden">
      <h2 className="section-title self-start shining-text">
        About <span className="text-[#00c6ff]">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-lg text-gray-300">
            Full Stack Developer passionate about creating modern, responsive, and user-friendly web applications. I specialize in both frontend and backend technologies, with expertise in React, Node.js, and various modern frameworks.
          </p>
          <p className="text-lg text-gray-300">
            My goal is to build applications that not only look visually appealing but also provide an exceptional user experience. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
          <div className="relative hover-card glowing-border bg-[#0b0f1a]/60 rounded-xl p-6 group">
            <Particles count={5} />
            <Code2 className="w-12 h-12 text-[#00c6ff] mb-4 floating-icon" />
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00c6ff] transition-colors">Frontend Development</h3>
            <p className="text-gray-300">React, TypeScript, Tailwind CSS, and modern web technologies</p>
          </div>

          <div className="relative hover-card glowing-border bg-[#0b0f1a]/60 rounded-xl p-6 group">
            <Particles count={5} />
            <Server className="w-12 h-12 text-[#00c6ff] mb-4 floating-icon" />
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00c6ff] transition-colors">Backend Development</h3>
            <p className="text-gray-300">Node.js, Express, MongoDB, and API development</p>
          </div>

          <div className="relative hover-card glowing-border bg-[#0b0f1a]/60 rounded-xl p-6 group">
            <Particles count={5} />
            <Laptop className="w-12 h-12 text-[#00c6ff] mb-4 floating-icon" />
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00c6ff] transition-colors">Full Stack Solutions</h3>
            <p className="text-gray-300">Full-stack applications with modern tech stack</p>
          </div>

          <div className="relative hover-card glowing-border bg-[#0b0f1a]/60 rounded-xl p-6 group">
            <Particles count={5} />
            <Sparkles className="w-12 h-12 text-[#00c6ff] mb-4 floating-icon" />
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00c6ff] transition-colors">UI/UX Design</h3>
            <p className="text-gray-300">Modern UI design with attention to UX details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;