import { Link } from 'react-router-dom'
import {
  Camera,
  CheckCircle,
  Zap,
  Cpu,
  UploadCloud,
  Server,
} from 'lucide-react'

export function HomePage() {
  return (
    <div className="flex flex-grow flex-col bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl">
            Real-time Sign Language Detection
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Break communication barriers with our cutting-edge AI. Use your
            camera to translate sign language gestures into text, instantly.
          </p>
          <Link
            to="/demo"
            className="inline-block transform rounded-full bg-blue-600 px-8 py-3 text-lg font-bold text-white transition-transform hover:scale-105 hover:bg-blue-700"
          >
            Start Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="transform rounded-lg bg-gray-800 p-8 text-center shadow-lg transition-transform hover:-translate-y-2">
              <Zap className="mx-auto mb-4 h-12 w-12 text-blue-400" />
              <h3 className="mb-4 text-2xl font-bold">Real-time Detection</h3>
              <p className="text-gray-400">
                Instantly detect and translate sign language gestures using your
                webcam.
              </p>
            </div>
            <div className="transform rounded-lg bg-gray-800 p-8 text-center shadow-lg transition-transform hover:-translate-y-2">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-400" />
              <h3 className="mb-4 text-2xl font-bold">High Accuracy</h3>
              <p className="text-gray-400">
                Powered by advanced machine learning models for precise
                detection.
              </p>
            </div>
            <div className="transform rounded-lg bg-gray-800 p-8 text-center shadow-lg transition-transform hover:-translate-y-2">
              <Cpu className="mx-auto mb-4 h-12 w-12 text-purple-400" />
              <h3 className="mb-4 text-2xl font-bold">Easy to Use</h3>
              <p className="text-gray-400">
                A simple and intuitive interface for a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">How It Works</h2>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="flex items-center gap-4">
              <Camera className="h-10 w-10 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">1. Allow Camera Access</h3>
                <p className="text-gray-400">
                  Grant access to your webcam to start detecting.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <UploadCloud className="h-10 w-10 text-green-400" />
              <div>
                <h3 className="text-xl font-bold">2. Upload Fallback</h3>
                <p className="text-gray-400">
                  No webcam? No problem. Upload a video instead.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Server className="h-10 w-10 text-purple-400" />
              <div>
                <h3 className="text-xl font-bold">3. Get Real-time Results</h3>
                <p className="text-gray-400">
                  Our AI will process the video and provide instant results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
