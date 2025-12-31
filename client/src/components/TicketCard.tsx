import { Phone, MessageCircle, Clock, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

interface TicketCardProps {
  id: string;
  number: string;
  phone: string;
  date: string;
  time: string;
  status: 'invalid' | 'pending' | 'resolved' | 'rejected';
  description: string;
  assignedTo?: string;
  avatar?: string;
  onAction?: (action: string) => void;
}

export default function TicketCard({
  id,
  number,
  phone,
  date,
  time,
  status,
  description,
  assignedTo = 'Admin',
  avatar = '5',
  onAction
}: TicketCardProps) {
  const statusConfig = {
    invalid: { bg: 'bg-red-100', text: 'text-red-700', label: 'Opção Inválida', icon: <AlertCircle size={16} /> },
    pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Pendente', icon: <Clock size={16} /> },
    resolved: { bg: 'bg-green-100', text: 'text-green-700', label: 'Resolvido', icon: <CheckCircle2 size={16} /> },
    rejected: { bg: 'bg-red-100', text: 'text-red-700', label: 'Rejeitado', icon: <XCircle size={16} /> },
  };

  const config = statusConfig[status];
  const avatarColor = {
    '1': 'bg-blue-500',
    '2': 'bg-purple-500',
    '3': 'bg-pink-500',
    '4': 'bg-indigo-500',
    '5': 'bg-amber-700',
    '6': 'bg-cyan-500',
  }[avatar] || 'bg-gray-500';

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className={`${avatarColor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg`}>
          {avatar}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold">
                {date}
              </span>
              <span className="text-gray-600 text-sm">{phone}</span>
              <span className="text-gray-400 text-sm">{time}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
                {config.icon}
                {config.label}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                {assignedTo}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onAction?.('call')}
                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                title="Ligar"
              >
                <Phone size={18} />
              </button>
              <button
                onClick={() => onAction?.('message')}
                className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Rejeitar"
              >
                <XCircle size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
