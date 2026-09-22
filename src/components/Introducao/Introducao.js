// src/components/Introducao/Introducao.js
import React from 'react';
import './Introducao.css';
import paulo from '../../assets/paulo.jpeg';

const Introducao = () => {
  return (
    <main className="container introducao" id="topo">
      <div className="introducao-foto">
        <img src={paulo} alt="Paulo Francisco Marsiglia" />
      </div>
      <div className="introducao-conteudo">
        <span className="introducao-label">Portfólio pessoal</span>
        <h1>Desenvolvedor<br />Full Stack <br /></h1>
        <p>Localizado em São Paulo</p>
      </div>
    </main>
  );
};

export default Introducao;
