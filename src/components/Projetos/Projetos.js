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
    descricao: 'Bikcraft é um projeto de e-commerce para bicicletas elétricas de alta performance.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagem: projeto1,
    site: 'https://bikcraft-psi-beige.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/bikcraft'
  },
  {
    id: 2,
    titulo: 'Pesquisa Ativa',
    descricao: 'Plataforma para análise de mercado e insights estratégicos.',
    tecnologias: ['HTML', 'CSS', 'JS', 'React'],
    imagem: projeto2,
    site: 'https://pesquisa-ativa-negocios-sigma.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/pesquisa-ativa-negocios'
  },
  {
    id: 3,
    titulo: 'Filmes API',
    descricao: 'Aplicação para busca e favoritos de filmes consumindo API externa.',
    tecnologias: ['HTML', 'CSS','Javascript', 'API Rest'],
    imagem: projeto3,
    site: 'https://case-stalse.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/case-stalse'
  },
  {
    id: 4,
    titulo: 'Wishlist',
    descricao: 'Plataforma para criar e gerenciar listas de desejos para e-commerce.',
    tecnologias: ['HTML', 'CSS', 'Javascript'],
    imagem: projeto4,
    site: 'https://case-b8one.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/case-b8one'
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
            <p className="modal-descricao">{modalProjeto.descricao}</p>
            <div className="modal-tecnologias">
              {modalProjeto.tecnologias.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
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