'use client';
import Image from 'next/image';

import { 
  LayoutDashboard, 
  FileText, 
  TrendingUp, 
  Settings, 
  Wallet,
  PieChart,
  X
} from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
  icon: any;
  href: string;
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Finansal Özet', icon: LayoutDashboard, href: '/' },
  { id: 'reports', label: 'Raporlar & Analizler', icon: FileText, href: '/reports' },
  { id: 'transactions', label: 'İşlemler', icon: Wallet, href: '/transactions' },
  { id: 'analytics', label: 'Gelir Analizi', icon: PieChart, href: '/analytics' },
  { id: 'trends', label: 'Piyasa Trendleri', icon: TrendingUp, href: '/trends' },
  { id: 'settings', label: 'Ayarlar', icon: Settings, href: '/settings' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeId, setActiveId] = useState('dashboard');

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-50
        w-64 bg-white border-r border-gray-200 h-screen 
        flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
  <Image 
    src="/logo.png" 
    alt="FinDash Logo" 
    width={180}
    height={40}
    className="object-contain"
    priority
  />
  
  <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
    <X className="w-5 h-5 text-gray-600" />
  </button>
</div>
        

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveId(item.id);
                  onClose(); 
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200 text-left
                  ${isActive 
                    ? 'bg-primary-50 text-primary-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-medium text-gray-900 mb-1">
              Müşteri Desteği
            </p>
            <p className="text-xs text-gray-500 mb-3">
              7/24 destek hattımızdan bize ulaşabilirsiniz
            </p>
            <button className="w-full bg-primary-500 text-white text-xs py-2 rounded-lg hover:bg-primary-600 transition">
              İletişime Geç
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}