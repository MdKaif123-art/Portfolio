import React, { useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white">{skill}</span>
        <span className="text-[#00c6ff]">{percentage}%</span>
      </div>
      <div className="bg-[#222c3c] rounded-sm overflow-hidden h-[10px] shadow-md">
        <div 
          className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] h-full rounded-sm skill-bar-animated"
          style={{ '--width': `${percentage}%` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
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
    <section id="skills" ref={sectionRef} className="section bg-[#0f1624] py-16 px-10">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="bg-[#0b0f1a]/50 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-[#00c6ff] mb-6">Frontend Development</h3>
          <SkillBar skill="React.js" percentage={90} />
          <SkillBar skill="JavaScript" percentage={85} />
          <SkillBar skill="TypeScript" percentage={80} />
          <SkillBar skill="HTML/CSS" percentage={95} />
          <SkillBar skill="Tailwind CSS" percentage={85} />
        </div>
        <div className="bg-[#0b0f1a]/50 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-[#00c6ff] mb-6">Backend Development</h3>
          <SkillBar skill="Node.js" percentage={85} />
          <SkillBar skill="Express.js" percentage={80} />
          <SkillBar skill="MongoDB" percentage={75} />
          <SkillBar skill="REST APIs" percentage={90} />
          <SkillBar skill="SQL" percentage={70} />
        </div>
        <div className="bg-[#0b0f1a]/50 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-[#00c6ff] mb-6">Tools & Technologies</h3>
          <SkillBar skill="Git" percentage={85} />
          <SkillBar skill="SEO" percentage={70} />
          <SkillBar skill="UI/UX Design" percentage={75} />
          <SkillBar skill="Problem Solving" percentage={80} />
          <SkillBar skill="Team Collaboration" percentage={85} />
        </div>
        <div className="bg-[#0b0f1a]/50 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-[#00c6ff] mb-6">Additional Skills</h3>
          <SkillBar skill="Flask" percentage={75} />
          <SkillBar skill="PHP" percentage={70} />
          <SkillBar skill="MySQL" percentage={75} />
          <SkillBar skill="Responsive Design" percentage={90} />
          <SkillBar skill="Web Security" percentage={70} />
        </div>
      </div>
    </section>
  );
};

export default Skills;