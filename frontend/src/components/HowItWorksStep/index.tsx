import type { LucideIcon } from 'lucide-react'

interface HowItWorksStepProps {
  icon: LucideIcon
  title: string
  description: string
  stepNumber: number
}

export const HowItWorksStep = ({
  title,
  description,
  stepNumber,
}: HowItWorksStepProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <span className="text-2xl font-bold">{stepNumber}</span>
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
