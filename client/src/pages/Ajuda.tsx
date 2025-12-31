import { Search, ChevronDown, Mail, Phone, MessageSquare } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

interface FAQ {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: string;
}

export default function Ajuda() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const faqs: FAQ[] = [
    {
      id: '1',
      pergunta: 'Como criar um novo atendimento?',
      resposta: 'Para criar um novo atendimento, clique no botão "+" na seção de Atendimentos. Preencha os dados do cliente e a descrição do problema. O sistema irá gerar um ID único para o atendimento.',
      categoria: 'Atendimentos'
    },
    {
      id: '2',
      pergunta: 'Como usar respostas rápidas?',
      resposta: 'Acesse a seção de Respostas Rápidas para criar templates de respostas. Você pode usar essas respostas em qualquer atendimento para ganhar tempo.',
      categoria: 'Respostas'
    },
    {
      id: '3',
      pergunta: 'Como gerar um relatório?',
      resposta: 'Na seção Relatórios, clique em "Gerar Relatório". Selecione o período, tipo de relatório e formato desejado. O relatório será gerado em poucos segundos.',
      categoria: 'Relatórios'
    },
    {
      id: '4',
      pergunta: 'Como adicionar um novo contato?',
      resposta: 'Vá para a seção Contatos e clique em "Novo Contato". Preencha as informações do cliente como nome, email, telefone e empresa.',
      categoria: 'Contatos'
    },
    {
      id: '5',
      pergunta: 'Como usar o Kanban?',
      resposta: 'O Kanban permite organizar suas tarefas em colunas (Novo, Em Progresso, Em Revisão, Concluído). Arraste os cards entre as colunas para atualizar o status.',
      categoria: 'Tarefas'
    },
    {
      id: '6',
      pergunta: 'Como criar tags personalizadas?',
      resposta: 'Na seção Tags, clique em "Nova Tag". Escolha um nome, cor e descrição. As tags podem ser usadas para categorizar atendimentos.',
      categoria: 'Tags'
    },
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.pergunta.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.resposta.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categorias = Array.from(new Set(faqs.map(f => f.categoria)));

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Central de Ajuda</h1>
              <p className="text-gray-600 mt-1">Encontre respostas para suas dúvidas</p>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar na central de ajuda..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categorias */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-left"
                >
                  <h3 className="font-semibold text-gray-900">{cat}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {faqs.filter(f => f.categoria === cat).length} artigos
                  </p>
                </button>
              ))}
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Perguntas Frequentes</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                      className="w-full flex items-start justify-between"
                    >
                      <div className="text-left flex-1">
                        <h3 className="font-semibold text-gray-900">{faq.pergunta}</h3>
                        <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {faq.categoria}
                        </span>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-gray-600 transition-transform flex-shrink-0 ml-4 ${
                          expandedFAQ === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFAQ === faq.id && (
                      <p className="text-gray-600 mt-4 text-sm">{faq.resposta}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contato */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-4">Envie sua dúvida por email</p>
                <a href="mailto:suporte@example.com" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                  suporte@example.com
                </a>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone size={24} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Telefone</h3>
                <p className="text-gray-600 text-sm mb-4">Ligue para nosso suporte</p>
                <a href="tel:+551133334444" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                  (11) 3333-4444
                </a>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare size={24} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Converse com nosso time</p>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                  Iniciar Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
