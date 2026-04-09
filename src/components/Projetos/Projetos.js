// src/components/Projetos/Projetos.js
import React, { useState } from 'react';
import './Projetos.css';
import projeto1 from '../../assets/projeto1.png';
import projeto2 from '../../assets/projeto2.png';
import projeto3 from '../../assets/projeto3.png';
import projeto4 from '../../assets/projeto4.png';
import projeto5 from '../../assets/projeto5.png';
import projeto6 from '../../assets/projeto6.png';
import projeto7 from '../../assets/projeto7.png';
import projeto8 from '../../assets/projeto8.png';
import projeto9 from '../../assets/projeto9.png';
import projeto10 from '../../assets/projeto10.png';

const projetos = [
  {
    id: 1,
    titulo: 'Bikcraft',
    descricao:
      'Bikcraft é um e-commerce fictício para venda de bicicletas elétricas, desenvolvido com HTML, CSS e JavaScript. O projeto foca em boas práticas de código, HTML semântico, CSS modular e animações para uma experiência dinâmica e responsiva.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagem: projeto1,
    site: 'https://bikcraft-psi-beige.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/bikcraft',
  },
  {
    id: 2,
    titulo: 'Pesquisa Ativa',
    descricao:
      'Pesquisa Ativa é uma plataforma de pesquisa de mercado desenvolvida com React, focada em acessibilidade, responsividade e alta performance. O site conta com animações suaves, cortes diagonais estilizados e um layout intuitivo para destacar os benefícios do serviço.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
    imagem: projeto2,
    site: 'https://pesquisa-ativa-negocios-sigma.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/pesquisa-ativa-negocios',
  },
  {
    id: 3,
    titulo: 'Filmes API',
    descricao:
      'Filmes API é uma aplicação desenvolvida com React que consome a OMDb API para exibir informações de filmes. O projeto apresenta uma interface responsiva e moderna, organizando os filmes em categorias temáticas, como Batman, Vingadores e Homem-Aranha.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    imagem: projeto3,
    site: 'https://case-stalse.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/case-stalse',
  },
  {
    id: 4,
    titulo: 'Wishlist / Cart',
    descricao:
      'Wishlist / Cart é uma aplicação desenvolvida com React que permite adicionar produtos a uma lista de favoritos e a um carrinho de compras. O projeto apresenta uma interface dinâmica e responsiva, onde os usuários podem visualizar e gerenciar seus produtos salvos.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
    imagem: projeto4,
    site: 'https://case-b8one.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/case-b8one',
  },
  {
    id: 5,
    titulo: 'Calculadora de gasto energético',
    descricao:
      'Esta calculadora foi desenvolvida com React para estimar a taxa de metabolismo basal (TMB), tanto em repouso quanto com diferentes níveis de atividade física: sedentária, moderada e intensa.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
    imagem: projeto5,
    site: 'https://calculadora-tmb-eight.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/calculadora-tmb',
  },
  {
    id: 6,
    titulo: 'Pokedex',
    descricao:
      'Desenvolvi uma Pokédex em JavaScript Vanilla, com layout em HTML/CSS e integração com a PokéAPI. O projeto permite navegar pelos Pokémon, pesquisar rapidamente e trocar páginas, com um visual limpo e adaptado para desktop e mobile.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagem: projeto6,
    site: 'https://pokedex-lumis-gules.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/pokedex-lumis',
  },
  {
    id: 7,
    titulo: 'Clariti-UI',
    descricao:
      'Aplicação em Vue.js para registro, edição, visualização e exclusão de produtos, com navegação via Vue Router e persistência simulada com JSON Server.',
    tecnologias: ['Vue.js', 'Vue Router', 'JSON Server', 'CSS'],
    imagem: projeto7,
    // Sem site publicado (depende do serve-api local)
    // site: undefined,
    repositorio: 'https://github.com/pmarsiglia93/vue-dashboard', 
    rodaLocal: true,
    instrucoesLocal: [
      'npm install',
      'npm run serve-api',
      'npm run dev',
    ],
  },
  {
    id: 8,
    titulo: 'Starsoft Frontend Challenge',
    descricao:
      'E-commerce de itens de RPG desenvolvido com Next.js e TypeScript como desafio técnico da Starsoft. O projeto conta com listagem de produtos consumida via API, carrinho de compras com persistência no Redux, interface responsiva estilizada com SCSS e testes unitários com Jest.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Redux', 'Jest'],
    imagem: projeto8,
    site: 'https://starsoft-frontend-challenge-lovat.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/starsoft-frontend-challenge',
  },
  {
    id: 9,
    titulo: 'LazerSP',
    descricao:
      'Aplicativo mobile de guia de lazer para São Paulo, com mais de 44 lugares cadastrados, geolocalização, favoritos, avaliações e suporte a 3 idiomas. Desenvolvido com React Native e Expo no front-end e Node.js + Express + SQLite no back-end, com containerização via Docker e 24 testes automatizados.',
    tecnologias: ['React Native', 'Expo', 'Node.js', 'Express', 'SQLite', 'Docker'],
    imagem: projeto9,
    site: 'https://lazersp-landing.vercel.app/',
    repositorio: 'https://github.com/pmarsiglia93/LazerSP',
  },
  {
    id: 10,
    titulo: 'Desafio Full Stack — Brasileirão',
    descricao:
      'Solução full stack para gerenciamento e visualização do Campeonato Brasileiro, com painel administrativo para criação de times, jogos e lançamento de placares. Back-end em PHP 8.4 com Laravel, autenticação via Laravel Sanctum e documentação com Swagger. Front-end em Next.js, React e TypeScript com Tailwind CSS. Toda a stack orquestrada via Docker Compose.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL', 'Docker', 'Swagger'],
    imagem: projeto10,
    repositorio: 'https://github.com/pmarsiglia93/desafio-fullstack-brasileirao',
    rodaLocal: true,
    instrucoesLocal: [
      'docker-compose up --build',
    ],
  },
];

