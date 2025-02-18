// Atualizando App.js para incluir o Header
import React from 'react';
import Header from './components/Header/Header';
import Introducao from './components/Introducao/Introducao';
import Experiencia from './components/Experiencia/Experiencia';
import Formacao from './components/Formacao/Formacao';
import Footer from './components/Footer/Footer';
import './styles/global.css';


const App = () => {
  return (
    <>
      <Header />
      <Introducao />
      <Experiencia />
      <Formacao />
      <Footer />
    </>
  );
};

export default App;