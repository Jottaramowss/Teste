import { TrendingUp, Users, MessageSquare, Clock } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function Dashboard() {
  const stats = [
    {
      titulo: 'Atendimentos Totais',
      valor: '1,234',
      icone: <MessageSquare size={24} />,
      cor: 'bg-blue-100 text-blue-600',
      mudanca: '+12% este mês'
    },
    {
      titulo: 'Clientes Ativos',
      valor: '456',
      icone: <Users size={24} />,
      cor: 'bg-green-100 text-green-600',
      mudanca: '+8% este mês'
    },
    {
      titulo: 'Tempo Médio',
      valor: '4m 32s',
      icone: <Clock size={24} />,
      cor: 'bg-orange-100 text-orange-600',
      mudanca: '-2% este mês'
    },
    {
      titulo: 'Taxa de Resolução',
      valor: '94%',
      icone: <TrendingUp size={24} />,
      cor: 'bg-purple-100 text-purple-600',
      mudanca: '+3% este mês'
    },
  ];

  const atendimentosPorDia = [
    { dia: 'Seg', valor: 45 },
    { dia: 'Ter', valor: 52 },
    { dia: 'Qua', valor: 48 },
    { dia: 'Qui', valor: 61 },
    { dia: 'Sex', valor: 55 },
    { dia: 'Sab', valor: 32 },
    { dia: 'Dom', valor: 28 },
  ];

  const maxValor = Math.max(...atendimentosPorDia.map(d => d.valor));

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Visão geral do seu atendimento</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-lg ${stat.cor} flex items-center justify-center mb-4`}>
                    {stat.icone}
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{stat.titulo}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.valor}</h3>
                  <p className="text-xs text-green-600 font-medium">{stat.mudanca}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Gráfico de Atendimentos */}
              <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Atendimentos por Dia</h2>
                <div className="flex items-end justify-between h-64 gap-2">
                  {atendimentosPorDia.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gray-200 rounded-t-lg hover:bg-emerald-400 transition-colors" 
                        style={{ height: `${(item.valor / maxValor) * 100}%` }}>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">{item.dia}</p>
                      <p className="text-xs font-semibold text-gray-900">{item.valor}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status de Atendimentos */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Status de Atendimentos</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Resolvidos</span>
                      <span className="text-sm font-bold text-gray-900">1,162</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Pendentes</span>
                      <span className="text-sm font-bold text-gray-900">56</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Rejeitados</span>
                      <span className="text-sm font-bold text-gray-900">16</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabela de Atendentes */}
            <div className="mt-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Top Atendentes</h2>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Nome</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Atendimentos</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Taxa de Resolução</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Tempo Médio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { nome: 'João Silva', atendimentos: 234, taxa: '96%', tempo: '4m 15s' },
                    { nome: 'Maria Santos', atendimentos: 198, taxa: '94%', tempo: '4m 32s' },
                    { nome: 'Pedro Costa', atendimentos: 187, taxa: '92%', tempo: '5m 10s' },
                    { nome: 'Ana Oliveira', atendimentos: 176, taxa: '95%', tempo: '4m 45s' },
                    { nome: 'Carlos Mendes', atendimentos: 165, taxa: '91%', tempo: '5m 20s' },
                  ].map((atendente, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{atendente.nome}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{atendente.atendimentos}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          {atendente.taxa}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{atendente.tempo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
