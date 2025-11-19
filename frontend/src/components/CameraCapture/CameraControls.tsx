import { Camera, CameraOff, SwitchCamera } from 'lucide-react'

interface CameraControlsProps {
  isCameraActive: boolean
  toggleCamera: () => void
}

export const CameraControls = ({
  isCameraActive,
  toggleCamera,
}: CameraControlsProps) => {
  return (
    <div className="mt-4 flex justify-center space-x-4">
      <button
        onClick={toggleCamera}
        className="flex items-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90"
      >
        {isCameraActive ? (
          <CameraOff className="mr-2 h-6 w-6" />
        ) : (
          <Camera className="mr-2 h-6 w-6" />
        )}
        {isCameraActive ? 'Stop Camera' : 'Start Camera'}
      </button>
      <button className="flex items-center rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground hover:bg-secondary/90">
        <SwitchCamera className="mr-2 h-6 w-6" />
        Switch Camera
      </button>
    </div>
  )
}
