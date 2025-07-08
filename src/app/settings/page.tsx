'use client'

import Sidebar from '../dashboard/components/Sidebar'

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-[#111827] text-white">
      <Sidebar />
      <main className="ml-[220px] w-full p-8 space-y-6 max-w-xl">
        <h1 className="text-3xl font-bold">Settings</h1>

        <form className="space-y-6 bg-[#1E1E2D] p-6 rounded-xl shadow">
          {/* Timezone */}
          <div>
            <label className="block text-sm font-medium mb-1">Timezone</label>
            <select className="w-full p-2 rounded bg-[#2A2A3D] text-white border border-[#333]">
              <option>UTC</option>
              <option>Europe/Budapest</option>
              <option>America/New_York</option>
              <option>Asia/Tokyo</option>
            </select>
          </div>

          {/* Theme */}
          <div>
            <label className="block text-sm font-medium mb-1">Dashboard Theme</label>
            <select className="w-full p-2 rounded bg-[#2A2A3D] text-white border border-[#333]">
              <option>Dark</option>
              <option>Light</option>
              <option>Auto</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium mb-1">Default Language</label>
            <select className="w-full p-2 rounded bg-[#2A2A3D] text-white border border-[#333]">
              <option>English</option>
              <option>German</option>
              <option>Spanish</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition"
          >
            Save Settings
          </button>
        </form>
      </main>
    </div>
  )
}
