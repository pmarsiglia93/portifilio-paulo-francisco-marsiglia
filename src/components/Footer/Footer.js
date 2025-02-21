// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github-1.png';

const Footer = () => {
  const whatsappNumber = '5511965727895'; // Substituir pelo seu número real
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="footer" id="contato">
      <div className="footer-container">
        <p className="footer-texto">Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋</p>
        <ul className="footer-contato">
          <li><a href="mailto:pmarsiglia93@gmail.com">pmarsiglia93@gmail.com</a></li>
          <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer">+55 11 96572-7895</a></li>
          <li className="footer-icons">
            <a href="https://www.linkedin.com/in/paulomarsiglia/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://github.com/pmarsiglia93" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="footer-icon" />
            </a>
          </li>
        </ul>
        <p className="footer-copy">Paulo Francisco Marsiglia. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;