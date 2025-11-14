import { useRef, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { predict } from '../../api/client'
import { ResultCard } from '../ResultCard'

export const CameraCapture = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prediction, setPrediction] = useState<{
    label: string
    confidence: number
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const predictMutation = useMutation({
    mutationFn: predict,
    onSuccess: (data) => {
      setPrediction(data)
      setError(null)
    },
    onError: (err) => {
      setError(err.message)
      setPrediction(null)
    },
  })

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play()
        }
      } catch (err) {
        console.error('Error accessing camera:', err)
        setError(
          'Failed to access camera. Please ensure it is connected and permissions are granted.',
        )
      }
    }

    startCamera()

    const sendFrameForPrediction = () => {
      if (videoRef.current && canvasRef.current) {
        const video = videoRef.current
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
    }

    // Send a frame for prediction every 100ms (10 FPS)
    const intervalId = setInterval(sendFrameForPrediction, 100)

    const videoElement = videoRef.current

    return () => {
      clearInterval(intervalId)
      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [predictMutation])

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="mb-4 text-2xl font-bold">
        Real-time Sign Language Detection
      </h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-gray-800 shadow-lg">
        <video ref={videoRef} className="h-auto w-full rounded-lg" muted />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {predictMutation.isPending && (
          <div className="bg-opacity-75 absolute inset-0 flex items-center justify-center bg-gray-900 text-xl text-white">
            Detecting...
          </div>
        )}
      </div>
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
