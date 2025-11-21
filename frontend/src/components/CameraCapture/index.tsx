import { useRef, useState, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import { UploadFallback } from '../UploadFallback'
import { PredictionPanel } from './PredictionPanel'
import { InstructionsPanel } from './InstructionsPanel'
import { CameraControls } from './CameraControls'
import { AlertCircle } from 'lucide-react'

import { HISTORY_KEY } from '../../constants'

// Define the structure of a single prediction
interface Prediction {
  hand_sign: string
  finger_gesture: string
}

export const CameraCapture = () => {
  const webcamRef = useRef<Webcam>(null)
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const ws = useRef<WebSocket | null>(null)

  // Load prediction history from local storage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY)
    if (savedHistory) {
      setPredictions(JSON.parse(savedHistory))
    }
  }, [])

  const connectWebSocket = useCallback(() => {
    ws.current = new WebSocket('ws://localhost:8000/ws')

    ws.current.onopen = () => {
      console.log('WebSocket connected')
      setError(null)
      setIsLoading(true)
    }

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.hand_sign || data.finger_gesture) {
        setPredictions((prev) => {
          const newPredictions = [data, ...prev].slice(0, 100) // Keep last 100
          localStorage.setItem(HISTORY_KEY, JSON.stringify(newPredictions))
          return newPredictions
        })
      }
      setIsLoading(false)
    }

    ws.current.onerror = () => {
      setError('WebSocket connection failed. Please try again.')
      setIsLoading(false)
    }

    ws.current.onclose = () => {
      console.log('WebSocket disconnected')
      setIsLoading(false)
    }
  }, [])

  // Capture a frame and send it for prediction
  const captureFrame = useCallback(() => {
    if (ws.current?.readyState !== WebSocket.OPEN || !webcamRef.current) return

    const imageSrc = webcamRef.current.getScreenshot()
    if (imageSrc) {
      ws.current.send(imageSrc)
    }
  }, [])

  // Set up an interval to capture frames when the camera is active
  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isCameraActive) {
      connectWebSocket()
      intervalId = setInterval(captureFrame, 500) // Capture every 500ms
    } else {
      ws.current?.close()
    }
    return () => {
      clearInterval(intervalId)
      ws.current?.close()
    }
  }, [isCameraActive, captureFrame, connectWebSocket])

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive)
  }

  const switchCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'))
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <div className="relative w-full overflow-hidden rounded-lg bg-card shadow-lg aspect-video">
          {isCameraActive ? (
            <Webcam
              ref={webcamRef}
              audio={false}
              mirrored={true}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          ) : (
            <UploadFallback />
          )}
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-destructive/80 text-destructive-foreground">
              <AlertCircle className="h-12 w-12" />
              <p className="mt-4 text-xl">{error}</p>
            </div>
          )}
        </div>
        <CameraControls
          isCameraActive={isCameraActive}
          toggleCamera={toggleCamera}
          switchCamera={switchCamera}
        />
      </div>
      <div className="space-y-8">
        <PredictionPanel
          predictions={predictions}
          isLoading={isLoading}
        />
        <InstructionsPanel />
      </div>
    </div>
  )
}
