import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

describe('portfólio', () => {
  test('exibe os projetos e as experiências atualizadas', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'VideoGenerator, Automação de Vídeos para Redes Sociais' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'AgendaSaúde, Plataforma de Agendamentos de Consultas' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Zeeway, Painel de Demandas de Produto' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Foody Delivery, Mini Rastreador de Pedidos' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Growth AI Challenge, Widget de Enriquecimento de Produto com IA' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'JobMatch AI, Recomendação Inteligente de Vagas no Telegram' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Bank API, Simulação de Banco Digital' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Prothera Iniflex, Gestão de Funcionários' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'FitCalc, Calculadoras de Nutrição e Treino' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Autônomo' })).toBeInTheDocument();
    expect(screen.getByText('CervejaBox')).toBeInTheDocument();
    expect(screen.getByText('EAC Personnalité / Barkeley School')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Arquiteturas RAG com LLMs/ })).toBeInTheDocument();
    expect(screen.getByText('Credencial 7af40af6-f941-4648-ae17-bc85748ee96f')).toBeInTheDocument();
  });

  test('abre os detalhes de um projeto com destaques e link real', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Ver detalhes de AgendaSaúde, Plataforma de Agendamentos de Consultas' }));

    const dialog = screen.getByRole('dialog', { name: 'AgendaSaúde, Plataforma de Agendamentos de Consultas' });
    expect(within(dialog).getByText(/Reservas idempotentes e proteção contra double booking/)).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: 'Ver repositório' })).toHaveAttribute(
      'href',
      'https://github.com/pmarsiglia93/plataforma-agendamentos-consultas',
    );
  });

  test('apresenta os detalhes atualizados do FitCalc', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Ver detalhes de FitCalc, Calculadoras de Nutrição e Treino' }));

    const dialog = screen.getByRole('dialog', { name: 'FitCalc, Calculadoras de Nutrição e Treino' });
    expect(within(dialog).getByText(/Mifflin-St Jeor, Harris-Benedict, Karvonen e Riegel/)).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: 'Ver site' })).toHaveAttribute(
      'href',
      'https://calculadora-tmb-eight.vercel.app/',
    );
  });
});
