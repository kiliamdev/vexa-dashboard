import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vexa Admin Dashboard',
  description: 'Black & White Next.js Admin Dashboard using Shadcn UI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
