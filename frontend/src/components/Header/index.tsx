import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          SignLang
        </Link>
        <nav className="hidden md:flex">
          <Link to="/" className="rounded px-4 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/demo" className="rounded px-4 py-2 hover:bg-gray-700">
            Demo
          </Link>
          <Link to="/history" className="rounded px-4 py-2 hover:bg-gray-700">
            History
          </Link>
          <Link to="/settings" className="rounded px-4 py-2 hover:bg-gray-700">
            Settings
          </Link>
        </nav>
      </div>
    </header>
  )
}
