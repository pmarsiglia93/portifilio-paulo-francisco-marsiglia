// src/components/Introducao/Introducao.js
import React from 'react';
import './Introducao.css';
import perfil from '../../assets/perfil.jpg';

const Introducao = () => {
  return (
    <main className="container introducao">
      <img src={perfil} alt="Lobo Cinza" />
      <div>
        <h1>Desenvolvedor<br />Front End &<br /> UX/UI Designer</h1>
        <p>Localizado no Rio de Janeiro 🏖</p>
      </div>
    </main>
  );
};

export default Introducao;