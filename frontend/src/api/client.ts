import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export async function predict(image: string): Promise<{ label: string; confidence: number }> {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ image }),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}
