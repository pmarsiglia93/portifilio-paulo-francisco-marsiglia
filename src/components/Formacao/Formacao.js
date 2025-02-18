// src/components/Formacao/Formacao.js
import React from 'react';
import './Formacao.css';

const Formacao = () => {
  return (
    <section className="formacao" id="formacao" aria-label="Formação">
      <div className="formacao-container">
        <h2 className="subtitulo">Formação</h2>
        <div>
          <p className="formacao-texto">Minha mais recente experiência acadêmica foi o <strong>mestrado</strong> 🎓 que fiz no exterior em <strong>UX Design</strong>. Além disso, me mantenho sempre atualizado com cursos intensivos online.</p>
          <ul className="faculdade-lista">
            <li className="faculdade">
              <span className="faculdade-tipo">Bacharel</span>
              <h3 className="faculdade-curso">Administração de Empresas</h3>
              <span className="faculdade-instituicao">UFRRJ</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">Tecnólogo</span>
              <h3 className="faculdade-curso">Design Digital</h3>
              <span className="faculdade-instituicao">Infnet</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">Mestre</span>
              <h3 className="faculdade-curso">User Experience Design</h3>
              <span className="faculdade-instituicao">UCLL</span>
            </li>
          </ul>
          <div className="formacao-extra">
            <div className="cursos">
              <h3>Cursos intensivos</h3>
              <ul>
                <li>Ux Design & UI Design <span>56h</span></li>
                <li>Front End para Iniciantes <span>72h</span></li>
              </ul>
            </div>
            <div className="idiomas">
              <h3>Idiomas</h3>
              <ul>
                <li>Inglês <span>/ Fluente</span></li>
                <li>Espanhol <span>/ Intermediário</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;