import React, { useEffect, useRef } from 'react';

const Timeline: React.FC<{ year: string, title: string, institution: string, description: string }> = ({ 
  year, title, institution, description 
}) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-[#00c6ff] last:border-0">
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#00c6ff]"></div>
      <div className="mb-1 text-sm text-[#00c6ff]">{year}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mb-2 italic text-gray-400">{institution}</div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Journey: React.FC = () => {
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
    <section id="journey" ref={sectionRef} className="section bg-[#0f1624] py-16 px-10">
      <h2 className="section-title">
        My <span>Journey</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div>
          <h3 className="text-2xl font-semibold text-[#00c6ff] mb-6">Education</h3>
          <div className="space-y-1">
            <Timeline 
              year="2025 - Present"
              title="Third Year - M.Tech(Integrated)"
              institution="VIT, Vellore"
              description="Currently pursuing my degree with focus on software development and web technologies."
            />
            <Timeline 
              year="2024 - 2025"
              title="Second Year - M.Tech(Integrated)"
              institution="VIT, Vellore"
              description="Won 2nd prize in Hackathon worth ₹4000. Enhanced skills in web development and programming."
            />
            <Timeline 
              year="2023 - 2024"
              title="First Year - M.Tech(Integrated)"
              institution="VIT, Vellore"
              description="Started journey in computer science and programming fundamentals."
            />
            <Timeline 
              year="2023"
              title="Completed Schooling"
              institution="High School"
              description="Finished school education with focus on science and mathematics."
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#00c6ff] mb-6">Projects</h3>
          <div className="space-y-1">
            <Timeline 
              year="2025"
              title="QuizSphere – NPTEL Quiz Practice Platform"
              institution="Web Application"
              description="A comprehensive quiz platform for NPTEL practice with dynamic question generation."
            />
            <Timeline 
              year="2025"
              title="Regex to NFA + Epsilon-DFA Converter"
              institution="Academic Project"
              description="Built using React.js and Flask, converts regular expressions to finite automata."
            />
             <Timeline 
              year="2024"
              title="VIT Space Finder"
              institution="Web Application"
              description="Tool to help students find and manage study spaces within the campus."
            />
            <Timeline 
              year="2023"
              title="Fiverr Replica Website"
              institution="Web Development"
              description="Created a clone of Fiverr with core functionalities and modern UI."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;