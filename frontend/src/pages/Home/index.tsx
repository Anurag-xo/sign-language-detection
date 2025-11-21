import { Link } from 'react-router-dom'
import { Camera, CheckCircle, Zap, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

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
            <motion.div
              className="transform rounded-lg bg-card p-8 text-center shadow-lg transition-transform hover:-translate-y-2"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Zap className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-4 text-2xl font-bold">Real-time Detection</h3>
              <p className="text-muted-foreground">
                Instantly detect and translate sign language gestures using your
                webcam.
              </p>
            </motion.div>
            <motion.div
              className="transform rounded-lg bg-card p-8 text-center shadow-lg transition-transform hover:-translate-y-2"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-4 text-2xl font-bold">High Accuracy</h3>
              <p className="text-muted-foreground">
                Powered by advanced machine learning models for precise
                detection.
              </p>
            </motion.div>
            <motion.div
              className="transform rounded-lg bg-card p-8 text-center shadow-lg transition-transform hover:-translate-y-2"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Cpu className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-4 text-2xl font-bold">Easy to Use</h3>
              <p className="text-muted-foreground">
                A simple and intuitive interface for a seamless user experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">How It Works</h2>
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Camera className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">1. Allow Camera Access</h3>
                <p className="text-muted-foreground">
                  Grant access to your webcam to start detecting.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">2. Start Signing</h3>
                <p className="text-muted-foreground">
                  Our AI will process the video and provide instant results.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">3. Get Results</h3>
                <p className="text-muted-foreground">
                  View the translated text in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

