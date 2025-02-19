// src/components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <span className="logo">Paulo</span>
      <nav>
        <ul className="header-menu">
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
