import { Plus, Edit2, Trash2, Send, Eye } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface Campanha {
  id: string;
  titulo: string;
  descricao: string;
  status: 'ativa' | 'pausada' | 'finalizada';
  dataInicio: string;
  dataFim: string;
  contatos: number;
  enviados: number;
}

export default function Campanhas() {
  const campanhas: Campanha[] = [
    {
      id: '1',
      titulo: 'Promoção de Verão 2025',
      descricao: 'Campanha de desconto para clientes ativos',
      status: 'ativa',
      dataInicio: '2025-01-01',
      dataFim: '2025-02-28',
      contatos: 1250,
      enviados: 1150
    },
    {
      id: '2',
      titulo: 'Black Friday 2024',
      descricao: 'Maior desconto do ano',
      status: 'finalizada',
      dataInicio: '2024-11-01',
      dataFim: '2024-11-30',
      contatos: 2500,
      enviados: 2450
    },
    {
      id: '3',
      titulo: 'Reativação de Clientes',
      descricao: 'Campanha para trazer clientes inativos',
      status: 'pausada',
      dataInicio: '2025-01-15',
      dataFim: '2025-03-15',
      contatos: 850,
      enviados: 450
    },
    {
      id: '4',
      titulo: 'Lançamento de Novo Produto',
      descricao: 'Apresentação do novo produto X',
      status: 'ativa',
      dataInicio: '2025-01-10',
      dataFim: '2025-02-10',
      contatos: 3000,
      enviados: 2800
    },
  ];

  const statusConfig = {
    ativa: 'bg-green-100 text-green-700',
    pausada: 'bg-yellow-100 text-yellow-700',
    finalizada: 'bg-gray-100 text-gray-700',
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
                <h1 className="text-3xl font-bold text-gray-900">Campanhas</h1>
                <p className="text-gray-600 mt-1">Gerencie suas campanhas de marketing</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus size={20} />
                Nova Campanha
              </button>
            </div>

            {/* Campanhas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campanhas.map((campanha) => (
                <div key={campanha.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{campanha.titulo}</h3>
                      <p className="text-gray-600 text-sm mt-1">{campanha.descricao}</p>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${statusConfig[campanha.status]}`}>
                      {campanha.status === 'ativa' ? 'Ativa' : campanha.status === 'pausada' ? 'Pausada' : 'Finalizada'}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Progresso</span>
                      <span className="text-sm font-bold text-gray-900">
                        {Math.round((campanha.enviados / campanha.contatos) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all"
                        style={{ width: `${(campanha.enviados / campanha.contatos) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600">Contatos</p>
                      <p className="text-lg font-bold text-gray-900">{campanha.contatos}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Enviados</p>
                      <p className="text-lg font-bold text-gray-900">{campanha.enviados}</p>
                    </div>
                  </div>

                  {/* Datas */}
                  <div className="mb-4 text-sm text-gray-600">
                    <p>
                      <strong>Início:</strong> {new Date(campanha.dataInicio).toLocaleDateString('pt-BR')}
                    </p>
                    <p>
                      <strong>Fim:</strong> {new Date(campanha.dataFim).toLocaleDateString('pt-BR')}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
                      <Eye size={16} />
                      Visualizar
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors text-sm font-medium">
                      <Send size={16} />
                      Enviar
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={16} />
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
