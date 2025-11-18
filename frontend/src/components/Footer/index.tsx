export const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between text-center">
        <p>&copy; 2025 SignLang. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
