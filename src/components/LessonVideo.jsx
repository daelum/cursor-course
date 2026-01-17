import { useState, useRef } from 'react'

export function LessonVideo({ src, poster, caption }) {
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (hasError) {
    return (
      <div className="my-6 p-8 bg-dark-800 rounded-xl border border-dark-600 text-center">
        <div className="text-4xl mb-2">🎬</div>
        <p className="text-slate-400 text-sm">Video coming soon</p>
        {caption && <p className="text-slate-500 text-xs mt-1">{caption}</p>}
      </div>
    )
  }

  return (
    <figure className="my-6">
      <div className="relative overflow-hidden rounded-xl border border-dark-600 bg-dark-900">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          playsInline
          className="w-full h-auto"
          onError={() => setHasError(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

