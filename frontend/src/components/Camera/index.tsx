import { useRef, useEffect } from 'react';

interface CameraProps {
  onFrame: (video: HTMLVideoElement) => void;
}

export const Camera = ({ onFrame }: CameraProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onFrameRef = useRef(onFrame);
  onFrameRef.current = onFrame;

  useEffect(() => {
    let animationFrameId: number;
    let stream: MediaStream;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: 'user',
          },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          tick();
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    const tick = () => {
      if (videoRef.current && videoRef.current.readyState >= 2) {
        onFrameRef.current(videoRef.current);
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    startCamera();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-auto w-full rounded-lg"
      muted
      playsInline
    />
  );
};
