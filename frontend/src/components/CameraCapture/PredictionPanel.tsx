interface Prediction {
  label: string
  confidence: number
}

interface PredictionPanelProps {
  predictions: Prediction[]
}

export const PredictionPanel = ({ predictions }: PredictionPanelProps) => {
  const latestPrediction = predictions[0]

  return (
    <div className="rounded-lg bg-card p-6 shadow-lg">
      <h3 className="mb-4 text-2xl font-bold">Prediction</h3>
      {latestPrediction ? (
        <div className="text-center">
          <p className="text-5xl font-bold text-primary">
            {latestPrediction.label}
          </p>
          <p className="text-muted-foreground">
            Confidence: {(latestPrediction.confidence * 100).toFixed(2)}%
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-5xl font-bold text-muted-foreground">...</p>
          <p className="text-muted-foreground">No prediction yet</p>
        </div>
      )}
      <div className="mt-6">
        <h4 className="mb-2 text-lg font-bold">History</h4>
        <ul className="space-y-2">
          {predictions.slice(1).map((p, i) => (
            <li
              key={i}
              className="flex justify-between rounded-md bg-secondary p-2"
            >
              <span>{p.label}</span>
              <span>{(p.confidence * 100).toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
