interface ResultCardProps {
  label: string
  confidence: number
}

export const ResultCard = ({ label, confidence }: ResultCardProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-8 w-full max-w-md">
      <h3 className="text-xl font-semibold mb-2">Detection Result:</h3>
      <p className="text-lg">
        <span className="font-medium">Label:</span> {label}
      </p>
      <p className="text-lg">
        <span className="font-medium">Confidence:</span> {(confidence * 100).toFixed(2)}%
      </p>
    </div>
  )
}
