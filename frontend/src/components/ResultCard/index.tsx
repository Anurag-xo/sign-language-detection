interface ResultCardProps {
  label: string
  confidence: number
}

export const ResultCard = ({ label, confidence }: ResultCardProps) => {
  return (
    <div className="mt-8 w-full max-w-md rounded-lg bg-gray-800 p-6 shadow-md">
      <h3 className="mb-2 text-xl font-semibold">Detection Result:</h3>
      <p className="text-lg">
        <span className="font-medium">Label:</span> {label}
      </p>
      <p className="text-lg">
        <span className="font-medium">Confidence:</span>{' '}
        {(confidence * 100).toFixed(2)}%
      </p>
    </div>
  )
}
