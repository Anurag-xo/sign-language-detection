import { Lightbulb } from 'lucide-react'

export const InstructionsPanel = () => {
  return (
    <div className="rounded-lg bg-card p-6 shadow-lg">
      <h3 className="mb-4 flex items-center text-2xl font-bold">
        <Lightbulb className="mr-2 h-6 w-6 text-primary" />
        Instructions
      </h3>
      <ul className="space-y-2 text-muted-foreground">
        <li>1. Click "Start Camera" to begin.</li>
        <li>2. Position your hand in the frame.</li>
        <li>3. The AI will detect the sign in real-time.</li>
        <li>4. The prediction will appear on the right.</li>
      </ul>
    </div>
  )
}
