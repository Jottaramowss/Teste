import { Plus } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface Card {
  id: string;
  titulo: string;
  descricao: string;
  assignee: string;
  prioridade: 'alta' | 'media' | 'baixa';
}

interface Coluna {
  id: string;
  titulo: string;
  cor: string;
  cards: Card[];
}

export default function Kanban() {
  const colunas: Coluna[] = [
    {
      id: 'novo',
      titulo: 'Novo',
      cor: 'bg-gray-100',
      cards: [
        { id: '1', titulo: 'Implementar login', descricao: 'Adicionar autenticação', assignee: 'João', prioridade: 'alta' },
        { id: '2', titulo: 'Criar dashboard', descricao: 'Página inicial do painel', assignee: 'Maria', prioridade: 'media' },
      ]
    },
    {
      id: 'progresso',
      titulo: 'Em Progresso',
      cor: 'bg-blue-100',
      cards: [
        { id: '3', titulo: 'Integrar API', descricao: 'Conectar com backend', assignee: 'Pedro', prioridade: 'alta' },
        { id: '4', titulo: 'Testes unitários', descricao: 'Escrever testes', assignee: 'Ana', prioridade: 'media' },
      ]
    },
    {
      id: 'revisao',
      titulo: 'Em Revisão',
      cor: 'bg-yellow-100',
      cards: [
        { id: '5', titulo: 'Code review', descricao: 'Revisar pull request', assignee: 'Carlos', prioridade: 'media' },
      ]
    },
    {
      id: 'concluido',
      titulo: 'Concluído',
      cor: 'bg-green-100',
      cards: [
        { id: '6', titulo: 'Setup inicial', descricao: 'Configuração do projeto', assignee: 'Lucas', prioridade: 'baixa' },
        { id: '7', titulo: 'Documentação', descricao: 'Documentar funcionalidades', assignee: 'Sofia', prioridade: 'baixa' },
      ]
    },
  ];

  const prioridadeConfig = {
    alta: 'bg-red-100 text-red-700',
    media: 'bg-yellow-100 text-yellow-700',
    baixa: 'bg-green-100 text-green-700',
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Kanban</h1>
                <p className="text-gray-600 mt-1">Gerencie suas tarefas visualmente</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus size={20} />
                Novo Card
              </button>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {colunas.map((coluna) => (
                <div key={coluna.id} className={`${coluna.cor} rounded-lg p-4 min-h-96`}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-gray-900">{coluna.titulo}</h2>
                    <span className="bg-gray-300 text-gray-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {coluna.cards.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {coluna.cards.map((card) => (
                      <div key={card.id} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-move">
                        <h3 className="font-medium text-gray-900 text-sm mb-2">{card.titulo}</h3>
                        <p className="text-gray-600 text-xs mb-3">{card.descricao}</p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${prioridadeConfig[card.prioridade]}`}>
                            {card.prioridade === 'alta' ? 'Alta' : card.prioridade === 'media' ? 'Média' : 'Baixa'}
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {card.assignee}
                          </span>
                        </div>
                      </div>
                    ))}
                    <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition-colors text-sm font-medium">
                      + Adicionar card
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
