import { MessageSquare, Zap, CheckSquare, BarChart3, Users, Calendar, Tag, MessageCircle, HelpCircle, Mail, List } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const sections: SidebarSection[] = [
    {
      title: 'ATENDIMENTO',
      items: [
        { icon: <MessageSquare size={20} />, label: 'Atendimentos', href: '/', badge: 5 },
        { icon: <Zap size={20} />, label: 'Respostas Rápidas', href: '/respostas' },
        { icon: <CheckSquare size={20} />, label: 'Kanban', href: '/kanban' },
        { icon: <Tag size={20} />, label: 'Tarefas', href: '/tarefas' },
        { icon: <Users size={20} />, label: 'Contatos', href: '/contatos' },
        { icon: <Calendar size={20} />, label: 'Agendamentos', href: '/agendamentos' },
        { icon: <Tag size={20} />, label: 'Tags', href: '/tags' },
        { icon: <MessageCircle size={20} />, label: 'Chat Interno', href: '/chat' },
        { icon: <HelpCircle size={20} />, label: 'Ajuda', href: '/ajuda' },
      ]
    },
    {
      title: 'GERÊNCIA',
      items: [
        { icon: <BarChart3 size={20} />, label: 'Dashboard', href: '/dashboard' },
        { icon: <Mail size={20} />, label: 'Relatórios', href: '/relatorios' },
      ]
    },
    {
      title: 'CAMPANHAS',
      items: [
        { icon: <Mail size={20} />, label: 'Listagem', href: '/campanhas' },
        { icon: <List size={20} />, label: 'Listas de Contatos', href: '/listas' },
      ]
    }
  ];

  return (
    <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-screen`}>
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className={`${collapsed ? 'hidden' : 'block'} text-center`}>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white font-bold text-lg">24</span>
          </div>
          <p className="text-xs font-semibold text-gray-700">24 HORAS</p>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <h3 className="text-xs font-semibold text-emerald-600 mb-3 px-2 uppercase tracking-wider">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors group relative">
                      <span className="text-gray-600 group-hover:text-emerald-600 transition-colors">
                        {item.icon}
                      </span>
                      {!collapsed && (
                        <>
                          <span className="text-sm font-medium flex-1">{item.label}</span>
                          {item.badge && (
                            <span className="bg-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-3">
        {!collapsed && (
          <button className="w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
            <HelpCircle size={18} />
            <span>Suporte</span>
          </button>
        )}
      </div>
    </aside>
  );
}
