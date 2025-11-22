import { Link } from 'react-router-dom'
import { Camera, CheckCircle, Zap, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { FeatureCard } from '../../components/FeatureCard'
import { HowItWorksStep } from '../../components/HowItWorksStep'

export const HomePage = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex flex-grow flex-col">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <motion.div
          className="container mx-auto px-4"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl"
            variants={heroVariants}
          >
            Real-time Sign Language Detection
          </motion.h1>
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            variants={heroVariants}
          >
            Break communication barriers with our cutting-edge AI. Use your
            camera to translate sign language gestures into text, instantly.
          </motion.p>
          <motion.div variants={heroVariants}>
            <Link
              to="/demo"
              className="inline-block transform rounded-full bg-primary px-8 py-3 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Start Demo
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={Zap}
              title="Real-time Detection"
              description="Instantly detect and translate sign language gestures using your webcam."
            />
            <FeatureCard
              icon={CheckCircle}
              title="High Accuracy"
              description="Powered by advanced machine learning models for precise detection."
            />
            <FeatureCard
              icon={Cpu}
              title="Easy to Use"
              description="A simple and intuitive interface for a seamless user experience."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">How It Works</h2>
          <div className="mx-auto max-w-2xl">
            <HowItWorksStep
              icon={Camera}
              title="Allow Camera Access"
              description="Grant access to your webcam to start detecting."
              stepNumber={1}
            />
            <HowItWorksStep
              icon={Zap}
              title="Start Signing"
              description="Our AI will process the video and provide instant results."
              stepNumber={2}
            />
            <HowItWorksStep
              icon={CheckCircle}
              title="Get Results"
              description="View the translated text in real-time."
              stepNumber={3}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

