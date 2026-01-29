import React, { useState } from 'react';

const Experience = () => {
  const jobs = [
    {
      id: 0,
      title: 'Freelance Developer',
      company: 'Self-Employed',
      range: '2023 - Present',
      duties: [
        'Converted UI/UX designs from Figma into accurate code using React.js and Tailwind CSS.',
        'Ensured all websites are fully responsive, providing a seamless experience on both mobile and desktop.',
        'Optimized web performance by managing assets and images for faster loading times.',
        'ODeployed applications to live environments using Vercel/Netlify and maintained code using Git.',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 max-w-3xl">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-text-light flex items-center gap-2">
          <span className="font-mono text-neon-primary text-lg">02.</span> Where I've Worked
        </h2>
        <div className="h-px bg-white/10 w-48"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col border-l border-white/10">
          {jobs.map((job) => (
            <button
              key={job.id}
              onClick={() => setActiveTab(job.id)}
              className={`px-4 py-3 text-left font-mono text-xs border-l-2 transition-all duration-300 -ml-0.5 ${
                activeTab === job.id
                  ? 'border-neon-secondary text-neon-secondary bg-neon-secondary/5'
                  : 'border-transparent text-text-dim hover:text-text-light hover:bg-white/5'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-text-light">
            {jobs[activeTab].title}{' '}
            <span className="text-neon-primary">@ {jobs[activeTab].company}</span>
          </h3>
          <p className="font-mono text-xs text-text-dim mb-6 mt-1">{jobs[activeTab].range}</p>
          <ul className="space-y-4">
            {jobs[activeTab].duties.map((duty, i) => (
              <li key={i} className="flex items-start gap-3 text-text-dim text-sm leading-relaxed">
                <span className="text-neon-secondary mt-1">▹</span>
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
