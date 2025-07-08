'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts'

const data = [
  { month: 'Jan', users: 400, sessions: 240 },
  { month: 'Feb', users: 300, sessions: 139 },
  { month: 'Mar', users: 200, sessions: 980 },
  { month: 'Apr', users: 278, sessions: 390 },
  { month: 'May', users: 189, sessions: 480 },
  { month: 'Jun', users: 239, sessions: 380 },
  { month: 'Jul', users: 349, sessions: 430 },
]

export default function AnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
        <Line type="monotone" dataKey="sessions" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}
