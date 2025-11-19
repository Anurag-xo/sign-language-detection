import { useRef, useState, useCallback, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { predict } from '../../api/client'
import { Camera } from '../Camera'
import { UploadFallback } from '../UploadFallback'
import { PredictionPanel } from './PredictionPanel'
import { InstructionsPanel } from './InstructionsPanel'
import { CameraControls } from './CameraControls'

const HISTORY_KEY = 'signlang-history'

export const CameraCapture = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [predictions, setPredictions] = useState<
    { label: string; confidence: number }[]
  >([])
  const [isCameraActive, setIsCameraActive] = useState(false)

  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY)
    if (savedHistory) {
      setPredictions(JSON.parse(savedHistory))
    }
  }, [])

  const predictMutation = useMutation({
    mutationFn: predict,
    onSuccess: (data) => {
      setPredictions((prev) => {
        const newPredictions = [data, ...prev].slice(0, 100)
        localStorage.setItem(HISTORY_KEY, JSON.stringify(newPredictions))
        return newPredictions
      })
    },
    onError: (err) => {
      console.error('Prediction error:', err)
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
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <div className="relative w-full overflow-hidden rounded-lg bg-card shadow-lg">
          {isCameraActive ? (
            <Camera onFrame={handleFrame} isActive={isCameraActive} />
          ) : (
            <UploadFallback />
          )}
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          {predictMutation.isPending && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 text-xl">
              Detecting...
            </div>
          )}
        </div>
        <CameraControls
          isCameraActive={isCameraActive}
          toggleCamera={toggleCamera}
        />
      </div>
      <div className="space-y-8">
        <PredictionPanel predictions={predictions} />
        <InstructionsPanel />
      </div>
    </div>
  )
}
