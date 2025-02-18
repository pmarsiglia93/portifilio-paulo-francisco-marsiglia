// src/components/Header/Header.js
import React from 'react';
import './Header.css';
import logo from '../../assets/marca.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Lobo" width="104" height="38" />
      <nav>
        <ul className="header-menu">
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
