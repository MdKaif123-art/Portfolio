import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import profilePic from '../assets/images/profile.png';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 gradient-bg">
      <div className="z-10 max-w-xl animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out' }}>
        <h1 className="text-5xl font-bold mb-2 animate-fadeInLeft" style={{ animation: 'fadeInLeft 1s ease-out' }}>
          Hi, I'm <span className="text-[#00c6ff] relative inline-block">
            Mohammed Kaif K
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00c6ff] transform scale-x-0 origin-bottom-right transition-transform duration-500" style={{ animation: 'slideInLeft 1s ease-out 1s forwards' }}></span>
          </span>
        </h1>
        <h2 className="text-2xl text-[#00c6ff] mb-4 animate-fadeInRight" style={{ animation: 'fadeInRight 1s ease-out 0.3s', animationFillMode: 'both' }}>
          Full Stack Developer
        </h2>
        <p className="text-[#b0b0b0] mb-6 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out 0.6s', animationFillMode: 'both' }}>
          Passionate developer creating seamless web experiences with modern technologies. Specializing in full-stack development with React, Node.js, and more.
        </p>
        <div className="flex space-x-4 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out 0.9s', animationFillMode: 'both' }}>
          <button className="relative overflow-hidden px-5 py-2 border border-[#00c6ff] text-white hover:text-[#0b0f1a] transition-colors duration-300 z-10 group">
            <span className="absolute top-0 left-[-100%] w-full h-full bg-[#00c6ff] transition-all duration-300 z-[-1] group-hover:left-0"></span>
            Hire Me
          </button>
          <button className="relative overflow-hidden px-5 py-2 border border-[#00c6ff] text-white hover:text-[#0b0f1a] transition-colors duration-300 z-10 group">
            <span className="absolute top-0 left-[-100%] w-full h-full bg-[#00c6ff] transition-all duration-300 z-[-1] group-hover:left-0"></span>
            Let's Talk
          </button>
        </div>
        <div className="flex space-x-4 mt-6 animate-fadeInUp" style={{ animation: 'fadeInUp 1s ease-out 1.2s', animationFillMode: 'both' }}>
          <a href="https://github.com/MdKaif123-art/" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#00c6ff] transition-all duration-300 hover:transform hover:-translate-y-1">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEiiSiUaNGNFwAAAZbPij8QggfFaE3BpAX5Q-yGgO2wmv8MmUi_aJl_Gthr-bO_aKWUGPHlhIqvNv4I3_1L_41uGztjETtfBBudwiUbSKOWxq5gqpDz9dD-Dt2Lvun9t9NwmQI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fk-mohammed-kaif-62510728b" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#00c6ff] transition-all duration-300 hover:transform hover:-translate-y-1">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <div className="animate-fadeInRight z-10 hidden md:block relative" style={{ animation: 'fadeInRight 1s ease-out' }}>
        <div className="w-80 h-80 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full absolute hero-bg-glow"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c6ff]/20 to-[#0072ff]/20 rounded-full blur-xl transform scale-110 hero-bg-glow"></div>
          <img 
            src={profilePic} 
            alt="Mohammed Kaif K" 
            className="w-80 h-80 rounded-full object-contain bg-[#0b0f1a] relative z-10 border-4 border-[#00c6ff]/50 hero-image-glow p-2 hover:scale-105 transition-transform duration-300"
            style={{ filter: 'brightness(1.1) contrast(1.1)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;