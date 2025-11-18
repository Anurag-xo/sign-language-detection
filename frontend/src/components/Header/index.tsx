import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Hand } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/demo', text: 'Demo' },
    { to: '/history', text: 'History' },
    { to: '/settings', text: 'Settings' },
  ]

  return (
    <header className="bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <Hand className="text-blue-400" />
          <span>SignLang</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-700'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-colors w-full text-center ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-700'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
