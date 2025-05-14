import React from 'react';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0b0f1a] py-8 px-10 relative border-t border-[#1a2436]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="text-[#00c6ff] font-bold text-2xl mb-4 md:mb-0">Mohammed Kaif K</div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/MdKaif123-art/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#00c6ff] transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/k-mohammed-kaif-62510728b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#00c6ff] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/md_kaif468" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#00c6ff] transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#1a2436] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright &copy; {new Date().getFullYear()} by Mohammed Kaif K | All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#00c6ff]/10 hover:bg-[#00c6ff] text-[#00c6ff] hover:text-white flex items-center justify-center transition-all duration-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;