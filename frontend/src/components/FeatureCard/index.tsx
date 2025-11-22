import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="transform rounded-lg bg-card p-8 text-center shadow-lg transition-transform hover:-translate-y-2"
      variants={featureVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
