import { Plus, Edit2, Trash2, Tag } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface TagItem {
  id: string;
  nome: string;
  cor: string;
  descricao: string;
  uso: number;
}

export default function Tags() {
  const tags: TagItem[] = [
    {
      id: '1',
      nome: 'Urgente',
      cor: 'bg-red-100 text-red-700',
      descricao: 'Atendimentos que requerem atenção imediata',
      uso: 45
    },
    {
      id: '2',
      nome: 'Importante',
      cor: 'bg-orange-100 text-orange-700',
      descricao: 'Atendimentos importantes',
      uso: 32
    },
    {
      id: '3',
      nome: 'Resolvido',
      cor: 'bg-green-100 text-green-700',
      descricao: 'Atendimentos já resolvidos',
      uso: 128
    },
    {
      id: '4',
      nome: 'Pendente',
      cor: 'bg-yellow-100 text-yellow-700',
      descricao: 'Atendimentos aguardando resposta',
      uso: 67
    },
    {
      id: '5',
      nome: 'Feedback',
      cor: 'bg-blue-100 text-blue-700',
      descricao: 'Atendimentos com feedback do cliente',
      uso: 23
    },
    {
      id: '6',
      nome: 'Sugestão',
      cor: 'bg-purple-100 text-purple-700',
      descricao: 'Sugestões de melhorias',
      uso: 15
    },
  ];

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
                <h1 className="text-3xl font-bold text-gray-900">Tags</h1>
                <p className="text-gray-600 mt-1">Organize seus atendimentos com tags</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus size={20} />
                Nova Tag
              </button>
            </div>

            {/* Tags Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tags.map((tag) => (
                <div key={tag.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${tag.cor}`}>
                        <Tag size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{tag.nome}</h3>
                        <p className="text-xs text-gray-500 mt-1">{tag.uso} usos</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{tag.descricao}</p>

                  <div className="flex gap-2 pt-3 border-t border-gray-200">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors font-medium">
                      <Edit2 size={16} />
                      Editar
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors">
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
