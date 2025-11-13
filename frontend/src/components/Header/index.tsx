import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Sign Language Detection
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link to="/demo">Demo</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
