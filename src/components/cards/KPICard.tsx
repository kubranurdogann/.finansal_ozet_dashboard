'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import * as Icons from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  iconName: string; 
  iconColor?: string;
  iconBgColor?: string;
}

export default function KPICard({ 
  title, 
  value, 
  change, 
  trend, 
  iconName,
  iconColor = 'text-primary-600',
  iconBgColor = 'bg-primary-50'
}: KPICardProps) {
  const isPositive = trend === 'up';
  
  const Icon = (Icons as any)[iconName];
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-card-hover transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}>
          {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${
          isPositive ? 'text-success-600' : 'text-danger-600'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          {isPositive ? '+' : ''}{change}% geçen aya göre
        </p>
      </div>
    </div>
  );
}