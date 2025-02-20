/* src/components/Header/Header.js */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <span className="logo">Paulo</span>

      {/* Menu Desktop */}
      <nav className="desktop-menu">
        <ul>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      {/* Menu Burguer */}
      <button className="menu-burger" onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {/* Animação do menu com Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button className="menu-close" onClick={() => setMenuOpen(false)}>×</button>
            <nav>
              <ul>
                <li><a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a></li>
                <li><a href="#formacao" onClick={() => setMenuOpen(false)}>Formação</a></li>
                <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
                <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;