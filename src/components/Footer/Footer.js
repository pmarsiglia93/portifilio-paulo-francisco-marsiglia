// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="footer-container">
        <p className="footer-texto">Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋</p>
        <ul className="footer-contato">
          <li>pmarsiglia93@gmail.com</li>
          <li>+55 11 96572-7895</li>
        </ul>
        <p className="footer-copy">Paulo Francisco Marsiglia. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;