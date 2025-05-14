import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`flex justify-between items-center px-6 md:px-10 py-5 fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0b0f1a] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="text-[#00c6ff] font-bold text-2xl animate-pulse">Mohammed Kaif K</div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white hover:text-[#00c6ff] transition-colors duration-300"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-white hover:text-[#00c6ff] transition-colors duration-300 relative group">
          Home
          <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#00c6ff] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#about" className="text-white hover:text-[#00c6ff] transition-colors duration-300 relative group">
          About
          <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#00c6ff] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#journey" className="text-white hover:text-[#00c6ff] transition-colors duration-300 relative group">
          Education
          <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#00c6ff] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#projects" className="text-white hover:text-[#00c6ff] transition-colors duration-300 relative group">
          Projects
          <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#00c6ff] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#skills" className="text-white hover:text-[#00c6ff] transition-colors duration-300 relative group">
          Skills
          <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#00c6ff] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="text-white hover:text-[#00c6ff] transition-colors duration-300 relative group">
          Contact
          <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#00c6ff] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-[#0b0f1a] bg-opacity-95 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#" onClick={closeMenu} className="text-white hover:text-[#00c6ff] text-xl transition-colors duration-300">
            Home
          </a>
          <a href="#about" onClick={closeMenu} className="text-white hover:text-[#00c6ff] text-xl transition-colors duration-300">
            About
          </a>
          <a href="#journey" onClick={closeMenu} className="text-white hover:text-[#00c6ff] text-xl transition-colors duration-300">
            Education
          </a>
          <a href="#projects" onClick={closeMenu} className="text-white hover:text-[#00c6ff] text-xl transition-colors duration-300">
            Projects
          </a>
          <a href="#skills" onClick={closeMenu} className="text-white hover:text-[#00c6ff] text-xl transition-colors duration-300">
            Skills
          </a>
          <a href="#contact" onClick={closeMenu} className="text-white hover:text-[#00c6ff] text-xl transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;