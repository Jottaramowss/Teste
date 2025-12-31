import { Plus, Clock, User, MapPin, Trash2 } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

interface Agendamento {
  id: string;
  titulo: string;
  cliente: string;
  data: string;
  horario: string;
  local: string;
  status: 'confirmado' | 'pendente' | 'cancelado';
  descricao: string;
}

export default function Agendamentos() {
  const [agendamentos] = useState<Agendamento[]>([
    {
      id: '1',
      titulo: 'Reunião com Cliente A',
      cliente: 'João Silva',
      data: '2025-01-15',
      horario: '10:00',
      local: 'Sala de Reunião 1',
      status: 'confirmado',
      descricao: 'Discussão sobre novo projeto'
    },
    {
      id: '2',
      titulo: 'Apresentação de Proposta',
      cliente: 'Maria Santos',
      data: '2025-01-16',
      horario: '14:30',
      local: 'Videoconferência',
      status: 'confirmado',
      descricao: 'Apresentar proposta de serviço'
    },
    {
      id: '3',
      titulo: 'Almoço de Negócios',
      cliente: 'Pedro Costa',
      data: '2025-01-17',
      horario: '12:00',
      local: 'Restaurante XYZ',
      status: 'pendente',
      descricao: 'Discussão informal sobre parceria'
    },
    {
      id: '4',
      titulo: 'Treinamento de Equipe',
      cliente: 'Ana Oliveira',
      data: '2025-01-18',
      horario: '09:00',
      local: 'Sala de Treinamento',
      status: 'confirmado',
      descricao: 'Treinamento de novo sistema'
    },
    {
      id: '5',
      titulo: 'Reunião Cancelada',
      cliente: 'Carlos Mendes',
      data: '2025-01-10',
      horario: '15:00',
      local: 'Sala de Reunião 2',
      status: 'cancelado',
      descricao: 'Reunião de acompanhamento'
    },
  ]);

  const statusConfig = {
    confirmado: 'bg-green-100 text-green-700',
    pendente: 'bg-yellow-100 text-yellow-700',
    cancelado: 'bg-red-100 text-red-700',
  };

  const proximosAgendamentos = agendamentos.filter(a => new Date(a.data) >= new Date());
  const agendamentosPassados = agendamentos.filter(a => new Date(a.data) < new Date());

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
                <h1 className="text-3xl font-bold text-gray-900">Agendamentos</h1>
                <p className="text-gray-600 mt-1">Gerencie seus compromissos</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus size={20} />
                Novo Agendamento
              </button>
            </div>

            {/* Próximos Agendamentos */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Próximos Agendamentos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {proximosAgendamentos.map((agendamento) => (
                  <div key={agendamento.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{agendamento.titulo}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusConfig[agendamento.status]}`}>
                        {agendamento.status === 'confirmado' ? 'Confirmado' : agendamento.status === 'pendente' ? 'Pendente' : 'Cancelado'}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{agendamento.descricao}</p>

                    <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={16} className="text-gray-400" />
                        {agendamento.cliente}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} className="text-gray-400" />
                        {new Date(agendamento.data).toLocaleDateString('pt-BR')} às {agendamento.horario}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="text-gray-400" />
                        {agendamento.local}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600 transition-colors font-medium">
                        Editar
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agendamentos Passados */}
            {agendamentosPassados.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Histórico</h2>
                <div className="space-y-2">
                  {agendamentosPassados.map((agendamento) => (
                    <div key={agendamento.id} className="bg-white rounded-lg border border-gray-200 p-4 flex items-start justify-between opacity-75">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{agendamento.titulo}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {agendamento.cliente}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {new Date(agendamento.data).toLocaleDateString('pt-BR')} às {agendamento.horario}
                          </span>
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusConfig[agendamento.status]}`}>
                        {agendamento.status === 'confirmado' ? 'Confirmado' : agendamento.status === 'pendente' ? 'Pendente' : 'Cancelado'}
                      </span>
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
