import { CameraCapture } from '../../components/CameraCapture'

export const DemoPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Sign Language Detection Demo</h1>
        <p className="text-lg text-muted-foreground">
          Use your webcam to translate sign language gestures into text in
          real-time.
        </p>
      </div>
      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
        <CameraCapture />
      </div>
    </div>
  )
}
