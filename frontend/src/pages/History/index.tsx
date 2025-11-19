import { useState, useEffect } from 'react'
import { Trash2 } from 'lucide-react'

const HISTORY_KEY = 'signlang-history'

interface Prediction {
  label: string
  confidence: number
}

export const HistoryPage = () => {
  const [history, setHistory] = useState<Prediction[]>([])

  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY)
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const clearHistory = () => {
    localStorage.removeItem(HISTORY_KEY)
    setHistory([])
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-3xl font-bold">Prediction History</h1>
        <button
          onClick={clearHistory}
          className="flex items-center rounded-full bg-destructive px-4 py-2 font-bold text-destructive-foreground hover:bg-destructive/90"
        >
          <Trash2 className="mr-2 h-5 w-5" />
          Clear History
        </button>
      </div>
      <div className="mt-8 rounded-lg bg-card p-6 shadow-lg">
        {history.length > 0 ? (
          <ul className="space-y-4">
            {history.map((p, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-md bg-secondary p-4"
              >
                <span className="text-lg font-bold">{p.label}</span>
                <span className="text-muted-foreground">
                  {(p.confidence * 100).toFixed(2)}%
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted-foreground">
            No history yet. Go to the demo page to make some predictions.
          </p>
        )}
      </div>
    </div>
  )
}
