import { NavLink } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="text-2xl font-bold text-primary">
          SignLang
        </NavLink>
        <nav className="hidden items-center space-x-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/demo"
            className={({ isActive }) =>
              `text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            Demo
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            History
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `text-muted-foreground transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            Settings
          </NavLink>
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 transition-colors hover:bg-accent"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-primary" />
            ) : (
              <Moon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
