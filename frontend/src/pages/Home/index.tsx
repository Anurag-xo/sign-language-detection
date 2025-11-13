import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-grow">
      <h1 className="text-5xl font-bold mb-4">
        Real-time Sign Language Detection
      </h1>
      <p className="text-xl mb-8">
        Use your camera to detect sign language gestures in real-time.
      </p>
      <Link
        to="/demo"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Demo
      </Link>
    </div>
  )
}
