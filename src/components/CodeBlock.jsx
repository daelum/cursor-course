import { useState } from 'react'

export function CodeBlock({ code, language = 'javascript', filename = '' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simple syntax highlighting
  const highlightCode = (code) => {
    // This is a simplified highlighter - in production, use a library like Prism or Highlight.js
    return code
      .replace(/(\/\/.*$)/gm, '<span class="token-comment">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>')
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|try|catch|throw|new|this)\b/g, '<span class="token-keyword">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="token-keyword">$1</span>')
      .replace(/(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g, '<span class="token-string">$&</span>')
      .replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>')
      .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="token-function">$1</span>')
  }

  return (
    <div className="code-block my-4 group">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-dark-700 border-b border-dark-500">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {filename && (
            <span className="text-xs text-slate-400 ml-2 font-mono">{filename}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      
      {/* Code content */}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code 
          className="font-mono"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </pre>
    </div>
  )
}

