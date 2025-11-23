import { useState, useRef, useEffect, useCallback } from 'react'

interface WebSocketOptions {
  onOpen?: () => void
  onMessage?: (event: MessageEvent) => void
  onError?: (event: Event) => void
  onClose?: () => void
}

export const useWebSocket = (url: string, options: WebSocketOptions = {}) => {
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState<Event | null>(null)
  const ws = useRef<WebSocket | null>(null)

  const { onOpen, onMessage, onError, onClose } = options

  const connect = useCallback(() => {
    ws.current = new WebSocket(url)

    ws.current.onopen = () => {
      setIsConnected(true)
      onOpen?.()
    }

    ws.current.onmessage = (event) => {
      onMessage?.(event)
    }

    ws.current.onerror = (event) => {
      setError(event)
      onError?.(event)
    }

    ws.current.onclose = () => {
      setIsConnected(false)
      onClose?.()
    }
  }, [url, onOpen, onMessage, onError, onClose])

  const disconnect = useCallback(() => {
    ws.current?.close()
  }, [])

  const sendMessage = (data: string | ArrayBufferLike | Blob | ArrayBufferView) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(data)
    }
  }

  useEffect(() => {
    return () => {
      ws.current?.close()
    }
  }, [])

  return {
    isConnected,
    error,
    connect,
    disconnect,
    sendMessage,
  }
}