const Projetos = () => {
  const [modalProjeto, setModalProjeto] = useState(null);

  // Fecha o modal ao clicar fora (overlay)
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) {
      setModalProjeto(null);
    }
  };

  const hasSite = Boolean(modalProjeto?.site);
  const hasRepo = Boolean(modalProjeto?.repositorio);

  return (
    <section className="projetos" id="projetos" aria-label="Projetos">
      <div className="projetos-container">
        <h2 className="subtitulo">Projetos</h2>

        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="projeto-item"
              onClick={() => setModalProjeto(projeto)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setModalProjeto(projeto);
              }}
            >
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="projeto-thumb"
              />
              <h3>{projeto.titulo}</h3>
            </div>
          ))}
        </div>
      </div>

      {modalProjeto && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={() => setModalProjeto(null)}>
              &times;
            </span>

            <img
              src={modalProjeto.imagem}
              alt={modalProjeto.titulo}
              className="modal-img"
            />

            <h3>{modalProjeto.titulo}</h3>

            <p className="modal-descricao">{modalProjeto.descricao}</p>

            {/* Aviso quando o projeto é apenas local */}
            {modalProjeto.rodaLocal && (
              <div className="modal-aviso-local">
                <p>
                  Este projeto não possui deploy público, pois depende de uma API
                  local (JSON Server). Para executar:
                </p>
                {Array.isArray(modalProjeto.instrucoesLocal) &&
                  modalProjeto.instrucoesLocal.length > 0 && (
                    <ul className="modal-aviso-local-lista">
                      {modalProjeto.instrucoesLocal.map((linha, idx) => (
                        <li key={idx}>
                          <code>{linha}</code>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            )}

            <div className="modal-tecnologias">
              {modalProjeto.tecnologias.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="modal-buttons">
              {/* Só renderiza "Ver Site" se existir site */}
              {hasSite && (
                <a
                  href={modalProjeto.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Ver Site
                </a>
              )}

              {/* Renderiza repo se existir */}
              {hasRepo && (
                <a
                  href={modalProjeto.repositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Ver Repositório
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projetos;
