import { useRef, useState, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import { useMutation } from '@tanstack/react-query'
import { predictSign } from '../../api/client'
import { UploadFallback } from '../UploadFallback'
import { PredictionPanel } from './PredictionPanel'
import { InstructionsPanel } from './InstructionsPanel'
import { CameraControls } from './CameraControls'
import { AlertCircle } from 'lucide-react'

import { HISTORY_KEY } from '../../constants'

// Define the structure of a single prediction
interface Prediction {
  label: string
  confidence: number
}

export const CameraCapture = () => {
  const webcamRef = useRef<Webcam>(null)
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user')

  // Load prediction history from local storage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY)
    if (savedHistory) {
      setPredictions(JSON.parse(savedHistory))
    }
  }, [])

  const predictMutation = useMutation({
    mutationFn: predictSign,
    onSuccess: (data: Prediction[]) => {
      // Add new prediction to the beginning of the array if it's not empty
      if (data && data.length > 0) {
        setPredictions((prev) => {
          const newPredictions = [...data, ...prev].slice(0, 100) // Keep last 100
          localStorage.setItem(HISTORY_KEY, JSON.stringify(newPredictions))
          return newPredictions
        })
      }
    },
    onError: (err) => {
      console.error('Prediction error:', err)
    },
  })

  // Capture a frame and send it for prediction
  const captureFrame = useCallback(() => {
    if (predictMutation.isPending || !webcamRef.current) return

    const imageSrc = webcamRef.current.getScreenshot()
    if (imageSrc) {
      predictMutation.mutate(imageSrc)
    }
  }, [predictMutation])

  // Set up an interval to capture frames when the camera is active
  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isCameraActive) {
      intervalId = setInterval(captureFrame, 500) // Capture every 500ms
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [isCameraActive, captureFrame])

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
          {predictMutation.isError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-destructive/80 text-destructive-foreground">
              <AlertCircle className="h-12 w-12" />
              <p className="mt-4 text-xl">
                Prediction failed. Please try again.
              </p>
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
          isLoading={predictMutation.isPending}
        />
        <InstructionsPanel />
      </div>
    </div>
  )
}
