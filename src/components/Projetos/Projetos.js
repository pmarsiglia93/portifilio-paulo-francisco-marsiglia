// src/components/Projetos/Projetos.js
import React, { useState } from 'react';
import './Projetos.css';
import projeto1 from '../../assets/projeto1.png';
import projeto2 from '../../assets/projeto2.png';
import projeto3 from '../../assets/projeto3.png';
import projeto4 from '../../assets/projeto4.png';
import projeto5 from '../../assets/projeto5.png';

const projetos = [
  {
    id: 1,
    titulo: 'Bikcraft',
    descricao: 'Bikcraft é um e-commerce fictício para venda de bicicletas elétricas, desenvolvido com HTML, CSS e JavaScript. O projeto foca em boas práticas de código, HTML semântico, CSS modular e animações para uma experiência dinâmica e responsiva. Além da interface moderna, conta com funcionalidades interativas, como exibição de modelos de bicicletas e um formulário de contato para simulação de compra.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagem: projeto1,
    site: 'https://bikcraft-psi-beige.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/bikcraft'
  },
  {
    id: 2,
    titulo: 'Pesquisa Ativa',
    descricao: 'Pesquisa Ativa é uma plataforma de pesquisa de mercado desenvolvida com React, focada em acessibilidade, responsividade e alta performance. O site conta com animações suaves, cortes diagonais estilizados e um layout intuitivo para destacar os benefícios do serviço.',
    tecnologias: ['HTML', 'CSS', 'JS', 'React'],
    imagem: projeto2,
    site: 'https://pesquisa-ativa-negocios-sigma.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/pesquisa-ativa-negocios'
  },
  {
    id: 3,
    titulo: 'Filmes API',
    descricao: 'Filmes API é uma aplicação desenvolvida com React que consome a OMDB API para exibir informações de filmes. O projeto apresenta uma interface responsiva e moderna, organizando os filmes em categorias temáticas, como Batman, Vingadores e Homem-Aranha. Cada página exibe quatro títulos relevantes, trazendo detalhes diretamente da API para uma experiência dinâmica e fluida.',
    tecnologias: ['HTML', 'CSS','Javascript', 'API Rest'],
    imagem: projeto3,
    site: 'https://case-stalse.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/case-stalse'
  },
  {
    id: 4,
    titulo: 'Wishlist / Cart',
    descricao: 'Wishlist / Cart é uma aplicação desenvolvida com React que permite adicionar produtos a uma lista de favoritos e a um carrinho de compras. Utilizando HTML, CSS e JavaScript, o projeto apresenta uma interface dinâmica e responsiva, onde os usuários podem visualizar e gerenciar seus produtos salvos.',
    tecnologias: ['HTML', 'CSS', 'Javascript', 'React'],
    imagem: projeto4,
    site: 'https://case-b8one.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/case-b8one'
  },
  {
    id: 5,
    titulo: 'Calculadora de gasto energetico',
    descricao: 'Esta calculadora foi desenvolvida com React para estimar a taxa de metabolismo basal (TMB), tanto em repouso quanto com diferentes níveis de atividade física: sedentária, moderada e intensa. Utilizando HTML, CSS e JavaScript, a aplicação oferece uma interface intuitiva e responsiva, permitindo cálculos precisos para auxiliar no planejamento nutricional e controle de gastos calóricos diários.',
    tecnologias: ['HTML', 'CSS', 'Javascript', 'React'],
    imagem: projeto5,
    site: 'https://calculadora-tmb-eight.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/calculadora-tmb'
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