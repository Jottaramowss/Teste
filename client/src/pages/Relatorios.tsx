import { Download, Filter, Calendar } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface Relatorio {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  tipo: string;
  tamanho: string;
}

export default function Relatorios() {
  const relatorios: Relatorio[] = [
    {
      id: '1',
      titulo: 'Relatório de Atendimentos - Janeiro 2025',
      descricao: 'Análise completa de atendimentos do mês de janeiro',
      data: '2025-01-31',
      tipo: 'PDF',
      tamanho: '2.4 MB'
    },
    {
      id: '2',
      titulo: 'Desempenho de Atendentes - Q1 2025',
      descricao: 'Avaliação de desempenho dos atendentes no primeiro trimestre',
      data: '2025-01-15',
      tipo: 'Excel',
      tamanho: '1.8 MB'
    },
    {
      id: '3',
      titulo: 'Satisfação do Cliente - Janeiro 2025',
      descricao: 'Pesquisa de satisfação com análise de feedback',
      data: '2025-01-20',
      tipo: 'PDF',
      tamanho: '3.2 MB'
    },
    {
      id: '4',
      titulo: 'Análise de Tendências - 2024',
      descricao: 'Análise de tendências e padrões de atendimento ao longo de 2024',
      data: '2024-12-28',
      tipo: 'Excel',
      tamanho: '5.1 MB'
    },
    {
      id: '5',
      titulo: 'Relatório Financeiro - Dezembro 2024',
      descricao: 'Análise financeira e custos operacionais',
      data: '2024-12-15',
      tipo: 'PDF',
      tamanho: '1.9 MB'
    },
  ];

  const tipoConfig = {
    'PDF': 'bg-red-100 text-red-700',
    'Excel': 'bg-green-100 text-green-700',
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
                <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
                <p className="text-gray-600 mt-1">Acesse e baixe seus relatórios</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Calendar size={20} />
                Gerar Relatório
              </button>
            </div>

            {/* Filtros */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter size={20} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
                </div>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm">
                  <option>Todos os tipos</option>
                  <option>PDF</option>
                  <option>Excel</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm">
                  <option>Últimos 30 dias</option>
                  <option>Últimos 90 dias</option>
                  <option>Este ano</option>
                  <option>Todos</option>
                </select>
              </div>
            </div>

            {/* Relatórios List */}
            <div className="space-y-3">
              {relatorios.map((relatorio) => (
                <div key={relatorio.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{relatorio.titulo}</h3>
                      <p className="text-gray-600 text-sm mb-3">{relatorio.descricao}</p>
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${tipoConfig[relatorio.tipo as keyof typeof tipoConfig]}`}>
                          {relatorio.tipo}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(relatorio.data).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="text-xs text-gray-500">{relatorio.tamanho}</span>
                      </div>
                    </div>
                    <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex-shrink-0">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Seção de Relatórios Personalizados */}
            <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Criar Relatório Personalizado</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Período</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Até</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Relatório</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    <option>Atendimentos</option>
                    <option>Desempenho</option>
                    <option>Satisfação</option>
                    <option>Financeiro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Formato</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    <option>PDF</option>
                    <option>Excel</option>
                    <option>CSV</option>
                  </select>
                </div>
              </div>
              <button className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors font-medium">
                Gerar Relatório
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
