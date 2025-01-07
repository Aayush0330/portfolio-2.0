import React from 'react';

const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'],
  'Backend': ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
  'Tools': ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
  'Soft Skills': ['Problem Solving', 'Team Leadership', 'Communication', 'Agile']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                    <span className="ml-4 text-gray-600 min-w-[100px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}