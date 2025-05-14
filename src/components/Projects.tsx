import React, { useEffect, useRef } from 'react';
import vitmisqube from '../assets/images/vitmisqube.png';
import quizingsphere from '../assets/images/quizingsphere.png';
import tocRegex from '../assets/images/toc-regex.png';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer" 
      className="block group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-200 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'VIT MISQUBE',
      description: 'Comprehensive resource for VIT question papers',
      image: vitmisqube,
      link: 'https://vitmisqube.netlify.app/'
    },
    {
      title: 'QuizingSphere',
      description: 'NPTEL Quiz Practice Platform for interactive learning',
      image: quizingsphere,
      link: 'https://quizingsphere.netlify.app/'
    },
    {
      title: 'Regex to NFA/DFA Converter',
      description: 'Convert regular expressions to finite automata with visual representation',
      image: tocRegex,
      link: 'https://toc-regex.netlify.app/'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="section bg-[#0b0f1a] py-16 px-10">
      <h2 className="section-title">
        Latest <span>Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;