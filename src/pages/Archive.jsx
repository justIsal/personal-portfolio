import React from 'react';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Archive = () => {
  const projects = [
    {
      year: '2024',
      title: 'Algorithmic Trading Bot',
      madeAt: 'Freelance',
      tech: ['Go', 'PostgreSQL', 'Docker'],
      link: 'https://github.com',
      external: '#',
    },
    {
      year: '2023',
      title: 'School Management API',
      madeAt: 'Freelance',
      tech: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com',
      external: '#',
    },
    {
      year: '2023',
      title: 'E-Commerce Dashboard',
      madeAt: 'Practice',
      tech: ['Vue.js', 'Tailwind', 'Firebase'],
      link: 'https://github.com',
      external: '#',
    },
    {
      year: '2022',
      title: 'Weather Tracker',
      madeAt: 'Practice',
      tech: ['React Native', 'Expo', 'API'],
      link: 'https://github.com',
      external: '#',
    },
  ];

  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-7xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-neon-primary font-mono text-sm mb-8 hover:underline group"
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-bold text-text-light mb-8 md:mb-12">Archive</h1>

      <div className="w-full overflow-x-auto pb-6">
        <table className="w-full text-left border-collapse min-w-full md:min-w-200">
          <thead>
            <tr className="text-text-dim font-mono text-xs md:text-sm border-b border-white/10">
              <th className="py-4 pr-4 font-normal">Year</th>
              <th className="py-4 pr-4 font-normal">Title</th>
              <th className="py-4 pr-4 font-normal hidden md:table-cell">Made at</th>
              <th className="py-4 pr-4 font-normal hidden lg:table-cell">Built with</th>
              <th className="py-4 font-normal">Link</th>
            </tr>
          </thead>
          <tbody className="font-mono text-xs md:text-sm">
            {projects.map((project, i) => (
              <tr
                key={i}
                className="group border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 pr-4 text-neon-primary align-top">{project.year}</td>

                <td className="py-4 pr-4 font-bold text-text-light group-hover:text-neon-secondary transition-colors align-top">
                  <div className="block md:hidden mb-2 text-base">{project.title}</div>
                  <div className="hidden md:block">{project.title}</div>

                  <div className="flex flex-wrap gap-2 md:hidden">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] text-text-dim border border-white/10 px-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="py-4 pr-4 text-text-dim hidden md:table-cell align-top">
                  {project.madeAt}
                </td>

                <td className="py-4 pr-4 hidden lg:table-cell align-top">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-neon-secondary/10 text-neon-secondary px-2 py-1 rounded text-xs whitespace-nowrap"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="py-4 flex gap-4 text-text-dim align-top mt-1 md:mt-0">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neon-primary p-2 md:p-0"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neon-primary p-2 md:p-0"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Archive;
