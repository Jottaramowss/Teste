import { Plus, Edit2, Trash2, Copy } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface RespidaRapida {
  id: string;
  titulo: string;
  conteudo: string;
  categoria: string;
  usosRecentes: number;
}

export default function RespostasRapidas() {
  const respostas: RespidaRapida[] = [
    {
      id: '1',
      titulo: 'Horário de Funcionamento',
      conteudo: 'Estamos abertos de segunda a sexta, das 8h às 18h. Aos sábados, das 9h às 13h.',
      categoria: 'Informações',
      usosRecentes: 24
    },
    {
      id: '2',
      titulo: 'Política de Devolução',
      conteudo: 'Aceitamos devoluções em até 30 dias após a compra, desde que o produto esteja em perfeito estado.',
      categoria: 'Políticas',
      usosRecentes: 18
    },
    {
      id: '3',
      titulo: 'Formas de Pagamento',
      conteudo: 'Aceitamos cartão de crédito, débito, PIX e boleto bancário. Parcelamos em até 12x sem juros.',
      categoria: 'Pagamento',
      usosRecentes: 32
    },
    {
      id: '4',
      titulo: 'Rastreamento de Pedido',
      conteudo: 'Você pode acompanhar seu pedido através do código de rastreamento enviado por email após a confirmação.',
      categoria: 'Pedidos',
      usosRecentes: 15
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
                <h1 className="text-3xl font-bold text-gray-900">Respostas Rápidas</h1>
                <p className="text-gray-600 mt-1">Gerencie suas respostas pré-definidas</p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus size={20} />
                Nova Resposta
              </button>
            </div>

            {/* Respostas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {respostas.map((resposta) => (
                <div key={resposta.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{resposta.titulo}</h3>
                      <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {resposta.categoria}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {resposta.usosRecentes} usos
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{resposta.conteudo}</p>
                  
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors">
                      <Copy size={16} />
                      Copiar
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors">
                      <Edit2 size={16} />
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
