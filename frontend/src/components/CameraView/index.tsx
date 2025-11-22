import Webcam from 'react-webcam'
import { AlertCircle } from 'lucide-react'
import { UploadFallback } from '../UploadFallback'

interface CameraViewProps {
  isCameraActive: boolean
  webcamRef: React.RefObject<Webcam>
  facingMode: 'user' | 'environment'
  error: string | null
  wsError: Event | null
}

export const CameraView = ({
  isCameraActive,
  webcamRef,
  facingMode,
  error,
  wsError,
}: CameraViewProps) => {
  return (
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
      {wsError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-destructive/80 text-destructive-foreground">
          <AlertCircle className="h-12 w-12" />
          <p className="mt-4 text-xl">
            WebSocket connection failed. Please try again.
          </p>
        </div>
      )}
    </div>
  )
}
