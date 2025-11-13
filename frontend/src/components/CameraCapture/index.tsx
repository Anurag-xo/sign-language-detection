import { useRef, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { predict } from '../../api/client'
import { ResultCard } from '../ResultCard'

export const CameraCapture = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prediction, setPrediction] = useState<{ label: string; confidence: number } | null>(null)
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
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play()
        }
      } catch (err) {
        console.error('Error accessing camera:', err)
        setError('Failed to access camera. Please ensure it is connected and permissions are granted.')
      }
    }

    startCamera()

    let intervalId: number

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
    intervalId = setInterval(sendFrameForPrediction, 100)

    return () => {
      clearInterval(intervalId)
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Real-time Sign Language Detection</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="relative w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <video ref={videoRef} className="w-full h-auto rounded-lg" muted />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {predictMutation.isPending && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white text-xl">
            Detecting...
          </div>
        )}
      </div>
      {prediction && (
        <ResultCard label={prediction.label} confidence={prediction.confidence} />
      )}
      {predictMutation.isError && (
        <p className="text-red-500 mt-4">Prediction Error: {predictMutation.error.message}</p>
      )}
    </div>
  )
}
