import React from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Vue.js',
    'Go (Golang)',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Docker',
  ];

  return (
    <section id="about" className="py-24">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-text-light flex items-center gap-2">
          <span className="font-mono text-neon-primary text-lg">01.</span> About Me
        </h2>
        <div className="h-px bg-white/10 w-48"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-text-dim leading-relaxed space-y-4">
          <p>
            Hello! My interest in web development started back when I decided to try editing custom
            themes — turns out hacking together HTML & CSS is fun!
          </p>
          <p>
            Fast-forward to today, I focus on building accessible, inclusive products. I enjoy the
            logic behind backend systems and the creativity of frontend interactions.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>

          <ul className="grid grid-cols-2 gap-2 font-mono text-xs mt-4">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-neon-secondary">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 relative group">
          <div className="absolute inset-0 border-2 border-neon-primary rounded translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>

          <div className="relative h-64 bg-void-card rounded p-6 font-mono text-xs text-text-dim overflow-hidden flex flex-col justify-center border border-white/5 hover:border-neon-secondary/50 transition-colors">
            <div className="mb-2 text-neon-secondary">class Developer {`{`}</div>
            <div className="pl-4">
              <span className="text-neon-primary">constructor</span>() {`{`}
              <div className="pl-4">this.name = "Lasi";</div>
              <div className="pl-4">this.role = "Fullstack";</div>
              <div className="pl-4">this.status = "Building";</div>
              <div>{`}`}</div>
            </div>
            <div className="mt-2 text-neon-secondary">{`}`}</div>

            <div className="absolute bottom-4 right-4 animate-pulse-slow w-2 h-4 bg-neon-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
