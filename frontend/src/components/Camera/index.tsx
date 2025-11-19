import { useRef, useEffect } from 'react'

interface CameraProps {
  onFrame: (video: HTMLVideoElement) => void
  isActive: boolean
}

export const Camera = ({ onFrame, isActive }: CameraProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const onFrameRef = useRef(onFrame)
  onFrameRef.current = onFrame

  useEffect(() => {
    let animationFrameId: number

    const tick = () => {
      if (videoRef.current && videoRef.current.readyState >= 2) {
        onFrameRef.current(videoRef.current)
      }
      animationFrameId = requestAnimationFrame(tick)
    }

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: 'user',
          },
        })
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play()
          tick()
        }
      } catch (err) {
        console.error('Error accessing camera:', err)
      }
    }

    const stopCamera = () => {
      cancelAnimationFrame(animationFrameId)
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
        streamRef.current = null
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null
      }
    }

    if (isActive) {
      startCamera()
    } else {
      stopCamera()
    }

    return () => {
      stopCamera()
    }
  }, [isActive])

  return (
    <video
      ref={videoRef}
      className="h-auto w-full rounded-lg"
      muted
      playsInline
      autoPlay
    />
  )
}
