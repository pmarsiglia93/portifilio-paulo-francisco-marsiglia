/* src/components/Header/Header.js */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <a className="logo" href="#topo" aria-label="Ir para o início">Paulo</a>

      {/* Menu Desktop */}
      <nav className="desktop-menu" aria-label="Navegação principal">
        <ul>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      {/* Menu Burguer */}
      <button
        className="menu-burger"
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        aria-controls="menu-mobile"
      >
        ☰
      </button>

      {/* Animação do menu com Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button className="menu-close" type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>×</button>
            <nav aria-label="Navegação mobile">
              <ul>
                <li><a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
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
