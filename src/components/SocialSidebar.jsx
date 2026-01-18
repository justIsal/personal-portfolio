import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiCodepen } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SocialSidebar = () => {
  const socials = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/justIsal', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/muhammad-tsalman-602332285', label: 'LinkedIn' },
    { icon: <FiCodepen size={20} />, url: 'https://codepen.io/justIsal', label: 'CodePen' },
    {
      icon: <TbBrandDiscord size={20} />,
      url: 'https://discord.com/users/muhammadtsalman',
      label: 'Discord',
    },
    { icon: <FiInstagram size={20} />, url: 'https://instagram.com/username', label: 'Instagram' },
  ];

  return (
    <div className="hidden md:flex fixed bottom-0 left-6 lg:left-12 flex-col items-center gap-6 z-40">
      <ul className="flex flex-col gap-6">
        {socials.map((social, index) => (
          <li key={index}>
            <Link
              to={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-text-dim hover:text-neon-secondary hover:-translate-y-1 transition-all duration-300 block p-2"
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-px h-24 bg-linear-to-b from-text-dim to-transparent"></div>
    </div>
  );
};

export default SocialSidebar;
