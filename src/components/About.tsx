
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-subtitle">About Me</h2>
          <h3 className="section-title">Get to know me better</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-tr from-kenyan-blue to-kenyan-teal flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AM</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-kenyan-orange text-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl font-bold">2+</div>
              <div className="text-sm uppercase tracking-widest">Years of Experience</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-kenyan-blue">Fullstack Developer from Kenya</h3>
            <p className="text-gray-600">
              I'm Abdirashid Mohamed Haji, a passionate fullstack developer based in Kenya with expertise in
              building modern web applications. With 2 years of frontend experience and 8 months of backend development,
              I combine technical skills with creative problem-solving to deliver exceptional digital experiences.
            </p>
            <p className="text-gray-600">
              My journey in tech began with a curiosity about how websites work, which evolved into a career
              building solutions that solve real-world problems. I specialize in JavaScript technologies
              including React, Node.js, and modern frameworks, with a focus on creating
              performant and user-friendly applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <h4 className="font-semibold text-kenyan-blue">Name:</h4>
                <p>Abdirashid Mohamed Haji</p>
              </div>
              <div>
                <h4 className="font-semibold text-kenyan-blue">Email:</h4>
                <p>abdirashid@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-kenyan-blue">From:</h4>
                <p>Kenya</p>
              </div>
              <div>
                <h4 className="font-semibold text-kenyan-blue">Available:</h4>
                <p>Freelance & Full-time</p>
              </div>
            </div>
            
            <Button className="bg-kenyan-blue hover:bg-kenyan-blue/90 mt-4">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
