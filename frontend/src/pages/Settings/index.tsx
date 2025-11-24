import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { Sun, Moon, Trash2 } from 'lucide-react'

import { HISTORY_KEY } from '../../constants'

export const SettingsPage = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear the history?')) {
      localStorage.removeItem(HISTORY_KEY)
      alert('Prediction history cleared!')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>
      <motion.div
        className="space-y-8 rounded-lg bg-card p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Theme</h3>
            <p className="text-muted-foreground">
              Switch between light and dark mode.
            </p>
          </div>
          <motion.button
            onClick={toggleTheme}
            className="flex w-36 items-center justify-center rounded-full bg-secondary px-4 py-2 font-bold text-secondary-foreground hover:bg-secondary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? (
              <Sun className="mr-2 h-6 w-6" />
            ) : (
              <Moon className="mr-2 h-6 w-6" />
            )}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </motion.button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Prediction History</h3>
            <p className="text-muted-foreground">
              Clear all saved predictions.
            </p>
          </div>
          <motion.button
            onClick={clearHistory}
            className="flex items-center rounded-full bg-destructive px-4 py-2 font-bold text-destructive-foreground hover:bg-destructive/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Trash2 className="mr-2 h-5 w-5" />
            Clear History
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

