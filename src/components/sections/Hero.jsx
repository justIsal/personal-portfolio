import React, { useState } from 'react';

const ScrambleText = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span
      onMouseEnter={scramble}
      className="cursor-pointer hover:text-neon-secondary transition-colors"
    >
      {display}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start">
      <p className="font-mono text-neon-primary mb-4 ml-1">Hi, my name is</p>

      <h1 className="text-5xl md:text-7xl font-bold text-text-light mb-2 tracking-tight">
        <ScrambleText text="Muhammad Tsalman" />
      </h1>

      <h2 className="text-4xl md:text-6xl font-bold text-text-dim mb-6 tracking-tight">
        FUll Stack Web.
      </h2>

      <p className="max-w-xl text-text-dim text-lg leading-relaxed mb-10">
        I'm a software engineer seeking to build functional web applications and modern frontend
        interfaces. Currently focused on building accessible, human-centered products as a 
        <span className="text-neon-secondary font-mono"> Freelance Developer</span>.
      </p>

      <a
        href="#work"
        className="px-8 py-4 border border-neon-primary text-neon-primary font-mono text-sm rounded hover:bg-neon-primary/10 transition-all"
      >
        Check out my projects
      </a>
    </section>
  );
};

export default Hero;
