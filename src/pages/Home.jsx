import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="px-6 mx-auto max-w-5xl md:px-12 lg:px-20 pt-24 pb-20">
      <Hero />
      <About />
      <Experience />
      <Projects />

      <div className="mt-20 text-center">
        <Link
          to="/archive"
          className="inline-block px-8 py-4 border border-neon-primary text-neon-primary font-mono text-sm rounded hover:bg-neon-primary/10 transition-all"
        >
          View Full Project Archive
        </Link>
      </div>
    </main>
  );
};

export default Home;
