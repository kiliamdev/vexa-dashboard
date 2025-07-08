import Link from 'next/link'
import { LayoutDashboard, BarChart3, Users, Settings } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-[220px] h-screen bg-[#1E1E2D] text-white fixed left-0 top-0 border-r border-[#2A2A3D] p-6">
      <div className="text-2xl font-bold mb-10 tracking-wide">Vexa</div>
      <nav className="space-y-4 text-sm font-medium">
        <Link href="/dashboard" className="flex items-center gap-3 hover:text-yellow-400 transition">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>
        <Link href="/analytics" className="flex items-center gap-3 hover:text-yellow-400 transition">
          <BarChart3 size={18} />
          Analytics
        </Link>
        <Link href="/users" className="flex items-center gap-3 hover:text-yellow-400 transition">
          <Users size={18} />
          Users
        </Link>
        <Link href="/settings" className="flex items-center gap-3 hover:text-yellow-400 transition">
          <Settings size={18} />
          Settings
        </Link>
      </nav>
    </aside>
  )
}
