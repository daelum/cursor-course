import { useState } from 'react'

export function LessonImage({ src, alt, caption }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  if (hasError) {
    return (
      <div className="my-6 p-8 bg-dark-800 rounded-xl border border-dark-600 text-center">
        <div className="text-4xl mb-2">🖼️</div>
        <p className="text-slate-400 text-sm">Image coming soon</p>
        {caption && <p className="text-slate-500 text-xs mt-1">{caption}</p>}
      </div>
    )
  }

  return (
    <>
      <figure className="my-6">
        <div 
          className={`relative overflow-hidden rounded-xl border border-dark-600 bg-dark-800 cursor-zoom-in ${
            !isLoaded ? 'animate-pulse' : ''
          }`}
          onClick={() => setIsZoomed(true)}
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={`w-full h-auto transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        </div>
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-slate-400">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox / Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition"
            onClick={() => setIsZoomed(false)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  )
}

