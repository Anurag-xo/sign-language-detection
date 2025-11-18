import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../api/client'
import { CameraCapture } from '../../components/CameraCapture'

export const DemoPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-center text-3xl font-bold">Demo</h1>
        <CameraCapture />
      </div>
    </QueryClientProvider>
  )
}
