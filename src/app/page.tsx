import KPICard from '@/components/cards/KPICard';
import AreaChart from '@/components/charts/AreaChart';
import DonutChart from '@/components/charts/DonutChart';
import GaugeChart from '@/components/charts/GaugeChart';

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Finansal Özet Dashboard
        </h1>
        <p className="text-gray-600">
          Hoş geldiniz! İşletmenizin finansal durumunu buradan takip edebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Net Nakit Akışı"
          value="₺1,280,000"
          change={5.2}
          trend="up"
          iconName="Wallet"
          iconColor="text-primary-600"
          iconBgColor="bg-primary-50"
        />
        
        <KPICard
          title="Brüt Kar Marjı"
          value="%23.88"
          change={2.4}
          trend="up"
          iconName="TrendingUp"
          iconColor="text-success-600"
          iconBgColor="bg-success-50"
        />
        
        <KPICard
          title="Toplam Gelir (Aylık)"
          value="₺842,500"
          change={-1.2}
          trend="down"
          iconName="DollarSign"
          iconColor="text-blue-600"
          iconBgColor="bg-blue-50"
        />
        
        <KPICard
          title="Ortalaman Günlük Satış"
          value="₺28,083"
          change={3.7}
          trend="up"
          iconName="CreditCard"
          iconColor="text-purple-600"
          iconBgColor="bg-purple-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Gelir ve Gider Analizi
          </h3>
          <p className="text-sm text-gray-500 mb-6">Son 12 aylık performans</p>
          <AreaChart />
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <GaugeChart value={78} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Gelir Dağılımı
          </h3>
          <p className="text-sm text-gray-500 mb-4">Kategori bazında gelir analizi</p>
          <div className="h-96">
            <DonutChart 
              data={[
                { name: 'Ürün Satışları', value: 440250, color: '#3b82f6' },
                { name: 'Hizmet Gelirleri', value: 235680, color: '#10b981' },
                { name: 'Danışmanlık', value: 112870, color: '#f59e0b' },
                { name: 'Diğer', value: 53700, color: '#8b5cf6' },
              ]}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Gider Dağılımı
          </h3>
          <p className="text-sm text-gray-500 mb-4">Kategori bazında gider analizi</p>
          <div className="h-96">
            <DonutChart 
              data={[
                { name: 'Personel Giderleri', value: 268200, color: '#ef4444' },
                { name: 'Operasyonel Giderler', value: 149250, color: '#f97316' },
                { name: 'Pazarlama', value: 107460, color: '#ec4899' },
                { name: 'Diğer Giderler', value: 73090, color: '#6b7280' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}