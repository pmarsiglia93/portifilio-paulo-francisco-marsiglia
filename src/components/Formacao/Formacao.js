// src/components/Formacao/Formacao.js
import React from 'react';
import './Formacao.css';

const Formacao = () => {
  return (
    <section className="formacao" id="formacao" aria-label="Formação">
      <div className="formacao-container">
        <h2 className="subtitulo">Formação</h2>
        <div>
          <p className="formacao-texto">Minha experiência acadêmica mais recente é o <strong>MBA USP/Esalq</strong> 🎓 em <strong>Engenharia de Software</strong>, que estou cursando. Além disso, me mantenho atualizado por meio de cursos intensivos online.</p>
          <ul className="faculdade-lista">
            <li className="faculdade">
              <span className="faculdade-tipo">Bacharel</span>
              <h3 className="faculdade-curso">Lazer e Turismo</h3>
              <span className="faculdade-instituicao">USP</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">Bootcamp</span>
              <h3 className="faculdade-curso">Java FullStack</h3>
              <span className="faculdade-instituicao">Generation Brasil</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">Pós Graduação</span>
              <h3 className="faculdade-curso">Engenharia de Software</h3>
              <span className="faculdade-instituicao">MBA USP/Esalq</span>
            </li>
          </ul>
          <div className="formacao-extra">
            <div className="cursos">
              <h3>Cursos intensivos</h3>
              <ul>
                <li>Node.js: criando uma API Rest com Express e MongoDB | Alura  <span>10h</span></li>
                <li>HTML e CSS | Origamid  <span>46h</span></li>
                <li>HTML e CSS: praticando HTML/CSS | Alura  <span>8h</span></li>
                <li>SASS: CSS sintaticamente espetacular | Alura  <span>8h</span></li>
                <li>Javascript: primeiros passos com a linguagem | Alura  <span>10h</span></li>
                <li>Scrum: Agilidade em seu projeto | Alura  <span>10h</span></li>
                <li>Git e Github: Controle e compartilhe seu código | Alura  <span>6h</span></li>
                <li>Fundamentos de Agilidade: seus primeiros passos para transformação ágil | Alura  <span>6h</span></li>
                <li>Java JRE e JDK: Escreva o seu primeiro código com Eclipse | Alura  <span>8h</span></li>
                <li>HTML5 e CSS3 parte 4: Avançando no CSS | Alura  <span>8h</span></li>
                <li>HTML5 e CSS3 parte 3: Trabalhando com formulários e tabelas | Alura  <span>8h</span></li>
                <li>HTML5 e CSS3 parte 2: Posicionamento, listas e navegação | Alura  <span>8h</span></li>
                <li>HTML5 e CSS3 parte 1: A primeira página da Web | Alura  <span>8h</span></li>

                <li>Git e Github | Curso em vídeo  <span>20h</span></li>
                <li>Javascript | Curso em vídeo  <span>40h</span></li>
                <li>HTML5 e CSS3 Modulo 1 | Curso em vídeo  <span>40h</span></li>
                <li>Hardware | Curso em vídeo  <span>20h</span></li>
                <li>Excel | Curso em vídeo  <span>40h</span></li>
                <li>MySQL | Curso em vídeo <span>40h</span></li>
              </ul>
            </div>
            <div className="idiomas">
              <h3>Idiomas</h3>
              <ul>
                <li>Inglês <span>/ Intermediário</span></li>
                <li>Espanhol <span>/ Básico</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;