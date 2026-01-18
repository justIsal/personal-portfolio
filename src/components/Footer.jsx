import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiCodepen } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socials = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/username' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/username' },
    { icon: <FiCodepen size={20} />, url: 'https://codepen.io/username' },
    { icon: <TbBrandDiscord size={20} />, url: 'https://discord.com/users/username' },
    { icon: <FiInstagram size={20} />, url: 'https://instagram.com/username' },
  ];

  return (
    <footer className="py-8 text-center text-sm font-mono text-text-dim relative z-10 bg-void-bg mt-auto">
      <div className="flex md:hidden justify-center gap-6 mb-4">
        {socials.map((social, index) => (
          <Link 
            key={index}
            to={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-neon-secondary transition-colors"
          >
            {social.icon}
          </Link>
        ))}
      </div>
      
      <p className="hover:text-neon-primary transition-colors cursor-default">
        Designed & Built by Lasi Craft.
      </p>
    </footer>
  );
};

export default Footer;