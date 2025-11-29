import { motion } from 'framer-motion'
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
  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="flex items-center space-x-4"
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <span className="text-2xl font-bold">{stepNumber}</span>
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}
