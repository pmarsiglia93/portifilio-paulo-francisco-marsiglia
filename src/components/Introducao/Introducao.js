// src/components/Introducao/Introducao.js
import React from 'react';
import './Introducao.css';
import paulo from '../../assets/paulo.jpeg';

const Introducao = () => {
  return (
    <main className="container introducao">
      <img src={paulo} alt="Lobo Cinza" />
      <div>
        <h1>Desenvolvedor<br />Front End <br /></h1>
        <p>Localizado em São Paulo</p>
      </div>
    </main>
  );
};

export default Introducao;