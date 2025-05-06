
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "A responsive e-commerce platform built with React and Node.js, featuring product listings, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "A drag-and-drop task management application with customizable boards and real-time updates.",
      technologies: ["React", "Redux", "TypeScript", "Firebase"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Real Estate Listing API",
      category: "backend",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "A RESTful API for real estate listings with authentication, property search, and image uploads.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "AWS S3"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Portfolio Website",
      category: "frontend",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      codeLink: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="section-subtitle">My Portfolio</h2>
          <h3 className="section-title">Recent Projects</h3>
          <p className="text-gray-600 max-w-2xl">
            Here are some of my recent projects that showcase my skills and expertise
            in frontend and backend development.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {['all', 'frontend', 'backend', 'fullstack'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={activeFilter === filter 
                ? "bg-kenyan-blue" 
                : "border-kenyan-blue text-kenyan-blue hover:bg-kenyan-blue/10"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-kenyan-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {project.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-kenyan-blue mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="default"
                    size="sm"
                    className="bg-kenyan-blue hover:bg-kenyan-blue/90 flex-1"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-kenyan-blue text-kenyan-blue hover:bg-kenyan-blue/10 flex-1"
                    asChild
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-kenyan-blue hover:bg-kenyan-blue/90">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
