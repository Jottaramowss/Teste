import { Plus, Search, Mail, Phone, Edit2, Trash2 } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

interface Contato {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  status: 'ativo' | 'inativo';
  ultimoContato: string;
}

export default function Contatos() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const contatos: Contato[] = [
    {
      id: '1',
      nome: 'João Silva',
      email: 'joao@example.com',
      telefone: '(11) 98765-4321',
      empresa: 'Tech Solutions',
      status: 'ativo',
      ultimoContato: '2025-01-10'
    },
    {
      id: '2',
      nome: 'Maria Santos',
      email: 'maria@example.com',
      telefone: '(21) 99876-5432',
      empresa: 'Inovação Digital',
      status: 'ativo',
      ultimoContato: '2025-01-12'
    },
    {
      id: '3',
      nome: 'Pedro Costa',
      email: 'pedro@example.com',
      telefone: '(31) 97654-3210',
      empresa: 'Consultoria XYZ',
      status: 'inativo',
      ultimoContato: '2024-12-20'
    },
    {
      id: '4',
      nome: 'Ana Oliveira',
      email: 'ana@example.com',
      telefone: '(41) 98765-4321',
      empresa: 'Marketing Pro',
      status: 'ativo',
      ultimoContato: '2025-01-13'
    },
    {
      id: '5',
      nome: 'Carlos Mendes',
      email: 'carlos@example.com',
      telefone: '(51) 99876-5432',
      empresa: 'Desenvolvimento Web',
      status: 'ativo',
      ultimoContato: '2025-01-11'
    },
  ];

  const filteredContatos = contatos.filter(contato =>
    contato.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contato.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contato.telefone.includes(searchQuery)
  );

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
                <h1 className="text-3xl font-bold text-gray-900">Contatos</h1>
                <p className="text-gray-600 mt-1">Gerencie seus contatos e clientes</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus size={20} />
                Novo Contato
              </button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por nome, email ou telefone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Contatos Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Nome</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Telefone</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Empresa</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Último Contato</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredContatos.map((contato) => (
                    <tr key={contato.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{contato.nome}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <a href={`mailto:${contato.email}`} className="flex items-center gap-2 hover:text-emerald-600">
                          <Mail size={16} />
                          {contato.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <a href={`tel:${contato.telefone}`} className="flex items-center gap-2 hover:text-emerald-600">
                          <Phone size={16} />
                          {contato.telefone}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{contato.empresa}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          contato.status === 'ativo' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {contato.status === 'ativo' ? 'Ativo' : 'Inativo'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(contato.ultimoContato).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                            <Edit2 size={16} />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredContatos.length === 0 && (
              <div className="bg-white rounded-lg p-12 text-center border border-gray-200">
                <p className="text-gray-500 font-medium">Nenhum contato encontrado</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
