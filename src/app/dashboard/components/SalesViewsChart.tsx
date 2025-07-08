'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', sales: 20, views: 10 },
  { month: 'Feb', sales: 35, views: 15 },
  { month: 'Mar', sales: 60, views: 40 },
  { month: 'Apr', sales: 30, views: 20 },
  { month: 'May', sales: 40, views: 30 },
  { month: 'Jun', sales: 25, views: 20 },
  { month: 'Jul', sales: 50, views: 35 },
  { month: 'Aug', sales: 15, views: 10 },
  { month: 'Sep', sales: 45, views: 25 }
]

export default function SalesViewsChart() {
  return (
    <div className="bg-[#1E1E2D] rounded-xl p-6 text-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">Sales & Views</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2A2A3D" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#facc15" />
          <Bar dataKey="views" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
