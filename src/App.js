import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Introducao from './components/Introducao/Introducao';
import Experiencia from './components/Experiencia/Experiencia';
import Formacao from './components/Formacao/Formacao';
import Habilidades from './components/Habilidades/Habilidades';
import Projetos from './components/Projetos/Projetos';
import Footer from './components/Footer/Footer';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import './styles/global.css';


const App = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      elementos.forEach((elemento) => elemento.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observer.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Introducao />
      <Habilidades />
      <Experiencia />
      <Formacao />
      <Projetos />      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
