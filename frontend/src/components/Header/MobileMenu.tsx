import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md md:hidden"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="text-2xl font-bold text-primary">
          SignLang
        </NavLink>
        <button
          onClick={onClose}
          className="rounded-full p-2 transition-colors hover:bg-accent"
        >
          <X className="h-6 w-6 text-primary" />
        </button>
      </div>
      <nav className="mt-8 flex flex-col items-center space-y-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-2xl text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
          }
          onClick={onClose}
        >
          Home
        </NavLink>
        <NavLink
          to="/demo"
          className={({ isActive }) =>
            `text-2xl text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
          }
          onClick={onClose}
        >
          Demo
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `text-2xl text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
          }
          onClick={onClose}
        >
          History
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `text-2xl text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
          }
          onClick={onClose}
        >
          Settings
        </NavLink>
      </nav>
    </motion.div>
  )
}
