// src/components/Projetos/Projetos.js
import React, { useState } from 'react';
import './Projetos.css';
import projeto1 from '../../assets/projeto1.png';
import projeto2 from '../../assets/projeto2.png';
import projeto3 from '../../assets/projeto3.png';
import projeto4 from '../../assets/projeto4.png';

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
    titulo: 'Pesquisa Ativa',
    imagem: projeto2,
    site: 'https://pesquisa-ativa-negocios-sigma.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/pesquisa-ativa-negocios'
  },
  {
    id: 3,
    titulo: 'Filmes API',
    imagem: projeto3,
    site: 'https://case-stalse.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/case-stalse'
  },
  {
    id: 4,
    titulo: 'Wishlist',
    imagem: projeto4,
    site: 'https://case-b8one.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/case-stalse'
  }
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