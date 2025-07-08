'use client'

import { BarChart3, ShoppingCart, Users, Eye } from 'lucide-react'

const cards = [
  {
    icon: <ShoppingCart className="text-blue-400" />,
    label: 'Total Orders',
    value: '248k',
    change: '+24%',
    color: 'text-blue-400'
  },
  {
    icon: <BarChart3 className="text-green-400" />,
    label: 'Total Sales',
    value: '$47.6k',
    change: '+14%',
    color: 'text-green-400'
  },
  {
    icon: <Eye className="text-red-400" />,
    label: 'Total Visits',
    value: '189k',
    change: '-35%',
    color: 'text-red-400'
  },
  {
    icon: <Users className="text-yellow-400" />,
    label: 'Bounce Rate',
    value: '24.6%',
    change: '+18%',
    color: 'text-yellow-400'
  }
]

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <div key={i} className="bg-[#1E1E2D] text-white rounded-xl p-4 shadow-md flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#2A2A3D]">
            {card.icon}
          </div>
          <div>
            <p className="text-sm text-gray-400">{card.label}</p>
            <p className="text-xl font-semibold">{card.value}</p>
            <p className={`text-xs ${card.color}`}>{card.change}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
