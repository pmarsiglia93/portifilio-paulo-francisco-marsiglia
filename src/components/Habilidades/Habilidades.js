// src/components/Habilidades/Habilidades.js
import React from 'react';
import './Habilidades.css';

const niveis = [
  {
    id: 'avancado',
    nivel: 'Avançado',
    descricao: 'Uso no dia a dia com projetos reais',
    skills: [
      'React.js', 'Vue.js 2/3', 'Angular', 'TypeScript', 'JavaScript (ES10+)',
      'HTML5', 'CSS3', 'Tailwind CSS', 'SASS/SCSS', 'Styled-Components',
      'VTEX IO', 'VTEX Legacy', 'APIs REST', 'GraphQL', 'Git', 'Gitflow',
      'Figma', 'Scrum', 'Kanban',
    ],
  },
  {
    id: 'intermediario',
    nivel: 'Intermediário',
    descricao: 'Projetos comprovados',
    skills: [
      'Node.js', 'Express', 'NestJS', 'Python (Django)', 'PHP (Laravel)',
      'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis',
      'JWT', 'OAuth', 'Docker', 'CI/CD', 'GitHub Actions',
      'Railway', 'Jest', 'React Native', 'Expo SDK 54', 'Next.js',
    ],
  },
  {
    id: 'basico',
    nivel: 'Básico / Noções',
    descricao: 'Conhecimento real, não é stack principal',
    skills: [
      'Java', 'Spring Boot', 'AWS (S3, Lambda, API Gateway)',
      'WebSockets', 'Webhooks', 'n8n', 'Firebase',
      'Kubernetes', 'RabbitMQ', 'Kafka', 'Storybook',
    ],
  },
  {
    id: 'ia',
    nivel: 'IA & Ferramentas modernas',
    descricao: 'Diferencial competitivo — IA integrada no fluxo de desenvolvimento',
    skills: [
      'GitHub Copilot', 'Claude (Anthropic)', 'Cursor',
      'ChatGPT API', 'OpenAI API', 'AI-Assisted Development',
    ],
  },
];

const Habilidades = () => {
  return (
    <section className="habilidades" id="habilidades" aria-label="Habilidades">
      <div className="habilidades-container">
        <h2 className="subtitulo">Habili&shy;dades</h2>

        <div className="habilidades-grupos">
          {niveis.map((grupo) => (
            <div key={grupo.id} className={`habilidades-grupo habilidades-grupo--${grupo.id}`}>
              <div className="habilidades-grupo-header">
                <span className={`habilidades-nivel-badge habilidades-nivel-badge--${grupo.id}`}>
                  {grupo.nivel}
                </span>
                <p className="habilidades-descricao">{grupo.descricao}</p>
              </div>
              <ul className="habilidades-tags">
                {grupo.skills.map((skill, index) => (
                  <li key={index} className={`habilidades-tag habilidades-tag--${grupo.id}`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
