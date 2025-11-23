import { useRef, useState, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import { PredictionPanel } from './PredictionPanel'
import { InstructionsPanel } from './InstructionsPanel'
import { CameraControls } from './CameraControls'
import { useWebSocket } from '../../hooks/useWebSocket'
import { HISTORY_KEY, WEBSOCKET_URL } from '../../constants'
import { CameraView } from '../CameraView'
import type { Prediction } from '../../types'

export const CameraCapture = () => {
  const webcamRef = useRef<Webcam>(null)
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Load prediction history from local storage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY)
    if (savedHistory) {
      setPredictions(JSON.parse(savedHistory))
    }
  }, [])

  const {
    isConnected,
    error: wsError,
    connect,
    disconnect,
    sendMessage,
  } = useWebSocket(WEBSOCKET_URL, {
    onOpen: () => {
      console.log('WebSocket connected')
      setError(null)
      setIsLoading(true)
    },
    onMessage: (event) => {
      const data = JSON.parse(event.data)
      if (data.hand_sign || data.finger_gesture) {
        setPredictions((prev) => {
          const newPredictions = [data, ...prev].slice(0, 100) // Keep last 100
          localStorage.setItem(HISTORY_KEY, JSON.stringify(newPredictions))
          return newPredictions
        })
      }
      setIsLoading(false)
    },
    onError: () => {
      setError('WebSocket connection failed. Please try again.')
      setIsLoading(false)
    },
    onClose: () => {
      console.log('WebSocket disconnected')
      setIsLoading(false)
    },
  })

  // Capture a frame and send it for prediction
  const captureFrame = useCallback(() => {
    if (!isConnected || !webcamRef.current) return

    const imageSrc = webcamRef.current.getScreenshot()
    if (imageSrc) {
      sendMessage(imageSrc)
    }
  }, [isConnected, sendMessage])

  // Set up an interval to capture frames when the camera is active
  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isCameraActive) {
      connect()
      intervalId = setInterval(captureFrame, 500) // Capture every 500ms
    } else {
      disconnect()
    }
    return () => {
      clearInterval(intervalId)
      disconnect()
    }
  }, [isCameraActive, captureFrame, connect, disconnect])

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive)
  }

  const switchCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'))
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <CameraView
          isCameraActive={isCameraActive}
          webcamRef={webcamRef as React.RefObject<Webcam>}
          facingMode={facingMode}
          error={error}
          wsError={wsError}
        />
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
