import { Plus, Download, Trash2, Users, Edit2 } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface ListaContatos {
  id: string;
  nome: string;
  descricao: string;
  contatos: number;
  dataCriacao: string;
  ultimaAtualizacao: string;
}

export default function ListasContatos() {
  const listas: ListaContatos[] = [
    {
      id: '1',
      nome: 'Clientes VIP',
      descricao: 'Clientes com maior volume de compras',
      contatos: 245,
      dataCriacao: '2024-06-15',
      ultimaAtualizacao: '2025-01-10'
    },
    {
      id: '2',
      nome: 'Prospects Qualificados',
      descricao: 'Leads com alto potencial de conversão',
      contatos: 1230,
      dataCriacao: '2024-08-20',
      ultimaAtualizacao: '2025-01-12'
    },
    {
      id: '3',
      nome: 'Clientes Inativos',
      descricao: 'Clientes que não compraram nos últimos 6 meses',
      contatos: 567,
      dataCriacao: '2024-09-01',
      ultimaAtualizacao: '2025-01-08'
    },
    {
      id: '4',
      nome: 'Newsletter Subscribers',
      descricao: 'Inscritos na newsletter mensal',
      contatos: 3450,
      dataCriacao: '2024-01-10',
      ultimaAtualizacao: '2025-01-13'
    },
    {
      id: '5',
      nome: 'Feedback Positivo',
      descricao: 'Clientes com feedback positivo',
      contatos: 892,
      dataCriacao: '2024-11-05',
      ultimaAtualizacao: '2025-01-11'
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
                <h1 className="text-3xl font-bold text-gray-900">Listas de Contatos</h1>
                <p className="text-gray-600 mt-1">Organize seus contatos em listas</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus size={20} />
                Nova Lista
              </button>
            </div>

            {/* Listas Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Nome</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Descrição</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Contatos</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Data de Criação</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Última Atualização</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {listas.map((lista) => (
                    <tr key={lista.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Users size={20} className="text-emerald-600" />
                          </div>
                          <span className="font-medium text-gray-900">{lista.nome}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{lista.descricao}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                          {lista.contatos}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(lista.dataCriacao).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(lista.ultimaAtualizacao).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Visualizar">
                            <Users size={16} />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Exportar">
                            <Download size={16} />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Editar">
                            <Edit2 size={16} />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Deletar">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Criar Lista Rápida */}
            <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Criar Nova Lista</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Lista</label>
                  <input type="text" placeholder="Ex: Clientes Premium" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
                  <input type="text" placeholder="Descrição da lista" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Importar Contatos (CSV)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                  <p className="text-gray-600">Arraste arquivos aqui ou clique para selecionar</p>
                  <p className="text-xs text-gray-500 mt-1">Máximo 10MB, formato CSV</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors font-medium">
                Criar Lista
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
