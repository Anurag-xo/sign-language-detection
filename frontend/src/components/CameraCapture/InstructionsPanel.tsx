import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'

export const InstructionsPanel = () => {
  const instructionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  }

  const instructions = [
    'Click "Start Camera" to begin.',
    'Position your hand in the frame.',
    'The AI will detect the sign in real-time.',
    'The prediction will appear on the right.',
  ]

  return (
    <motion.div
      className="rounded-lg bg-card p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-4 flex items-center text-2xl font-bold">
        <Lightbulb className="mr-2 h-6 w-6 text-primary" />
        Instructions
      </h3>
      <ul className="space-y-2 text-muted-foreground">
        {instructions.map((text, i) => (
          <motion.li
            key={i}
            custom={i}
            variants={instructionVariants}
            initial="hidden"
            animate="visible"
          >
            {i + 1}. {text}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
