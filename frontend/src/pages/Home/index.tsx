import { Camera, CheckCircle, Zap, Cpu } from 'lucide-react'
import { FeatureCard } from '../../components/FeatureCard'
import { HowItWorksStep } from '../../components/HowItWorksStep'
import { Hero } from '../../components/Hero'

export const HomePage = () => {
  return (
    <div className="flex flex-grow flex-col">
      <Hero />
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

