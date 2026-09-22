import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

describe('portfólio', () => {
  test('exibe os projetos e as experiências atualizadas', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Zeeway, Painel de Demandas de Produto' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Foody Delivery, Mini Rastreador de Pedidos' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Growth AI Challenge, Widget de Enriquecimento de Produto com IA' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'JobMatch AI, Recomendação Inteligente de Vagas no Telegram' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Bank API, Simulação de Banco Digital' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Prothera Iniflex, Gestão de Funcionários' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Autônomo' })).toBeInTheDocument();
    expect(screen.getByText('CervejaBox')).toBeInTheDocument();
    expect(screen.getByText('EAC Personnalité / Barkeley School')).toBeInTheDocument();
  });

  test('abre os detalhes de um projeto com destaques e link real', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Ver detalhes de Zeeway, Painel de Demandas de Produto' }));

    const dialog = screen.getByRole('dialog', { name: 'Zeeway, Painel de Demandas de Produto' });
    expect(within(dialog).getByText(/Paginação e ordenação no servidor/)).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: 'Ver repositório' })).toHaveAttribute(
      'href',
      'https://github.com/pmarsiglia93/case-zeeway',
    );
  });
});
