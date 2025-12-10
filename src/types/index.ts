// TypeScript Type Definitions

export interface KPICardData {
  title: string;
  value: string | number;
  change: number; // Yüzde değişimi
  trend: 'up' | 'down';
  icon?: string;
}

export interface ExchangeRate {
  currency: string;
  code: string; // USD, EUR, GBP
  rate: number;
  change: number; // Önceki güne göre değişim
  lastUpdate: string;
}

export interface ChartDataPoint {
  month: string;
  gelir: number;
  gider: number;
}

export interface DonutChartData {
  name: string;
  value: number;
  color: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  active?: boolean;
}