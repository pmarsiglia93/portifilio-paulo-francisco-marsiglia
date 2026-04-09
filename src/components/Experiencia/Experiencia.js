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
          <span className="empresa-titulo">Desenvolvedor Front-end (Freelancer)</span>
          <p className="empresa-texto">
            Manutenção e evolução de plataforma web em Vue.js 2, com foco em refatoração de código,
            remoção de estilos inline, criação de componentes reutilizáveis e melhorias de UX.
            Atuação em telas de avaliações, pagamentos, modais, formulários e contratos em PDF,
            garantindo responsividade e estabilidade em produção. Correção de bugs e alinhamento
            com o time interno para padronização de código e qualidade das entregas.
          </p>
          <ul className="empresa-habilidades">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vue.js 2</li>
            <li>PHP</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">06/2025 - 12/2025</span>
          <h3 className="empresa-titulo">Quality Digital</h3>
          <span className="empresa-titulo">Desenvolvedor Front-end</span>
          <p className="empresa-texto">
            Desenvolvimento de sections, componentes modulares e landing pages para Electrolux,
            Frigidaire e marcas Latam, utilizando Deco (Preact + Tailwind) e VTEX IO (React).
            Implementação de layouts pixel-perfect a partir do Figma, garantindo responsividade,
            consistência visual e manutenção via CMS. Integração com APIs REST, criação de componentes
            configuráveis e suporte a múltiplos idiomas e domínios. Atuação em fluxo de desenvolvimento
            com branches dedicadas (feature/fix/release), atualização de CHANGELOG, abertura de PRs
            revisados e alinhamento constante com PO e QA.
          </p>
          <ul className="empresa-habilidades">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Preact</li>
            <li>Tailwind CSS</li>
            <li>VTEX IO</li>
            <li>Deco</li>
            <li>APIs REST</li>
            <li>Figma</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">09/2024 - 11/2024</span>
          <h3 className="empresa-titulo">Stalse Analytics</h3>
          <span className="empresa-titulo">Desenvolvedor Front-end</span>
          <p className="empresa-texto">Desenvolvi soluções com Inteligência Artificial, como um chat interativo baseado no ChatGPT, utilizando Django, APIs, bancos de dados relacionais e tecnologias front-end como HTML, CSS e JavaScript para otimizar a experiência do usuário.</p>
          <ul className="empresa-habilidades">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>APIs</li>
            <li>MySQL</li>            
          </ul>
        </div>

        <div className="empresa">
          <span className="empresa-ano">05/2022 - 07-2024</span>
          <h3 className="empresa-titulo">Corebiz</h3>
          <span className="empresa-titulo">Desenvolvedor Front-end</span>
          <p className="empresa-texto">Desenvolvi soluções para e-commerce utilizando VTEX IO e VTEX Legacy, criando componentes reutilizáveis e escaláveis com React, JavaScript e TypeScript. Também implementei integrações com REST APIs e GraphQL, além de desenvolver landing pages focadas em usabilidade e conversão.</p>
          <ul className="empresa-habilidades">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>APIs</li>
            <li>GraphQL</li>
            <li>VTEX IO</li>
            <li>VTEX Legacy</li>            
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
