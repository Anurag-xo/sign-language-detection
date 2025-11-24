import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Sun, Moon, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <NavLink to="/" className="text-2xl font-bold text-primary">
            SignLang
          </NavLink>
          <nav className="hidden items-center space-x-6 md:flex">
            <motion.div whileHover={{ scale: 1.1 }}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
                }
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  `text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
                }
              >
                Demo
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  `text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
                }
              >
                History
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
                }
              >
                Settings
              </NavLink>
            </motion.div>
          </nav>
          <div className="flex items-center">
            <motion.button
              onClick={toggleTheme}
              className="rounded-full p-2 transition-colors hover:bg-accent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6 text-primary" />
              ) : (
                <Moon className="h-6 w-6 text-primary" />
              )}
            </motion.button>
            <button
              onClick={toggleMenu}
              className="ml-4 rounded-full p-2 transition-colors hover:bg-accent md:hidden"
            >
              <Menu className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  )
}
