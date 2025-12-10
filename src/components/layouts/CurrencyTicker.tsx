'use client';

import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CurrencyData {
  code: string;
  name: string;
  rate: number;
  change: number;
}

export default function CurrencyTicker() {
  const [currencies, setCurrencies] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  const fetchRates = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/exchange-rates');
      const data = await response.json();
      setCurrencies(data.rates);
      setLastUpdate(new Date().toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit'
      }));
    } catch (error) {
      console.error('Döviz kurları alınamadı:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-b border-gray-200 px-4 py-3">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">
            Canlı Piyasa Verileri
          </span>
          <span className="text-xs text-gray-500">
            Son güncelleme: {lastUpdate}
          </span>
        </div>

        <div className="
          flex items-center gap-4 
          overflow-x-auto no-scrollbar
          py-1
          lg:overflow-visible lg:flex-wrap
        ">
          {currencies.map((currency) => {
            const isPositive = currency.change >= 0;

            return (
              <div
                key={currency.code}
                className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-lg whitespace-nowrap shadow-sm hover:bg-white transition"
              >
                <div className="text-left">
                  <p className="text-xs font-semibold text-gray-700">
                    {currency.code}/TRY
                  </p>
                  <p className="text-base font-bold text-gray-900">
                    ₺{currency.rate.toFixed(4)}
                  </p>
                </div>

                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
                    isPositive
                      ? 'bg-success-50 text-success-700'
                      : 'bg-danger-50 text-danger-700'
                  }`}
                >
                  {isPositive ? (
                    <TrendingUp className="w-3.5 h-3.5" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5" />
                  )}

                  <span>{isPositive ? '+' : ''}{currency.change.toFixed(2)}%</span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={fetchRates}
          disabled={loading}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition disabled:opacity-50 flex-shrink-0"
        >
          <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
          Yenile
        </button>
      </div>
    </div>
  );
}
