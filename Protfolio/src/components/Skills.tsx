import React from 'react';
import SkillBar from './SkillBar';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', percentage: 80 },
        { name: 'TypeScript', percentage: 75 },
        { name: 'Tailwind CSS', percentage: 75 },
        { name: 'JavaScript', percentage: 80 }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', percentage: 85 },
        { name: 'Express', percentage: 80 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'REST APIs', percentage: 90 }
      ]
    }
  ];

  const tools = [
    { category: 'Development Tools', items: ['Git', 'VS Code', 'postman', 'Webpack'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'] }
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-semibold text-white mb-6">{category.category}</h3>
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((toolGroup) => (
            <div key={toolGroup.category} className="bg-black p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">{toolGroup.category}</h3>
              <ul className="space-y-2">
                {toolGroup.items.map((tool) => (
                  <li key={tool} className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;