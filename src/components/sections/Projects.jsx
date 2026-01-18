import React from 'react';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Algorithmic Trading Bot',
      desc: 'A backend system built with Go that analyzes market trends and executes trades automatically based on predefined strategies.',
      tech: ['Go', 'PostgreSQL', 'Docker'],
      github: '#',
      external: '#',
    },
    {
      title: 'School Management API',
      desc: 'RESTful API designed for handling complex student data, attendance, and grading systems with role-based security.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      github: '#',
      external: '#',
    },
    {
      title: 'Interactive Portfolio v1',
      desc: 'First iteration of personal portfolio focusing on minimal design and high performance scores.',
      tech: ['React', 'Tailwind', 'Vite'],
      github: '#',
      external: '#',
    },
  ];

  return (
    <section id="work" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-bold text-text-light flex items-center gap-2">
          <span className="font-mono text-neon-primary text-lg">03.</span> Some Things I've Built
        </h2>
        <div className="h-px bg-white/10 w-48"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
