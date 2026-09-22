// src/components/Habilidades/Habilidades.js
import React from 'react';
import './Habilidades.css';

const habilidades = [
  'React.js', 'TypeScript', 'JavaScript', 'Vue.js 2/3', 'Angular', 'Next.js',
  'Preact', 'React Native', 'Expo', 'HTML5', 'CSS3', 'Tailwind CSS',
  'SASS/SCSS', 'Styled-Components', 'Node.js', 'Express', 'NestJS', 'Java',
  'Spring Boot', 'Python', 'Django', 'PHP', 'Laravel', 'APIs REST', 'GraphQL',
  'JWT', 'OAuth', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis',
  'VTEX IO', 'VTEX Legacy', 'Deco.cx', 'Docker', 'CI/CD', 'GitHub Actions',
  'AWS', 'WebSockets', 'Webhooks', 'n8n', 'Firebase', 'Kubernetes', 'RabbitMQ',
  'Kafka', 'Jest', 'JUnit', 'Figma', 'Git', 'Gitflow', 'Scrum', 'Kanban',
  'OpenAI API', 'Anthropic API', 'RAG', 'LLMs', 'GitHub Copilot', 'Cursor',
];

const Habilidades = () => {
  return (
    <section className="habilidades" id="habilidades" aria-labelledby="habilidades-titulo">
      <div className="habilidades-container">
        <h2 className="subtitulo" id="habilidades-titulo">Habilidades</h2>

        <div className="habilidades-conteudo">
          <p className="habilidades-introducao">
            Tecnologias, plataformas e práticas que utilizo no desenvolvimento de aplicações,
            integrações, e-commerce e automações.
          </p>
          <ul className="habilidades-lista">
            {habilidades.map((habilidade) => (
              <li key={habilidade}>{habilidade}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
