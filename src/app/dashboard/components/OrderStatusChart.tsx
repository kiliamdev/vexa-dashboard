'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Sales', value: 68, color: '#3b82f6' },
  { name: 'Product', value: 25, color: '#facc15' },
  { name: 'Income', value: 14, color: '#10b981' }
]

export default function OrderStatusChart() {
  return (
    <div className="bg-[#1E1E2D] rounded-xl p-6 text-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">Order Status</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className="mt-4 space-y-1 text-sm text-gray-300">
        {data.map((d, i) => (
          <li key={i} className="flex justify-between">
            <span>{d.name}</span>
            <span>{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
