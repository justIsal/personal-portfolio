import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, desc, tech, github, external }) => {
  return (
    <div className="group relative bg-void-card rounded shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-linear-to-r from-neon-primary/10 to-neon-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>

      <div className="relative p-8 h-full flex flex-col items-start border border-white/5 group-hover:border-neon-secondary/30 rounded">
        <div className="flex justify-between w-full mb-6 items-center">
          <div className="font-mono text-neon-primary text-3xl">Folder</div>
          <div className="flex gap-4 text-text-light">
            {github && (
              <Link to={github} className="hover:text-neon-primary transition-colors">
                <FiGithub size={20} />
              </Link>
            )}
            {external && (
              <Link to={external} className="hover:text-neon-secondary transition-colors">
                <FiExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-text-light mb-2 group-hover:text-neon-secondary transition-colors">
          {title}
        </h3>
        <p className="text-text-dim text-sm leading-relaxed mb-6 flex-1">{desc}</p>

        <ul className="flex flex-wrap gap-3 font-mono text-xs text-text-dim/80">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
