import { motion, AnimatePresence } from 'framer-motion'
import { BarChart2 } from 'lucide-react'

interface Prediction {
  hand_sign: string
  finger_gesture: string
}

interface PredictionPanelProps {
  predictions: Prediction[]
  isLoading: boolean
}

export const PredictionPanel = ({
  predictions,
  isLoading,
}: PredictionPanelProps) => {
  const latestPrediction = predictions[0]

  return (
    <div className="rounded-lg bg-card p-6 shadow-lg">
      <h3 className="mb-4 flex items-center text-2xl font-bold">
        <BarChart2 className="mr-2 h-6 w-6 text-primary" />
        Prediction
      </h3>
      <div className="text-center">
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-24 items-center justify-center"
            >
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </motion.div>
          )}
          {!isLoading && latestPrediction && (
            <motion.div
              key={`${latestPrediction.hand_sign}-${latestPrediction.finger_gesture}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-24"
            >
              <p className="text-4xl font-bold text-primary">
                {latestPrediction.hand_sign || '-'}
              </p>
              <p className="mt-2 text-lg">
                {latestPrediction.finger_gesture || '-'}
              </p>
            </motion.div>
          )}
          {!isLoading && !latestPrediction && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-24 flex-col items-center justify-center"
            >
              <p className="text-5xl font-bold text-muted-foreground">...</p>
              <p className="text-muted-foreground">No prediction yet</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-6">
        <h4 className="mb-2 text-lg font-bold">History</h4>
        <ul className="h-48 space-y-2 overflow-y-auto rounded-md bg-secondary p-2">
          <AnimatePresence>
            {predictions.length > 0 ? (
              predictions.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  layout
                  className="flex items-center justify-between rounded-md bg-card p-2 shadow-sm"
                >
                  <span className="font-bold">{p.hand_sign || '-'}</span>
                  <span>{p.finger_gesture || '-'}</span>
                </motion.li>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 text-center text-muted-foreground"
              >
                History is empty.
              </motion.p>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}
