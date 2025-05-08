"use client"

import { useState, useEffect, useRef } from "react"

interface VideoPlayerProps {
  src: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  showControls?: boolean
}

export function VideoPlayer({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  showControls = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      if (autoPlay) {
        video.play().catch(() => {
          // Autoplay foi bloqueado pelo navegador
          setIsPlaying(false)
        })
      }
    }

    video.addEventListener("canplay", handleCanPlay)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [autoPlay])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play().catch(() => {
        // Play foi bloqueado pelo navegador
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }

  return (
    <div className={`relative ${className}`} onClick={showControls ? togglePlay : undefined}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover ${isLoaded ? "opacity-100" : "opacity-0"}`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        controls={controls}
      />

      {showControls && (
        <button
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
        >
          <div className="bg-white/80 rounded-full p-3">
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </div>
        </button>
      )}
    </div>
  )
}
