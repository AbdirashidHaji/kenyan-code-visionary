
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3/SCSS", level: 85 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "MongoDB", level: 60 },
        { name: "RESTful APIs", level: 75 },
        { name: "SQL", level: 60 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Webpack", level: 65 },
        { name: "Responsive Design", level: 90 },
        { name: "Testing (Jest)", level: 60 },
        { name: "Docker", level: 50 },
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-subtitle">My Skills</h2>
          <h3 className="section-title">What I'm good at</h3>
          <p className="text-gray-600 max-w-2xl">
            With 2+ years of experience, I've developed a diverse set of skills
            across the full web development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-kenyan-blue mb-4">{category.category}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-gray-800">{skill.name}</h4>
                        <span className="text-sm text-kenyan-orange">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-kenyan-blue to-kenyan-teal`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-kenyan-blue mb-8">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Firebase", "Redux", "GraphQL", "Next.js", "Material UI", "Bootstrap", "Figma", "AWS", "Vercel", "WordPress"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
