import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  prioridade: 'alta' | 'media' | 'baixa';
  vencimento: string;
  concluida: boolean;
  assignee: string;
}

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    {
      id: '1',
      titulo: 'Responder email do cliente',
      descricao: 'Enviar proposta de serviço',
      prioridade: 'alta',
      vencimento: '2025-01-15',
      concluida: false,
      assignee: 'João'
    },
    {
      id: '2',
      titulo: 'Atualizar documentação',
      descricao: 'Adicionar novos endpoints',
      prioridade: 'media',
      vencimento: '2025-01-20',
      concluida: false,
      assignee: 'Maria'
    },
    {
      id: '3',
      titulo: 'Revisar código',
      descricao: 'Pull request #123',
      prioridade: 'alta',
      vencimento: '2025-01-10',
      concluida: true,
      assignee: 'Pedro'
    },
    {
      id: '4',
      titulo: 'Preparar apresentação',
      descricao: 'Slides para reunião de stakeholders',
      prioridade: 'media',
      vencimento: '2025-01-18',
      concluida: false,
      assignee: 'Ana'
    },
  ]);

  const toggleTarefa = (id: string) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  const deletarTarefa = (id: string) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  const prioridadeConfig = {
    alta: 'bg-red-100 text-red-700',
    media: 'bg-yellow-100 text-yellow-700',
    baixa: 'bg-green-100 text-green-700',
  };

  const tarefasAtivas = tarefas.filter(t => !t.concluida);
  const tarefasConcluidas = tarefas.filter(t => t.concluida);

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
                <h1 className="text-3xl font-bold text-gray-900">Tarefas</h1>
                <p className="text-gray-600 mt-1">Gerencie suas tarefas diárias</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus size={20} />
                Nova Tarefa
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-600 text-sm">Total de Tarefas</p>
                <p className="text-3xl font-bold text-gray-900">{tarefas.length}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-600 text-sm">Ativas</p>
                <p className="text-3xl font-bold text-blue-600">{tarefasAtivas.length}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-600 text-sm">Concluídas</p>
                <p className="text-3xl font-bold text-green-600">{tarefasConcluidas.length}</p>
              </div>
            </div>

            {/* Tarefas Ativas */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Tarefas Ativas</h2>
              <div className="space-y-2">
                {tarefasAtivas.map((tarefa) => (
                  <div key={tarefa.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow flex items-start gap-4">
                    <button
                      onClick={() => toggleTarefa(tarefa.id)}
                      className="mt-1 text-gray-400 hover:text-emerald-500 transition-colors flex-shrink-0"
                    >
                      <Circle size={24} />
                    </button>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{tarefa.titulo}</h3>
                      <p className="text-gray-600 text-sm mt-1">{tarefa.descricao}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${prioridadeConfig[tarefa.prioridade]}`}>
                          {tarefa.prioridade === 'alta' ? 'Alta' : tarefa.prioridade === 'media' ? 'Média' : 'Baixa'}
                        </span>
                        <span className="text-xs text-gray-500">Vence em {new Date(tarefa.vencimento).toLocaleDateString('pt-BR')}</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{tarefa.assignee}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => deletarTarefa(tarefa.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors flex-shrink-0"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarefas Concluídas */}
            {tarefasConcluidas.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Concluídas</h2>
                <div className="space-y-2">
                  {tarefasConcluidas.map((tarefa) => (
                    <div key={tarefa.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-start gap-4 opacity-75">
                      <button
                        onClick={() => toggleTarefa(tarefa.id)}
                        className="mt-1 text-green-500 hover:text-gray-400 transition-colors flex-shrink-0"
                      >
                        <CheckCircle2 size={24} />
                      </button>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-500 line-through">{tarefa.titulo}</h3>
                        <p className="text-gray-500 text-sm mt-1 line-through">{tarefa.descricao}</p>
                      </div>
                      <button
                        onClick={() => deletarTarefa(tarefa.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors flex-shrink-0"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
