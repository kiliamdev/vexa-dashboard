import Sidebar from '../dashboard/components/Sidebar'

const users = [
  { name: 'Kiliam Gyarmati', email: 'kiliam123@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { name: 'Tom Allen', email: 'tom@example.com', role: 'Viewer' },
]

export default function UsersPage() {
  return (
    <div className="flex min-h-screen bg-[#111827] text-white">
      <Sidebar />
      <main className="ml-[220px] w-full p-8 space-y-6">
        <h1 className="text-3xl font-bold">Users</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user, idx) => (
            <div key={idx} className="bg-[#1E1E2D] rounded-xl p-4 shadow space-y-2">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
              <p className="text-sm">Role: <span className="text-yellow-400">{user.role}</span></p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
