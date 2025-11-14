import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-5xl font-bold">
        Real-time Sign Language Detection
      </h1>
      <p className="mb-8 text-xl">
        Use your camera to detect sign language gestures in real-time.
      </p>
      <Link
        to="/demo"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Start Demo
      </Link>
    </div>
  )
}
