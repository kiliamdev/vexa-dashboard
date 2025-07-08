'use client'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface EditModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (id: number, name: string, email: string) => void
  user: { id: number; name: string; email: string } | null
}

export default function EditModal({ isOpen, onClose, onSave, user }: EditModalProps) {
  if (!user) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-800 text-white">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Input
            className="bg-slate-700 text-white"
            value={user.name}
            onChange={e => onSave(user.id, e.target.value, user.email)}
            placeholder="Name"
          />
          <Input
            className="bg-slate-700 text-white"
            value={user.email}
            onChange={e => onSave(user.id, user.name, e.target.value)}
            placeholder="Email"
          />
        </div>
        <DialogFooter className="mt-4">
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
