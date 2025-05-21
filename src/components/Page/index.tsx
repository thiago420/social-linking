import React, { type JSX } from 'react';
import LinkButton from '../LinkButton';
import BackgroundAnimation from '../BackgroundAnimation';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import './style.css';

const links: { label: string; url: string; icon: JSX.Element, disabled?: boolean }[] = [
  { label: 'GitHub', url: 'https://github.com/thiago420', icon: <FaGithub size={25} /> },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/thiago-elias-antunes', icon: <FaLinkedin size={25} /> },
  { label: 'Portfólio', url: 'SEM_LINK', icon: <FaGlobe size={25} />, disabled: true },
];

const Page: React.FC = () => {
  return (
    <div className="app-container">
      <BackgroundAnimation />
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="terminal-title">~ /home/thiago420</span>
        </div>
        <div className="terminal-content">
          <h1 className="username">Thiago420</h1>
          <p className="tagline">Desenvolvedor Front-end</p>
          <div className="links">
            {links.map((link, idx) => (
              <LinkButton key={idx} {...link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
