import { Bell, Volume2, MessageSquare, FileText, Settings, User } from 'lucide-react';

interface HeaderProps {
  userName?: string;
  companyName?: string;
  lastAccess?: string;
}

export default function Header({ 
  userName = "Admin", 
  companyName = "Empresa 1",
  lastAccess = "14/03/2025"
}: HeaderProps) {
  return (
    <header className="bg-emerald-500 text-white px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Left side - Greeting */}
      <div className="flex-1">
        <h1 className="text-lg font-semibold">
          Olá {userName}, Bem vindo a <span className="font-bold">{companyName}</span>!
        </h1>
        <p className="text-sm text-emerald-100 text-xs mt-1">
          Alivo até {lastAccess}
        </p>
      </div>

      {/* Right side - Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-emerald-600 rounded-lg transition-colors" title="Traduzir">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H17a2 2 0 012 2v2.5M3 15a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H17a2 2 0 012 2v2.5M9 20h6" />
          </svg>
        </button>

        <button className="p-2 hover:bg-emerald-600 rounded-lg transition-colors" title="Volume">
          <Volume2 size={20} />
        </button>

        <button className="p-2 hover:bg-emerald-600 rounded-lg transition-colors" title="Mensagens">
          <MessageSquare size={20} />
        </button>

        <button className="p-2 hover:bg-emerald-600 rounded-lg transition-colors" title="Documentos">
          <FileText size={20} />
        </button>

        <button className="p-2 hover:bg-emerald-600 rounded-lg transition-colors" title="Notificações">
          <Bell size={20} />
        </button>

        <button className="p-2 hover:bg-emerald-600 rounded-lg transition-colors" title="Configurações">
          <Settings size={20} />
        </button>

        <button className="p-2 hover:bg-emerald-600 rounded-lg transition-colors" title="Perfil">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
