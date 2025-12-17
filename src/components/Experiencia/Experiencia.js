// src/components/Experiencia/Experiencia.js
import React from 'react';
import './Experiencia.css';

const Experiencia = () => {
  return (
    <section className="container experiencia" id="experiencia" aria-label="Experiência">
      <h2 className="subtitulo">Experiência</h2>
      <div>
        <p className="experiencia-texto">
          Atuo como desenvolvedor front-end e full stack, criando interfaces dinâmicas e responsivas com  
          <strong> React</strong>, <strong>Vue.js 2</strong>,<strong>Angular</strong>, <strong>Preact (Deco)</strong>, <strong>JavaScript</strong> e 
          <strong> TypeScript</strong>, sempre com foco em performance, UX e layouts fiéis ao Figma. 
          No back-end, tenho experiência com <strong>Node.js</strong> (APIs REST) e 
          <strong> Java com Spring Boot</strong> para criação e manutenção de serviços, integrações e regras de negócio, 
          conectando front-end e back-end de forma consistente em aplicações web e plataformas de e-commerce.
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
