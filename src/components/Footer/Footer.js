// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="footer-container">
        <p className="footer-texto">Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋</p>
        <ul className="footer-contato">
          <li>lobo@email.com</li>
          <li>+55 21 9999-9999</li>
        </ul>
        <p className="footer-copy">Lobo. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;