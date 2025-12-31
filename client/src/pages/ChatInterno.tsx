import { Send, Paperclip, Smile } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

interface Mensagem {
  id: string;
  autor: string;
  conteudo: string;
  timestamp: string;
  isCurrentUser: boolean;
}

interface Conversa {
  id: string;
  nome: string;
  avatar: string;
  ultimaMensagem: string;
  naoLidas: number;
  online: boolean;
}

export default function ChatInterno() {
  const [conversaSelecionada, setConversaSelecionada] = useState('1');
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      id: '1',
      autor: 'João Silva',
      conteudo: 'Oi! Como vai?',
      timestamp: '10:30',
      isCurrentUser: false
    },
    {
      id: '2',
      autor: 'Você',
      conteudo: 'Oi João! Tudo bem! E você?',
      timestamp: '10:31',
      isCurrentUser: true
    },
    {
      id: '3',
      autor: 'João Silva',
      conteudo: 'Tudo certo! Você conseguiu resolver aquele problema?',
      timestamp: '10:32',
      isCurrentUser: false
    },
    {
      id: '4',
      autor: 'Você',
      conteudo: 'Sim! Consegui resolver. Vou enviar o relatório em breve.',
      timestamp: '10:33',
      isCurrentUser: true
    },
  ]);
  const [novaMensagem, setNovaMensagem] = useState('');

  const conversas: Conversa[] = [
    { id: '1', nome: 'João Silva', avatar: '1', ultimaMensagem: 'Vou enviar o relatório em breve.', naoLidas: 0, online: true },
    { id: '2', nome: 'Maria Santos', avatar: '2', ultimaMensagem: 'Obrigada pela ajuda!', naoLidas: 2, online: true },
    { id: '3', nome: 'Pedro Costa', avatar: '3', ultimaMensagem: 'Combinado para amanhã', naoLidas: 0, online: false },
    { id: '4', nome: 'Ana Oliveira', avatar: '4', ultimaMensagem: 'Perfeito, muito obrigada!', naoLidas: 1, online: true },
  ];

  const handleEnviar = () => {
    if (novaMensagem.trim()) {
      setMensagens([...mensagens, {
        id: (mensagens.length + 1).toString(),
        autor: 'Você',
        conteudo: novaMensagem,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        isCurrentUser: true
      }]);
      setNovaMensagem('');
    }
  };

  const conversaAtual = conversas.find(c => c.id === conversaSelecionada);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-hidden">
          <div className="flex h-full">
            {/* Lista de Conversas */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Chat Interno</h2>
              </div>

              <div className="flex-1 overflow-y-auto">
                {conversas.map((conversa) => (
                  <button
                    key={conversa.id}
                    onClick={() => setConversaSelecionada(conversa.id)}
                    className={`w-full px-4 py-3 border-b border-gray-100 text-left hover:bg-gray-50 transition-colors ${
                      conversaSelecionada === conversa.id ? 'bg-emerald-50 border-l-4 border-l-emerald-500' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {conversa.avatar}
                        </div>
                        {conversa.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">{conversa.nome}</h3>
                          {conversa.naoLidas > 0 && (
                            <span className="bg-emerald-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                              {conversa.naoLidas}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversa.ultimaMensagem}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Área de Chat */}
            <div className="flex-1 flex flex-col">
              {/* Header da Conversa */}
              <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {conversaAtual?.avatar}
                    </div>
                    {conversaAtual?.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">{conversaAtual?.nome}</h2>
                    <p className="text-xs text-gray-500">
                      {conversaAtual?.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mensagens */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {mensagens.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.isCurrentUser
                          ? 'bg-emerald-500 text-white rounded-br-none'
                          : 'bg-gray-200 text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.conteudo}</p>
                      <p className={`text-xs mt-1 ${msg.isCurrentUser ? 'text-emerald-100' : 'text-gray-600'}`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input de Mensagem */}
              <div className="bg-white border-t border-gray-200 p-4">
                <div className="flex items-end gap-3">
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Paperclip size={20} />
                  </button>
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value={novaMensagem}
                    onChange={(e) => setNovaMensagem(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleEnviar()}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Smile size={20} />
                  </button>
                  <button
                    onClick={handleEnviar}
                    className="p-2 bg-emerald-500 text-white hover:bg-emerald-600 rounded-lg transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
