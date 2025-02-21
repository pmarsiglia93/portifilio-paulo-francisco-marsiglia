// Atualizando App.js para incluir o Header
import React from 'react';
import Header from './components/Header/Header';
import Introducao from './components/Introducao/Introducao';
import Experiencia from './components/Experiencia/Experiencia';
import Formacao from './components/Formacao/Formacao';
import Projetos from './components/Projetos/Projetos';
import Footer from './components/Footer/Footer';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import './styles/global.css';


const App = () => {
  return (
    <>
      <Header />
      <Introducao />
      <Experiencia />
      <Formacao />
      <Projetos />      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;