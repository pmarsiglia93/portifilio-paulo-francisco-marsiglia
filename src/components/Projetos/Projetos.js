// src/components/Projetos/Projetos.js
import React, { useState } from 'react';
import './Projetos.css';
import projeto1 from '../../assets/projeto1.png';

const projetos = [
  {
    id: 1,
    titulo: 'Bikcraft',
    imagem: projeto1,
    site: 'https://bikcraft-psi-beige.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/bikcraft'
  },
  {
    id: 2,
    titulo: 'Projeto 2',
    imagem: '/assets/projeto2.jpg',
    site: 'https://projeto2.com',
    repositorio: 'https://github.com/seuusuario/projeto2'
  },
];

const Projetos = () => {
  const [modalProjeto, setModalProjeto] = useState(null);

  return (
    <section className="projetos" id="projetos" aria-label="Projetos">
      <div className="projetos-container">
        <h2 className="subtitulo">Projetos</h2>
        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="projeto-item" onClick={() => setModalProjeto(projeto)}>
              <img src={projeto.imagem} alt={projeto.titulo} className="projeto-thumb" />
              <h3>{projeto.titulo}</h3>
            </div>
          ))}
        </div>
      </div>
      {modalProjeto && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalProjeto(null)}>&times;</span>
            <img src={modalProjeto.imagem} alt={modalProjeto.titulo} className="modal-img" />
            <h3>{modalProjeto.titulo}</h3>
            <div className="modal-buttons">
              <a href={modalProjeto.site} target="_blank" rel="noopener noreferrer" className="btn">Ver Site</a>
              <a href={modalProjeto.repositorio} target="_blank" rel="noopener noreferrer" className="btn">Ver Repositório</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projetos;