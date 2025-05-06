
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3/SCSS", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Responsive Design", level: 90 },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "REST APIs", level: 75 },
        { name: "Firebase", level: 70 },
      ]
    },
    {
      category: "Database & Others",
      skills: [
        { name: "MongoDB", level: 65 },
        { name: "MySQL", level: 60 },
        { name: "Git/GitHub", level: 80 },
        { name: "Kotlin", level: 60 },
        { name: "Fiber Optics", level: 85 },
      ]
    }
  ];

  const softSkills = ["Problem-Solving", "Team Collaboration", "Communication", "Time Management"];
  const tools = ["Git", "Canva", "Microsoft Office Suite"];

  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-subtitle">My Skills</h2>
          <h3 className="section-title">What I'm good at</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            With 2+ years of experience, I've developed a diverse set of skills
            across the full web development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-kenyan-blue dark:text-kenyan-orange mb-4">{category.category}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h4>
                        <span className="text-sm text-kenyan-orange dark:text-kenyan-teal">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-kenyan-blue to-kenyan-teal dark:from-kenyan-orange dark:to-kenyan-teal`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-kenyan-blue dark:text-kenyan-orange mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm text-gray-700 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-kenyan-blue dark:text-kenyan-orange mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm text-gray-700 dark:text-gray-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
