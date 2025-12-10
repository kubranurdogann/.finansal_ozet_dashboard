'use client';

import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Oca', gelir: 650000, gider: 420000 },
  { month: 'Şub', gelir: 720000, gider: 480000 },
  { month: 'Mar', gelir: 680000, gider: 450000 },
  { month: 'Nis', gelir: 780000, gider: 520000 },
  { month: 'May', gelir: 850000, gider: 580000 },
  { month: 'Haz', gelir: 920000, gider: 620000 },
  { month: 'Tem', gelir: 880000, gider: 590000 },
  { month: 'Ağu', gelir: 950000, gider: 640000 },
  { month: 'Eyl', gelir: 890000, gider: 610000 },
  { month: 'Eki', gelir: 920000, gider: 650000 },
  { month: 'Kas', gelir: 880000, gider: 620000 },
  { month: 'Ara', gelir: 842500, gider: 598000 },
];

export default function AreaChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorGelir" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorGider" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `₺${(value / 1000)}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px'
            }}
            formatter={(value: number) => `₺${value.toLocaleString('tr-TR')}`}
          />
          <Legend 
            wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
            iconType="circle"
          />
          <Area
            type="monotone"
            dataKey="gelir"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorGelir)"
            name="Gelir"
          />
          <Area
            type="monotone"
            dataKey="gider"
            stroke="#ef4444"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorGider)"
            name="Gider"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}