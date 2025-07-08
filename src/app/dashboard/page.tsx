import DashboardCards from './components/DashboardCards'
import OrderStatusChart from './components/OrderStatusChart'
import SalesViewsChart from './components/SalesViewsChart'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#111827] text-white">
      <Sidebar />
      <main className="ml-[220px] w-full p-6 space-y-8">
        <Header />
        <DashboardCards />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <OrderStatusChart />
          <SalesViewsChart />
        </div>
      </main>
    </div>
  )
}
