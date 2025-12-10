'use client';

interface GaugeChartProps {
  value: number;
}

export default function GaugeChart({ value }: GaugeChartProps) {
  // Renk belirleme
  const getStatusText = (v: number) => {
    if (v >= 80) return "Mükemmel";
    if (v >= 60) return "İyi";
    if (v >= 40) return "Orta";
    return "Kötü";
  };

  const getColor = (v: number) => {
    if (v >= 80) return "#10b981"; 
    if (v >= 60) return "#3b82f6"; 
    if (v >= 40) return "#f59e0b"; 
    return "#ef4444"; 
  };

  const status = getStatusText(value);
  const color = getColor(value);
  const rotation = (value / 100) * 180 - 90;

  return (
    <div >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Finansal Sağlık</h2>
        <p className="text-sm text-gray-500">Firmanızın finansal durumu</p>
      </div>

      {/* Gauge */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-48 h-24 mb-2">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <path
              d="M 10 100 A 90 90 0 0 1 190 100"
              stroke="#e5e7eb"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M 10 100 A 90 90 0 0 1 190 100"
              stroke={color}
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(value / 100) * 283} 283`}
            />

            <line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke="#374151"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${rotation} 100 100)`}
            />

            <circle cx="100" cy="100" r="7" fill="#374151" />
          </svg>
        </div>

        <p className="text-4xl font-bold" style={{ color }}>
          {value}
        </p>
        <p className="mt-1 text-sm text-gray-600">{status}</p>
      </div>

      <div className="mt-6 space-y-4">

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-600">Nakit Akışı</span>
            <span className="text-gray-700">İyi</span>
          </div>
          <div className="w-full bg-gray-200 h-[3px] rounded-lg">
            <div className="bg-black h-[3px] w-[85%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-600">Borç Oranı</span>
            <span className="text-gray-700">Orta</span>
          </div>
          <div className="w-full bg-gray-200 h-[3px] rounded-lg">
            <div className="bg-black h-[3px] w-[55%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-600">Karlılık</span>
            <span className="text-gray-700">İyi</span>
          </div>
          <div className="w-full bg-gray-200 h-[3px] rounded-lg">
            <div className="bg-black h-[3px] w-[80%]" />
          </div>
        </div>

      </div>
    </div>
  );
}
