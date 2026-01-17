import { useRef } from 'react'

export function Certificate({ name, completedAt, onClose }) {
  const certificateRef = useRef(null)
  
  const formattedDate = completedAt 
    ? new Date(completedAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })

  const certificateId = `CC-${Date.now().toString(36).toUpperCase()}`

  const handleDownload = async () => {
    // Create a canvas from the certificate
    const certificate = certificateRef.current
    if (!certificate) return

    try {
      // Use html2canvas if available, otherwise create a simple download
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(certificate, {
        backgroundColor: '#0a0a0f',
        scale: 2,
      })
      
      const link = document.createElement('a')
      link.download = `cursor-course-certificate-${name.replace(/\s+/g, '-').toLowerCase()}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (e) {
      // Fallback: just alert
      alert('To save your certificate, take a screenshot of this page!')
    }
  }

  const handleShare = (platform) => {
    const text = `I just completed the "Build Anything with AI" course! 🎉 Learn to create websites and apps without coding: `
    const url = 'https://cursor-course.vercel.app' // Update with actual URL
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }
    
    window.open(urls[platform], '_blank', 'width=600,height=400')
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-3xl w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Certificate */}
        <div 
          ref={certificateRef}
          className="bg-dark-900 rounded-2xl border-4 border-double border-cyan-500/30 p-8 md:p-12 mb-6"
        >
          {/* Decorative corners */}
          <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-cyan-500/40 rounded-tl-lg" />
          <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-cyan-500/40 rounded-tr-lg" />
          <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-cyan-500/40 rounded-bl-lg" />
          <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-cyan-500/40 rounded-br-lg" />

          <div className="text-center relative">
            {/* Header */}
            <div className="mb-8">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-2">Certificate of Completion</p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
            </div>

            {/* Congratulations */}
            <p className="text-slate-400 text-lg mb-2">This certifies that</p>
            
            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              {name || 'Student'}
            </h1>

            <p className="text-slate-400 text-lg mb-6">has successfully completed</p>

            {/* Course name */}
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              Build Anything with AI
            </h2>

            {/* Course description */}
            <p className="text-slate-500 max-w-lg mx-auto mb-8">
              A comprehensive course on using Cursor and AI to build websites and applications without coding
            </p>

            {/* Completion badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-dark-800 border border-dark-600 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-medium">Course Completed</p>
                <p className="text-slate-500 text-sm">{formattedDate}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-center items-center gap-8 text-sm text-slate-500">
              <div>
                <p className="text-slate-400 mb-1">Certificate ID</p>
                <p className="font-mono">{certificateId}</p>
              </div>
              <div className="w-px h-8 bg-dark-600" />
              <div>
                <p className="text-slate-400 mb-1">Issued By</p>
                <p className="font-medium text-white">Cursor Course</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Certificate
          </button>
          
          <button
            onClick={() => handleShare('twitter')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-dark-700 text-white font-semibold rounded-xl border border-dark-600 hover:bg-dark-600 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Share on X
          </button>
          
          <button
            onClick={() => handleShare('linkedin')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-dark-700 text-white font-semibold rounded-xl border border-dark-600 hover:bg-dark-600 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Share on LinkedIn
          </button>
        </div>

        {/* Close text */}
        <p className="text-center text-slate-500 text-sm mt-4">
          Press Escape or click outside to close
        </p>
      </div>
    </div>
  )
}

