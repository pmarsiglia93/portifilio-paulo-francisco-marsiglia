// src/components/Formacao/Formacao.js
import React from 'react';
import './Formacao.css';

const certificados = [
  {
    titulo: 'Arquiteturas RAG com LLMs: embeddings, busca semântica e criação de agentes com LangChain',
    instituicao: 'Alura',
    emitida: 'ago de 2026',
    credencial: '7af40af6-f941-4648-ae17-bc85748ee96f',
  },
  {
    titulo: 'Automação de Fluxos: integrando n8n e IA',
    instituicao: 'Alura',
    emitida: 'ago de 2026',
    credencial: '5c35c3fe-b1e6-4d93-bcd0-2d7efb75b240',
  },
  {
    titulo: 'Make: automatizando respostas de clientes',
    instituicao: 'Alura',
    emitida: 'ago de 2026',
    credencial: '2b382551-f3d0-4556-8b94-ffae77b32735',
  },
  {
    titulo: 'Python: Inteligência Artificial Aplicada',
    instituicao: 'Alura',
    emitida: 'ago de 2026',
    credencial: '49f4fdc8-a166-42a4-b59f-2f981727eab0',
  },
  {
    titulo: 'Cibersegurança: conhecendo os usos de IA para segurança',
    instituicao: 'Alura',
    emitida: 'ago de 2026',
    credencial: '94aee75a-1049-402f-a932-013e63fa6fba',
  },
  {
    titulo: 'Spec-Driven Development: desenvolvimento assistido por agentes',
    instituicao: 'Alura',
    emitida: 'jul de 2026',
    credencial: '4647d2ee-22ae-451d-ae60-a751930aefa0',
  },
  {
    titulo: 'Pensamento computacional: fundamentos da computação e lógica de programação',
    instituicao: 'Alura',
    emitida: 'fev de 2026',
    credencial: '8e2aeaff-e98d-48cc-85cb-866a3b1702a8',
  },
  {
    titulo: 'Carreira .NET: Boas-vindas e primeiros passos',
    instituicao: 'Alura',
    emitida: 'jan de 2026',
    credencial: '3c56f34a-b117-4fa5-8d14-cf376b11f79c',
  },
  {
    titulo: 'Flash Skills: Web Apps dinâmicos com Lovable',
    instituicao: 'Alura',
    emitida: 'dez de 2025',
    credencial: '1468288d-dc34-4ce7-b86d-5a57173780eb',
  },
  {
    titulo: 'React e Node.js: consumindo APIs no React no projeto full stack',
    instituicao: 'Alura',
    emitida: 'abr de 2025',
    credencial: 'bbc08273-9732-4be1-9216-cdf2d453bd6a',
  },
  {
    titulo: 'Node.js: continue seu projeto full stack criando uma API com Express',
    instituicao: 'Alura',
    emitida: 'abr de 2025',
    credencial: 'd34fd1c8-dd39-47cb-8c1d-11e500623e79',
  },
  {
    titulo: 'React: comece seu projeto full stack',
    instituicao: 'Alura',
    emitida: 'abr de 2025',
    credencial: '721b628c-22d0-4cb1-b776-905857c8dc1f',
  },
  {
    titulo: 'Node.js: criando uma API Rest com Express e MongoDB',
    instituicao: 'Alura',
    emitida: 'jan de 2025',
    credencial: '831de034-bdef-4f43-aee0-df04dbb63ce1',
  },
  {
    titulo: 'HTML e CSS para Iniciantes',
    instituicao: 'Origamid',
    emitida: 'jun de 2024',
    credencial: 'e3decb54',
  },
  {
    titulo: 'Bootcamp Full Stack Java Jr',
    instituicao: 'Generation Brasil',
    emitida: 'mar de 2022',
    credencial: '1234672A448871D58349640',
  },
  {
    titulo: 'SASS: CSS sintaticamente espetacular',
    instituicao: 'Alura',
    emitida: 'mai de 2022',
    credencial: 'ae4669f5-7702-4dd7-8bec-a0b1d8139d9f',
  },
  {
    titulo: `JavaScript${':'} primeiros passos com a linguagem`,
    instituicao: 'Alura',
    emitida: 'abr de 2022',
    credencial: '3de902a1-6306-4a90-830c-ec609607f244',
  },
  {
    titulo: 'Scrum: Agilidade em seu projeto',
    instituicao: 'Alura',
    emitida: 'jan de 2022',
    credencial: '5288d0d1-bd79-43ee-9568-346618279284',
  },
  {
    titulo: 'Git e Github: Controle e compartilhe seu código',
    instituicao: 'Alura',
    emitida: 'dez de 2021',
    credencial: '443f9b83-a056-4f6d-9d70-f7dd1f84610c',
  },
  {
    titulo: 'Agilidade: promovendo a transformação ágil',
    instituicao: 'Alura',
    emitida: 'nov de 2021',
    credencial: 'c29dffe0-99b6-4e0f-a4e8-3cb675dea1e4',
  },
  {
    titulo: 'Java JRE e JDK: Escreva o seu primeiro código com Eclipse',
    instituicao: 'Alura',
    emitida: 'nov de 2021',
    credencial: '3b3a16ff-45f7-4743-a55e-49cbcd3dd9d4',
  },
  {
    titulo: 'Fundamentos de Agilidade: seus primeiros passos para a transformação ágil',
    instituicao: 'Alura',
    emitida: 'nov de 2021',
    credencial: 'c29dffe0-99b6-4e0f-a4e8-3cb675dea1e4',
  },
  { titulo: 'Git e Github [20 Horas]', instituicao: 'Curso em Vídeo', emitida: 'jun de 2021' },
  { titulo: 'Javascript [40 Horas]', instituicao: 'Curso em Vídeo', emitida: 'mai de 2021' },
  { titulo: 'HTML5 e CSS3 Módulo 1 [40 Horas]', instituicao: 'Curso em Vídeo', emitida: 'abr de 2021' },
  { titulo: 'MySQL [40 Horas]', instituicao: 'Curso em Vídeo', emitida: 'mar de 2021' },
  { titulo: 'Excel [40 Horas]', instituicao: 'Curso em Vídeo', emitida: 'mar de 2021' },
];

