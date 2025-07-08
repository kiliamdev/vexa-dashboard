'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Pencil } from 'lucide-react'
import EditModal from './EditModal'

export default function DataTable() {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  ])

  const [selectedUser, setSelectedUser] = useState<{ id: number; name: string; email: string } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDelete = (id: number) => {
    setData(prev => prev.filter(item => item.id !== id))
  }

  const handleEdit = (user: { id: number; name: string; email: string }) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const handleSave = (id: number, name: string, email: string) => {
    setData(prev =>
      prev.map(item => (item.id === id ? { ...item, name, email } : item))
    )
    setSelectedUser({ id, name, email })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedUser(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="overflow-x-auto"
    >
      <h2 className="text-2xl font-bold mb-4">User Table</h2>
      <table className="min-w-full bg-slate-800 rounded-xl">
        <thead>
          <tr className="text-left">
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id} className="border-t border-slate-700">
              <td className="p-4">{user.id}</td>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4 flex gap-4">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <Pencil />
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
        user={selectedUser}
      />
    </motion.div>
  )
}
