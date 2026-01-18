import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const links = ['About', 'Experience', 'Work'];
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const targetId = id.toLowerCase();
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', `/#${targetId}`);
    } else {
      navigate(`/#${targetId}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-void-bg/80 border-b border-text-dim/10 transition-colors duration-300">
      <div className="px-6 md:px-12 h-20 flex items-center justify-between max-w-6xl mx-auto">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xl font-bold text-neon-primary tracking-tighter hover:text-neon-secondary transition-colors"
        >
          &lt;LC /&gt;
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`/#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link)}
                className="group flex items-center gap-1 text-text-dim hover:text-neon-secondary transition-colors cursor-pointer"
              >
                <span className="text-neon-primary">0{i + 1}.</span>
                <span className="group-hover:translate-x-1 transition-transform">{link}</span>
              </a>
            </li>
          ))}

          <li className="ml-4 pl-4 border-l border-text-dim/20">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-dim hover:text-neon-secondary transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 text-neon-primary hover:text-neon-secondary transition-all active:scale-95"
            aria-label="Toggle Theme Mobile"
          >
            {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
