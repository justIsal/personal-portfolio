import React from 'react';

const skills = [
  'JavaScript (ES6+)',
  'React.js',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'MySQL',
  'Firebase',
  'Supabase',
];

const About = () => {
  return (
    <section id="about" className="py-24 max-w-250 mx-auto px-6">
      <div className="flex items-center gap-4 mb-10 w-full">
        <h2 className="text-2xl font-bold text-text-light flex items-center gap-2 whitespace-nowrap">
          <span className="font-mono text-neon-primary text-xl">01.</span> About Me
        </h2>
        <div className="h-px bg-white/10 w-full max-w-75"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-text-dim leading-relaxed space-y-4 text-base">
          <p>
            Hello! My name is <span className="text-neon-primary">Tsalman</span> and I enjoy
            creating things that live on the internet. My interest in web development started back
            in 2021 when I decided to try editing custom Tumblr themes — turns out hacking together
            HTML & CSS is fun!
          </p>
          <p>
            Fast-forward to today, I am a Computer Science graduate with over{' '}
            <span className="text-neon-primary">2 years</span> of freelance experience. I have a
            passion for solving problems through code and am always enthusiastic about learning new
            technologies.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>

          <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-neon-primary">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 flex justify-center md:justify-end items-start relative group">
          <div className="absolute inset-0 w-full h-full border-2 border-neon-primary rounded translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 hidden md:block"></div>

          <div className="relative w-full h-auto min-h-70 bg-void-card rounded p-6 font-mono text-xs sm:text-sm text-text-dim overflow-hidden flex flex-col justify-center border border-white/5 hover:border-neon-secondary/50 transition-colors shadow-xl z-10">
            <pre className="whitespace-pre-wrap font-inherit z-10">
              <code>
                <span className="text-neon-secondary">class</span>{' '}
                <span className="text-neon-primary">Developer</span>{' '}
                <span className="text-white">{'{'}</span>
                {'\n'}
                <span className="pl-4 block">
                  <span className="text-neon-secondary">constructor</span>(){' '}
                  <span className="text-white">{'{'}</span>
                </span>
                <span className="pl-8 block">
                  this.name = <span className="text-green-400">"Tsalman"</span>;
                </span>
                <span className="pl-8 block">
                  this.role = <span className="text-green-400">"Fullstack"</span>;
                </span>
                <span className="pl-8 block">
                  this.status = <span className="text-green-400">"Building"</span>;
                </span>
                <span className="pl-4 block text-white">{'}'}</span>
                <span className="text-white">{'}'}</span>
              </code>
            </pre>

            <div className="absolute bottom-6 right-6 animate-pulse w-2 h-4 bg-neon-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
