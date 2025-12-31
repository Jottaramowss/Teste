import { useState } from 'react';
import { Plus, Filter, Search, Eye, EyeOff } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import TicketCard from '@/components/TicketCard';

interface Ticket {
  id: string;
  number: string;
  phone: string;
  date: string;
  time: string;
  status: 'invalid' | 'pending' | 'resolved' | 'rejected';
  description: string;
  avatar: string;
}

export default function Home() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWaiting, setShowWaiting] = useState(true);

  // Mock data - tickets
  const tickets: Ticket[] = [
    {
      id: '1',
      number: '08/12/2025',
      phone: '5521965421435',
      date: '08/12/2025',
      time: '22d',
      status: 'invalid',
      description: 'Opção Inválida, por favor tente novamente',
      avatar: '5'
    },
    {
      id: '2',
      number: '09/12/2025',
      phone: '5521965421436',
      date: '09/12/2025',
      time: '20d',
      status: 'pending',
      description: 'Aguardando resposta do cliente',
      avatar: '2'
    },
    {
      id: '3',
      number: '10/12/2025',
      phone: '5521965421437',
      date: '10/12/2025',
      time: '18d',
      status: 'resolved',
      description: 'Problema resolvido com sucesso',
      avatar: '3'
    },
    {
      id: '4',
      number: '11/12/2025',
      phone: '5521965421438',
      date: '11/12/2025',
      time: '15d',
      status: 'rejected',
      description: 'Atendimento rejeitado pelo cliente',
      avatar: '4'
    },
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesSearch = ticket.phone.includes(searchQuery) || ticket.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header userName="Admin" companyName="Empresa 1" lastAccess="14/03/2025" />

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                {/* Left Actions */}
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600" title="Novo">
                    <Plus size={20} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600" title="Filtrar">
                    <Filter size={20} />
                  </button>
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Todos</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showWaiting}
                      onChange={(e) => setShowWaiting(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600" title="Visualizar">
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              {/* Tabs and Search */}
              <div className="flex items-center justify-between gap-4">
                {/* Tabs */}
                <div className="flex items-center gap-4 border-b border-gray-200">
                  <button className={`px-3 py-2 font-medium text-sm border-b-2 transition-colors ${filterStatus === 'all' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
                    onClick={() => setFilterStatus('all')}>
                    ATENDIMENTOS
                    <span className="ml-2 bg-emerald-500 text-white text-xs rounded-full px-2 py-0.5">
                      {tickets.length}
                    </span>
                  </button>
                  <button className={`px-3 py-2 font-medium text-sm border-b-2 transition-colors ${filterStatus === 'pending' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
                    onClick={() => setFilterStatus('pending')}>
                    AGUARDANDO
                  </button>
                </div>

                {/* Search */}
                <div className="relative flex-1 max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                {/* File Filter */}
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white">
                  <option>Filas</option>
                  <option>Fila 1</option>
                  <option>Fila 2</option>
                </select>
              </div>
            </div>

            {/* Tickets List */}
            <div className="space-y-3">
              {filteredTickets.length > 0 ? (
                filteredTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    {...ticket}
                    onAction={(action) => {
                      console.log(`Action: ${action} on ticket ${ticket.id}`);
                    }}
                  />
                ))
              ) : (
                <div className="bg-white rounded-lg p-12 text-center">
                  <div className="text-gray-400 mb-2">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Nenhum atendimento encontrado</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Company Logo - Bottom Right */}
      <div className="fixed bottom-6 right-6 pointer-events-none">
        <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-red-600">
          <div className="text-center">
            <div className="text-red-600 font-bold text-2xl">24 H</div>
            <div className="text-red-600 text-xs font-semibold">ATENDIMENTO</div>
          </div>
        </div>
      </div>
    </div>
  );
}
