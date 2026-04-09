// src/components/Experiencia/Experiencia.js
import React from 'react';
import './Experiencia.css';

const Experiencia = () => {
  return (
    <section className="container experiencia" id="experiencia" aria-label="Experiência">
      <h2 className="subtitulo">Experiência</h2>
      <div>
        <p className="experiencia-texto">
          Desenvolvedor Full Stack com quase 4 anos de experiência, especializado em <strong>React</strong>, <strong>Vue.js</strong> e <strong>Angular</strong> com <strong>TypeScript</strong>, criação de interfaces responsivas e performáticas com fidelidade ao Figma, integração com <strong>APIs REST</strong> e <strong>GraphQL</strong> e desenvolvimento de componentes reutilizáveis seguindo Clean Code e SOLID.
        </p>
        <p className="experiencia-texto">
          No e-commerce, tenho experiência sólida com <strong>VTEX IO</strong> e <strong>Deco.cx</strong> (Preact + Tailwind), tendo atuado em mais de 30 lojas de grandes marcas como Electrolux, Aramis e Bibi Calçados. No back-end, trabalho com <strong>Node.js</strong> (Express e NestJS), <strong>PHP</strong> (Laravel) e <strong>Python</strong> (Django) para construção de APIs REST, autenticação JWT e integração com serviços externos.
        </p>
        <p className="experiencia-texto">
          Já integrei modelos de IA em produção — incluindo a <strong>API do ChatGPT</strong> — em uma plataforma SaaS que gerou <strong>R$ 4,8 milhões em receita nas primeiras 24 horas</strong>. Utilizo ferramentas de <strong>AI-Assisted Development</strong> como Claude, GitHub Copilot e Cursor no dia a dia para acelerar entregas sem abrir mão de qualidade e arquitetura.
        </p>
        <p className="experiencia-texto">
          MBA em <strong>Engenharia de Software</strong> pela <strong>USP/ESALQ</strong> em andamento.
        </p>

        <div className="empresa">
          <span className="empresa-ano">07/2025 - atual</span>
          <h3 className="empresa-titulo">EAC Personnalité / Barkeley School</h3>
          <span className="empresa-titulo">Desenvolvedor Full Stack</span>
          <p className="empresa-texto">
            Atuação full stack na evolução de plataforma educacional com Vue.js 2/3 e TypeScript no
            front-end, e PHP/Laravel no back-end. Refatoração de componentes legados, migração de estilos
            inline para Tailwind CSS e criação de componentes reutilizáveis com Vuex/Pinia. Desenvolvimento
            de telas críticas — avaliações, pagamentos, contratos em PDF e formulários — com foco em UX,
            responsividade e estabilidade em produção. Integração com APIs REST, adoção de Gitflow e
            alinhamento contínuo com o time via Scrum.
          </p>
          <ul className="empresa-habilidades">
            <li>Vue.js 2/3</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>PHP/Laravel</li>
            <li>APIs REST</li>
            <li>Vuex/Pinia</li>
            <li>Gitflow</li>
            <li>Scrum</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">06/2025 - 12/2025</span>
          <h3 className="empresa-titulo">Quality Digital</h3>
          <span className="empresa-titulo">Desenvolvedor Front-end</span>
          <p className="empresa-texto">
            Desenvolvimento de seções, componentes modulares e landing pages para marcas como Electrolux
            e Frigidaire (LATAM), utilizando Deco.cx (Preact + Tailwind CSS) e VTEX IO (React + TypeScript).
            Implementação de layouts pixel-perfect a partir do Figma com suporte a múltiplos idiomas e domínios,
            resultando em melhora significativa de performance e consistência visual. Integração com APIs REST e
            GraphQL, criação de componentes configuráveis via CMS e fluxo profissional com branches
            feature/fix/release, CHANGELOG, PRs com code review e alinhamento contínuo com PO e QA.
          </p>
          <ul className="empresa-habilidades">
            <li>React</li>
            <li>TypeScript</li>
            <li>Preact</li>
            <li>Tailwind CSS</li>
            <li>VTEX IO</li>
            <li>Deco.cx</li>
            <li>GraphQL</li>
            <li>APIs REST</li>
            <li>Figma</li>
            <li>Gitflow</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">09/2024 - 11/2024</span>
          <h3 className="empresa-titulo">Stalse Analytics</h3>
          <span className="empresa-titulo">Desenvolvedor Full Stack</span>
          <p className="empresa-texto">
            Desenvolvimento full stack completo, do zero, de uma plataforma SaaS de Business Intelligence
            com IA integrada. Front-end em React + TypeScript com dashboards interativos; back-end em
            Python/Django com Node.js para APIs REST, autenticação JWT e integração com a API do ChatGPT,
            resultando em um chat interativo de análise de dados. Banco de dados PostgreSQL com modelagem
            relacional e deploy em produção. A plataforma gerou <strong>R$ 4,8 milhões em receita nas
            primeiras 24 horas</strong> após o lançamento.
          </p>
          <ul className="empresa-habilidades">
            <li>React</li>
            <li>TypeScript</li>
            <li>Python/Django</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>APIs REST</li>
            <li>ChatGPT API</li>
            <li>JWT</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">05/2022 - 07/2024</span>
          <h3 className="empresa-titulo">Corebiz</h3>
          <span className="empresa-titulo">Desenvolvedor Front-end</span>
          <p className="empresa-texto">
            2 anos e 3 meses de atuação em desenvolvimento front-end para e-commerce com VTEX IO e
            VTEX Legacy, atendendo mais de 30 clientes de grandes marcas como Electrolux, Aramis,
            Bibi Calçados e NK Store. Criação de componentes reutilizáveis e escaláveis com React,
            TypeScript e Styled-Components, com melhora de 40% na escalabilidade e 35% na performance
            das lojas. Integrações com APIs REST e GraphQL, landing pages orientadas à conversão e
            trabalho em squads ágeis com code reviews, Gitflow e Scrum.
          </p>
          <ul className="empresa-habilidades">
            <li>React</li>
            <li>TypeScript</li>
            <li>VTEX IO</li>
            <li>VTEX Legacy</li>
            <li>GraphQL</li>
            <li>APIs REST</li>
            <li>Styled-Components</li>
            <li>Gitflow</li>
            <li>Scrum</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">06/2016 - 12/2016</span>
          <h3 className="empresa-titulo">Empresa Júnior de Lazer e Turismo</h3>
          <span className="empresa-titulo">Voluntário</span>
          <p className="empresa-texto">Organizei eventos acadêmicos na Empresa Júnior de Lazer e Turismo da USP, gerenciando palestras, coffee breaks e atualizando redes sociais como Facebook e Instagram. Atuei como staff em eventos e elaborei relatórios semanais com a equipe.</p>
          <ul className="empresa-habilidades">
            <li>Gestão de Eventos</li>
            <li>Mídias Sociais</li>
            <li>Atendimento</li>
            <li>Suporte</li>
            <li>Documentação</li>
            <li>Relatórios</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
