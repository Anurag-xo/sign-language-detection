import { Github, Twitter } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex items-center justify-between p-4 text-center">
        <p className="text-muted-foreground">
          &copy; 2025 SignLang. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
