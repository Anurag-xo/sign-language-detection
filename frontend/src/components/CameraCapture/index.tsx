import { useRef, useState, useCallback } from 'react'
import { useMutation } from '@tanstack/react-query'
import { predict } from '../../api/client'
import { ResultCard } from '../ResultCard'
import { Camera } from '../Camera'
import { UploadFallback } from '../UploadFallback'

export const CameraCapture = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prediction, setPrediction] = useState<{
    label: string
    confidence: number
  } | null>(null)
  const [isCameraActive, setIsCameraActive] = useState(false)

  const predictMutation = useMutation({
    mutationFn: predict,
    onSuccess: (data) => {
      setPrediction(data)
    },
    onError: (err) => {
      console.error('Prediction error:', err)
      setPrediction(null)
    },
  })

  const handleFrame = useCallback(
    (video: HTMLVideoElement) => {
      if (predictMutation.isPending) return

      if (canvasRef.current) {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        if (context) {
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          context.drawImage(video, 0, 0, canvas.width, canvas.height)
          const imageData = canvas.toDataURL('image/jpeg')
          predictMutation.mutate(imageData)
        }
      }
    },
    [predictMutation],
  )

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive)
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="mb-4 text-2xl font-bold">
        Real-time Sign Language Detection
      </h2>
      <div className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-gray-800 shadow-lg">
        {isCameraActive ? (
          <Camera onFrame={handleFrame} />
        ) : (
          <UploadFallback />
        )}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {predictMutation.isPending && (
          <div className="bg-opacity-75 absolute inset-0 flex items-center justify-center bg-gray-900 text-xl text-white">
            Detecting...
          </div>
        )}
      </div>
      <button
        onClick={toggleCamera}
        className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        {isCameraActive ? 'Stop Camera' : 'Start Camera'}
      </button>
      {prediction && (
        <ResultCard
          label={prediction.label}
          confidence={prediction.confidence}
        />
      )}
      {predictMutation.isError && (
        <p className="mt-4 text-red-500">
          Prediction Error: {predictMutation.error.message}
        </p>
      )}
    </div>
  )
}
