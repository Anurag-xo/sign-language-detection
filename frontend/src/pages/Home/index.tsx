import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="flex flex-grow flex-col">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold">
            Real-time Sign Language Detection
          </h1>
          <p className="mb-8 text-xl">
            Use your camera to detect sign language gestures in real-time.
          </p>
          <Link
            to="/demo"
            className="rounded bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Start Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-4xl font-bold">Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-800 p-8 text-center shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Real-time Detection</h3>
              <p>
                Instantly detect and translate sign language gestures using your
                webcam.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-8 text-center shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">High Accuracy</h3>
              <p>
                Powered by advanced machine learning models for precise
                detection.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-8 text-center shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Easy to Use</h3>
              <p>
                A simple and intuitive interface for a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