const Formacao = () => {
  return (
    <section className="formacao" id="formacao" aria-labelledby="formacao-titulo">
      <div className="formacao-container">
        <h2 className="subtitulo" id="formacao-titulo" data-reveal>Formação</h2>
        <div>
          <p className="formacao-texto" data-reveal style={{ '--reveal-delay': '90ms' }}>
            Minha formação acadêmica inclui o <strong>MBA USP/Esalq</strong> em{' '}
            <strong>Engenharia de Software</strong>, concluído em julho de 2026. Continuo me
            atualizando por meio de cursos, licenças e certificações.
          </p>

          <ul className="faculdade-lista" data-reveal>
            <li className="faculdade">
              <span className="faculdade-tipo">Bacharel</span>
              <h3 className="faculdade-curso">Lazer e Turismo</h3>
              <span className="faculdade-instituicao">USP</span>
              <span className="faculdade-periodo">2014 - 2018</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">Bootcamp</span>
              <h3 className="faculdade-curso">Full Stack Java Jr</h3>
              <span className="faculdade-instituicao">Generation Brasil</span>
              <span className="faculdade-periodo">2022</span>
            </li>
            <li className="faculdade">
              <span className="faculdade-tipo">MBA</span>
              <h3 className="faculdade-curso">Engenharia de Software</h3>
              <span className="faculdade-instituicao">USP/Esalq</span>
              <span className="faculdade-periodo">2024 - 2026</span>
            </li>
          </ul>

          <div className="formacao-extra">
            <div className="certificados">
              <h3>Licenças e certificados</h3>
              <ul className="certificados-lista">
                {certificados.map((certificado, index) => (
                  <li
                    key={`${certificado.titulo}-${certificado.emitida}`}
                    className="certificado"
                    data-reveal
                    style={{ '--reveal-delay': `${(index % 2) * 70}ms` }}
                  >
                    <span className="certificado-data">{certificado.emitida}</span>
                    <h4>{certificado.titulo}</h4>
                    <p>{certificado.instituicao}</p>
                    {certificado.credencial && (
                      <small title={`Código da credencial: ${certificado.credencial}`}>
                        Credencial {certificado.credencial}
                      </small>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="idiomas" data-reveal>
              <h3>Idiomas</h3>
              <ul>
                <li>Inglês <span>/ Intermediário</span></li>
                <li>Espanhol <span>/ Básico</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
