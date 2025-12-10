"use client";
import Image from "next/image";

import {
  LayoutDashboard,
  MessageSquare,
  BarChart,
  Calendar,
  FileText,
  Bell,
  Database,
  Globe,
  Building,
  X,
} from "lucide-react";
import { useState } from "react";

interface MenuItem {
  id: string;
  label: string;
  icon: any;
  href: string;
  badge?: string | number;
  isNew?: boolean;
}

const menuItems: MenuItem[] = [
  { id: "summary", label: "Finansal Özet", icon: LayoutDashboard, href: "/" },
  { id: "ask", label: "Danışmana Sor", icon: MessageSquare, href: "/ask" },
  {
    id: "analysis",
    label: "Finansal Oran Analizi",
    icon: BarChart,
    href: "/analysis",
  },
  {
    id: "budget",
    label: "Bütçe Planlayıcısı",
    icon: Calendar,
    href: "/budget",
  },
  {
    id: "reports",
    label: "Raporlar & Analizler",
    icon: FileText,
    href: "/reports",
  },
  {
    id: "alerts",
    label: "Uyarılar & Öneriler",
    icon: Bell,
    href: "/alerts",
    badge: 3,
  },
  { id: "data", label: "Veri Girişi", icon: Database, href: "/data" },
  {
    id: "economy",
    label: "Ekonomi Gündemi",
    icon: Globe,
    href: "/economy",
    isNew: true,
  },
  { id: "firm", label: "Firma Bilgileri", icon: Building, href: "/firm" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeId, setActiveId] = useState("summary");

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50
          w-64 bg-white border-r border-gray-200 h-screen
          flex flex-col transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="relative w-50 h-9">
  <Image
    src="/logo.png"
    alt="Logo"
    fill
    className="object-contain"
  />
</div>



          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
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
                  w-full flex items-center justify-between px-3 py-2 rounded-md
                  transition text-left group
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </div>

                {item.badge && (
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}

                {item.isNew && (
                  <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full">
                    Yeni
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
