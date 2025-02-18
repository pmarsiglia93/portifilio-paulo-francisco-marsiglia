// src/components/Experiencia/Experiencia.js
import React from 'react';
import './Experiencia.css';

const Experiencia = () => {
  return (
    <section className="container experiencia" id="experiencia" aria-label="Experiência">
      <h2 className="subtitulo">Experiência</h2>
      <div>
        <p className="experiencia-texto">Desenvolvo pequenos projetos como o Bikcraft utilizando apenas <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>. Para aplicativos web como a rede social Dogs eu trabalhei no <strong>UX</strong> e <strong>UI Design</strong> do projeto.</p>

        <div className="empresa">
          <span className="empresa-ano">2045</span>
          <h3 className="empresa-titulo">Bikcraft</h3>
          <span className="empresa-titulo">Desenvolvedor Júnior</span>
          <p className="empresa-texto">Desenvolvo pequenos projetos como o Bikcraft utilizando apenas HTML, CSS e JavaScript.</p>
          <ul className="empresa-habilidades">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>UX Designer</li>
            <li>UI Designer</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">2044-45</span>
          <h3 className="empresa-titulo">Surfbot</h3>
          <span className="empresa-titulo">Estagiário</span>
          <p className="empresa-texto">Desenvolvo pequenos projetos como o Bikcraft utilizando apenas HTML, CSS e JavaScript.</p>
          <ul className="empresa-habilidades">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">2044</span>
          <h3 className="empresa-titulo">Brafé</h3>
          <span className="empresa-titulo">Voluntário</span>
          <p className="empresa-texto">Desenvolvo pequenos projetos como o Bikcraft utilizando apenas HTML, CSS e JavaScript.</p>
          <ul className="empresa-habilidades">
            <li>Email Marketing</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>UX Designer</li>
            <li>UI Designer</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
