import Sidebar from '../dashboard/components/Sidebar'
import AnalyticsChart from '../dashboard/components/AnalyticsChart'

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-8 ml-[220px]">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>

        <div className="rounded-xl bg-white/5 p-6 backdrop-blur shadow-md">
          <AnalyticsChart />
        </div>
      </main>
    </div>
  )
}
