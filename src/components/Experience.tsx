
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: "Frontend Developer",
      company: "TechNova Solutions",
      period: "June 2023 - Present",
      description: "Working on developing responsive user interfaces using React and TypeScript. Collaborated with designers to implement UI/UX designs and integrated with backend APIs.",
      skills: ["React.js", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      position: "Junior Frontend Developer",
      company: "Digital Craftsmen Kenya",
      period: "January 2022 - May 2023",
      description: "Developed and maintained client websites using modern JavaScript frameworks. Participated in code reviews and worked closely with the design team to implement responsive designs.",
      skills: ["HTML/CSS", "JavaScript", "React.js", "Bootstrap"]
    },
    {
      position: "Web Development Intern",
      company: "Nairobi Tech Hub",
      period: "August 2021 - December 2021",
      description: "Assisted in building and maintaining websites for local businesses. Gained hands-on experience with front-end development and basic backend integration.",
      skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP"]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-subtitle">My Journey</h2>
          <h3 className="section-title">Work Experience</h3>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-kenyan-blue dark:text-kenyan-orange mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            Work Experience
          </h3>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-kenyan-blue before:via-kenyan-teal before:to-kenyan-orange dark:before:from-kenyan-orange dark:before:via-kenyan-teal dark:before:to-kenyan-blue">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-kenyan-blue dark:border-kenyan-orange text-kenyan-blue dark:text-kenyan-orange group-hover:bg-kenyan-blue dark:group-hover:bg-kenyan-orange group-hover:text-white transition-colors shadow shrink-0 ml-0.5 lg:ml-0">
                  {index + 1}
                </span>
                <div className="ml-6 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap justify-between items-center mb-1">
                    <h4 className="text-lg font-bold text-kenyan-blue dark:text-kenyan-orange">{exp.position}</h4>
                    <time className="text-sm text-kenyan-orange dark:text-kenyan-teal font-semibold">{exp.period}</time>
                  </div>
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h5>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
