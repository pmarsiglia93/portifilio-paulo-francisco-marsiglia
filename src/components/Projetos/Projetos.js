// src/components/Projetos/Projetos.js
import React, { useEffect, useState } from 'react';
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
    id: 17,
    titulo: 'VideoGenerator, Automação de Vídeos para Redes Sociais',
    categoria: 'Automação de Mídia',
    descricao:
      'Gerador web de vídeos longos e verticais criado para automatizar a produção de conteúdo. A aplicação combina faixas MP3 com imagens ou vídeos de fundo e exporta arquivos prontos para YouTube, Shorts, Reels e TikTok.',
    tecnologias: [
      'Python 3.10+', 'FastAPI', 'FFmpeg', 'FFprobe', 'JavaScript',
      'HTML5', 'CSS3', 'Server-Sent Events',
    ],
    destaques: [
      'Geração em Full HD e no formato vertical 9:16, com modos individual e em lote.',
      'Progresso do processamento em tempo real via SSE, incluindo percentual, velocidade e estimativa de conclusão.',
      'Suporte a imagens e vídeos em loop, zoom suave, fundo desfocado, cancelamento e download pela interface.',
    ],
    repositorio: 'https://github.com/pmarsiglia93/VideoGenerator',
    rodaLocal: true,
    avisoLocal: 'A aplicação foi projetada para execução local e requer FFmpeg e Python 3.10 ou superior.',
    instrucoesLocal: ['pip install -r requirements.txt', 'python main.py'],
  },
  {
    id: 18,
    titulo: 'AgendaSaúde, Plataforma de Agendamentos de Consultas',
    categoria: 'Plataforma Full Stack',
    descricao:
      'Plataforma para pacientes encontrarem profissionais, consultarem horários e agendarem consultas sem risco de dupla reserva. Profissionais administram a disponibilidade e acompanham todo o ciclo de atendimento.',
    tecnologias: [
      'Nuxt 4', 'Vue 3', 'Pinia', 'NestJS 11', 'TypeScript', 'MySQL 8',
      'Redis 7', 'BullMQ', 'Socket.IO', 'Docker', 'Jest',
    ],
    destaques: [
      'Reservas idempotentes e proteção contra double booking com transações e restrições únicas no MySQL.',
      'Autenticação JWT e Google, refresh token em cookie HttpOnly, rotação de sessão e rate limit compartilhado no Redis.',
      'Notificações assíncronas com BullMQ e atualizações em tempo real com Socket.IO e Redis Adapter.',
    ],
    repositorio: 'https://github.com/pmarsiglia93/plataforma-agendamentos-consultas',
    rodaLocal: true,
    avisoLocal: 'O ambiente completo roda localmente com Docker Compose e inclui frontend, API, worker, MySQL e Redis.',
    instrucoesLocal: ['cp .env.example .env', 'docker compose up -d --build', 'docker compose exec backend npm run migration:run'],
  },
  {
    id: 11,
    titulo: 'Zeeway, Painel de Demandas de Produto',
    categoria: 'Aplicação Full Stack',
    descricao:
      'Aplicação web para registrar, priorizar e acompanhar demandas de produto. A prioridade é calculada no backend pela fórmula (impacto x 2) + urgência, evitando divergência entre frontend e backend.',
    tecnologias: [
      'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Python 3.13',
      'FastAPI', 'Pydantic', 'SQLAlchemy 2', 'SQLite',
    ],
    destaques: [
      'Paginação e ordenação no servidor e busca textual.',
      'Atualização otimista de status com reversão automática em caso de erro e histórico de status.',
      'Ambiente com Docker Compose, documentação automática via Swagger/OpenAPI e testes de frontend e backend.',
    ],
    repositorio: 'https://github.com/pmarsiglia93/case-zeeway',
  },
  {
    id: 12,
    titulo: 'Foody Delivery, Mini Rastreador de Pedidos',
    categoria: 'Desafio Full Stack',
    descricao:
      'Desafio técnico para uma vaga de Desenvolvedor Full Stack Pleno. API REST com autenticação JWT e uma máquina de estados que valida cada mudança de status do pedido (RECEBIDO, EM_PREPARO, SAIU_PARA_ENTREGA, ENTREGUE, CANCELADO), com histórico completo de cada transição.',
    tecnologias: [
      'Java 21', 'Spring Boot 3.3.5', 'Spring Data JPA', 'Spring Security',
      'JWT', 'SQLite', 'React 18', 'TypeScript', 'Vite', 'MUI v5', 'React Router v6',
    ],
    destaques: [
      '43 testes automatizados com JUnit 5, Mockito e MockMvc.',
      'Documentação Swagger UI e usuário de demonstração pronto para teste.',
      'Regra de transição de status como fonte única de verdade consumida por backend, testes e frontend.',
    ],
    repositorio: 'https://github.com/pmarsiglia93/case-foodydelivery',
  },
  {
    id: 13,
    titulo: 'Growth AI Challenge, Widget de Enriquecimento de Produto com IA',
    categoria: 'IA e Automação',
    descricao:
      'Aplicação Next.js que recebe os dados de um produto e usa a API da Anthropic para gerar bullets de benefícios e perguntas frequentes, com o conteúdo chegando em streaming, palavra por palavra, na tela.',
    tecnologias: [
      'Next.js 16', 'React 18', 'TypeScript estrito', 'Tailwind CSS',
      'Anthropic SDK', 'n8n',
    ],
    destaques: [
      '74 testes automatizados e streaming real via NDJSON.',
      'Cache em memória com invalidação ao regenerar conteúdo e suporte a PT e EN no mesmo widget.',
      'Proposta documentada de integração do widget como app VTEX IO em produção e dois fluxos de automação em n8n, webhook e agendado.',
    ],
    repositorio: 'https://github.com/pmarsiglia93/growth-ai-challenge',
  },
  {
    id: 14,
    titulo: 'JobMatch AI, Recomendação Inteligente de Vagas no Telegram',
    categoria: 'IA e Automação',
    descricao:
      'Evolução de um bot de vagas que coleta oportunidades de tecnologia, lê os requisitos de cada uma, compara com um perfil profissional estruturado usando RAG e LLM e envia as melhores oportunidades no Telegram, ordenadas por aderência.',
    tecnologias: [
      'Python 3.11+', 'RAG', 'LLMs', 'SQLite', 'ChromaDB',
      'Telegram', 'GitHub Actions', 'pytest',
    ],
    destaques: [
      'Coleta vagas da Gupy, LinkedIn e ProgramaThor, com normalização e deduplicação por URL e fingerprint.',
      'Pipeline resiliente com score heurístico quando RAG, LLM ou banco vetorial não estão disponíveis.',
      '169 testes automatizados, histórico em SQLite e automação com GitHub Actions.',
    ],
    repositorio: 'https://github.com/pmarsiglia93/telegram-vagas-gupy-bot',
  },
  {
    id: 15,
    titulo: 'Bank API, Simulação de Banco Digital',
    categoria: 'API GraphQL',
    descricao:
      'API de simulação de banco digital desenvolvida como desafio técnico. Permite criar contas, consultar saldo, realizar depósitos e saques, com persistência dos dados em MongoDB.',
    tecnologias: [
      'Node.js', 'GraphQL', 'Apollo Server Express', 'MongoDB',
      'Mongoose', 'Docker Compose', 'Jest',
    ],
    destaques: [
      'Operações de conta corrente expostas por uma API GraphQL.',
      'Execução local com Node.js ou ambiente completo com Docker Compose.',
      'Testes unitários com Jest para os fluxos principais e cobertura documentada acima de 85%.',
    ],
    repositorio: 'https://github.com/pmarsiglia93/api-bank',
  },
  {
    id: 16,
    titulo: 'Prothera Iniflex, Gestão de Funcionários',
    categoria: 'Desafio Java',
    descricao:
      'Aplicação Java para gerenciamento de funcionários, desenvolvida como solução de um teste técnico. O programa cadastra, remove, atualiza, agrupa e ordena funcionários, além de realizar cálculos sobre salários e idade.',
    tecnologias: [
      'Java 17', 'Maven', 'JUnit 5', 'Collections', 'Streams',
      'LocalDate', 'Period', 'BigDecimal',
    ],
    destaques: [
      'Datas e valores monetários formatados no padrão brasileiro e cálculos financeiros com BigDecimal.',
      'Agrupamento por função, filtros de aniversário, cálculo de idade e ordenação alfabética.',
      'Testes automatizados com JUnit 5 e execução gerenciada pelo Maven.',
    ],
    repositorio: 'https://github.com/pmarsiglia93/prothera-iniflex',
  },
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
    repositorio: 'https://github.com/pmarsiglia93/vue-dashboard',
    rodaLocal: true,
    avisoLocal: 'Este projeto não possui deploy público, pois depende de uma API local com JSON Server.',
    instrucoesLocal: ['npm install', 'npm run serve-api', 'npm run dev'],
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
    titulo: 'Desafio Full Stack, Brasileirão',
    descricao:
      'Solução full stack para gerenciamento e visualização do Campeonato Brasileiro, com painel administrativo para criação de times, jogos e lançamento de placares. Back-end em PHP 8.4 com Laravel, autenticação via Laravel Sanctum e documentação com Swagger. Front-end em Next.js, React e TypeScript com Tailwind CSS. Toda a stack orquestrada via Docker Compose.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL', 'Docker', 'Swagger'],
    imagem: projeto10,
    repositorio: 'https://github.com/pmarsiglia93/desafio-fullstack-brasileirao',
    rodaLocal: true,
    avisoLocal: 'Este projeto não possui deploy público completo e pode ser executado localmente com Docker Compose.',
    instrucoesLocal: ['docker-compose up --build'],
  },
];

