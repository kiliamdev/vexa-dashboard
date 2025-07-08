import Sidebar from './dashboard/components/Sidebar'

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#111827] text-white">
      <Sidebar />
      <main className="flex-1 ml-[220px] p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Vexa Admin</h1>
        <p className="text-gray-400 max-w-2xl">
          This is the main landing page of the Vexa Admin Dashboard. Navigate using the sidebar to access different modules like Dashboard, Analytics, Users, and Settings.
        </p>
      </main>
    </div>
  )
}
