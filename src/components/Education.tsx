
import React from 'react';

const Education = () => {
  const educationHistory = [
    {
      degree: "Certified Fiber Optic Technician",
      institution: "African Advanced Level Telecommunications Institute",
      period: "Mar 2025"
    },
    {
      degree: "Diploma in Software Development",
      institution: "Institute of Software Technologies",
      period: "Sept 2023 – Oct 2024"
    },
    {
      degree: "Certificate in Software Development",
      institution: "Institute of Software Technologies",
      period: "May 2023 – Sept 2023"
    },
    {
      degree: "Certificate in Computer Applications Packages",
      institution: "Inceptor Institute of Technology",
      period: "Jul 2022 – Nov 2022"
    },
    {
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "Mandera Secondary School",
      period: "2018 – 2021"
    },
    {
      degree: "Kenya Certificate of Primary Education (KCPE)",
      institution: "Alhidaya Integrated Academy",
      period: "2009 – 2017"
    }
  ];

  const certifications = [
    {
      name: "Certified Fiber Optics Technician (CFOT)",
      issuer: "Fiber Optics Association"
    },
    {
      name: "Diploma & Certificate in Software Development",
      issuer: "Institute of Software Technologies"
    },
    {
      name: "Certificate in Computer Applications Packages",
      issuer: "Inceptor Institute of Technology"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-subtitle">My Background</h2>
          <h3 className="section-title">Education & Certifications</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-kenyan-blue dark:text-kenyan-orange mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              Education
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-kenyan-blue before:via-kenyan-teal before:to-kenyan-orange dark:before:from-kenyan-orange dark:before:via-kenyan-teal dark:before:to-kenyan-blue">
              {educationHistory.map((edu, index) => (
                <div key={index} className="relative flex items-start group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-kenyan-blue dark:border-kenyan-orange text-kenyan-blue dark:text-kenyan-orange group-hover:bg-kenyan-blue dark:group-hover:bg-kenyan-orange group-hover:text-white transition-colors shadow shrink-0 ml-0.5 lg:ml-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  </span>
                  <div className="ml-6 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap justify-between items-center mb-1">
                      <h4 className="text-lg font-bold text-kenyan-blue dark:text-kenyan-orange">{edu.degree}</h4>
                      <time className="text-sm text-kenyan-orange dark:text-kenyan-teal font-semibold">{edu.period}</time>
                    </div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-3">{edu.institution}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-kenyan-blue dark:text-kenyan-orange mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" /><path d="M17.5 15L15 21L12.5 15L15 17.5" /></svg>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold text-kenyan-blue dark:text-kenyan-orange mb-1">{cert.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">Issued by: {cert.issuer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-r from-kenyan-blue to-kenyan-teal dark:from-kenyan-orange dark:to-kenyan-teal rounded-lg text-white">
              <h4 className="text-xl font-bold mb-3">Continuous Learning</h4>
              <p>I am dedicated to continuous professional development and regularly update my skills through online courses, workshops, and industry events.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