const Projetos = () => {
  const [modalProjeto, setModalProjeto] = useState(null);

  useEffect(() => {
    if (!modalProjeto) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setModalProjeto(null);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [modalProjeto]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalProjeto(null);
  };

  const hasSite = Boolean(modalProjeto?.site);
  const hasRepo = Boolean(modalProjeto?.repositorio);

  return (
    <section className="projetos" id="projetos" aria-labelledby="projetos-titulo">
      <div className="projetos-container">
        <div className="projetos-cabecalho" data-reveal>
          <h2 className="subtitulo" id="projetos-titulo">Projetos</h2>
          <p>Uma seleção de aplicações, desafios técnicos e produtos que desenvolvi.</p>
        </div>

        <div className="projetos-grid">
          {projetos.map((projeto, index) => (
            <button
              key={projeto.id}
              className="projeto-item"
              type="button"
              onClick={() => setModalProjeto(projeto)}
              aria-label={`Ver detalhes de ${projeto.titulo}`}
              data-reveal
              style={{ '--reveal-delay': `${(index % 3) * 70}ms` }}
            >
              <div className={`projeto-media ${!projeto.imagem ? 'projeto-media--texto' : ''}`}>
                {projeto.imagem ? (
                  <img src={projeto.imagem} alt="" className="projeto-thumb" />
                ) : (
                  <span>{projeto.categoria}</span>
                )}
              </div>
              <div className="projeto-conteudo">
                <span className="projeto-categoria">{projeto.categoria || projeto.tecnologias[0]}</span>
                <h3>{projeto.titulo}</h3>
                <ul className="projeto-tecnologias" aria-label="Principais tecnologias">
                  {projeto.tecnologias.slice(0, 3).map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                  ))}
                </ul>
                <span className="projeto-acao" aria-hidden="true">Ver detalhes <span>↗</span></span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {modalProjeto && (
        <div className="modal" onMouseDown={handleOutsideClick}>
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-projeto-titulo"
          >
            <button className="close" type="button" onClick={() => setModalProjeto(null)} aria-label="Fechar detalhes">
              &times;
            </button>

            {modalProjeto.imagem && (
              <img src={modalProjeto.imagem} alt={`Prévia do projeto ${modalProjeto.titulo}`} className="modal-img" />
            )}

            <span className="modal-categoria">{modalProjeto.categoria || modalProjeto.tecnologias[0]}</span>
            <h3 id="modal-projeto-titulo">{modalProjeto.titulo}</h3>
            <p className="modal-descricao">{modalProjeto.descricao}</p>

            {Array.isArray(modalProjeto.destaques) && modalProjeto.destaques.length > 0 && (
              <div className="modal-destaques">
                <h4>Destaques</h4>
                <ul>
                  {modalProjeto.destaques.map((destaque) => (
                    <li key={destaque}>{destaque}</li>
                  ))}
                </ul>
              </div>
            )}

            {modalProjeto.rodaLocal && (
              <div className="modal-aviso-local">
                <p>{modalProjeto.avisoLocal} Para executar:</p>
                {Array.isArray(modalProjeto.instrucoesLocal) && modalProjeto.instrucoesLocal.length > 0 && (
                  <ul className="modal-aviso-local-lista">
                    {modalProjeto.instrucoesLocal.map((linha) => (
                      <li key={linha}><code>{linha}</code></li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className="modal-tecnologias" aria-label="Tecnologias do projeto">
              {modalProjeto.tecnologias.map((tecnologia) => (
                <span key={tecnologia} className="tech-tag">{tecnologia}</span>
              ))}
            </div>

            <div className="modal-buttons">
              {hasSite && (
                <a href={modalProjeto.site} target="_blank" rel="noopener noreferrer" className="btn btn--destaque">
                  Ver site
                </a>
              )}
              {hasRepo && (
                <a href={modalProjeto.repositorio} target="_blank" rel="noopener noreferrer" className="btn">
                  Ver repositório
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
