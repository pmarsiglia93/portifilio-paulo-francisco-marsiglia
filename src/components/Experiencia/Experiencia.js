// src/components/Experiencia/Experiencia.js
import React from 'react';
import './Experiencia.css';

const Experiencia = () => {
  return (
    <section className="container experiencia" id="experiencia" aria-label="Experiência">
      <h2 className="subtitulo">Experiência</h2>
      <div>
        <p className="experiencia-texto">Desenvolvo interfaces dinâmicas e responsivas utilizando <strong>React</strong>, <strong>JavaScript</strong> e <strong>TypeScript</strong>. Para plataformas de e-commerce, trabalhei com <strong>VTEX IO</strong> e <strong>VTEX Legacy</strong>, criando componentes escaláveis e otimizados para performance.</p>

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
