import { LucideIcon } from 'lucide-react'

interface HowItWorksStepProps {
  icon: LucideIcon
  title: string
  description: string
  stepNumber: number
}

export const HowItWorksStep = ({
  icon: Icon,
  title,
  description,
  stepNumber,
}: HowItWorksStepProps) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold">
          {stepNumber}. {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
