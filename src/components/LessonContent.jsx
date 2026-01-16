import { useMemo } from 'react'
import { CodeBlock } from './CodeBlock'
import { Callout } from './Callout'

export function LessonContent({ content }) {
  const renderedContent = useMemo(() => {
    return parseContent(content)
  }, [content])

  return (
    <div className="prose prose-invert max-w-none">
      {renderedContent}
    </div>
  )
}

function parseContent(content) {
  if (!content) return null

  const lines = content.split('\n')
  const elements = []
  let currentIndex = 0
  let inCodeBlock = false
  let codeContent = []
  let codeLanguage = ''

  while (currentIndex < lines.length) {
    const line = lines[currentIndex]

    // Check for code block start/end
    if (line.trim().startsWith('```')) {
      if (!inCodeBlock) {
        // Starting a code block
        inCodeBlock = true
        codeLanguage = line.trim().slice(3)
        codeContent = []
      } else {
        // Ending a code block
        inCodeBlock = false
        elements.push(
          <CodeBlock
            key={`code-${currentIndex}`}
            code={codeContent.join('\n')}
            language={codeLanguage}
          />
        )
      }
      currentIndex++
      continue
    }

    if (inCodeBlock) {
      codeContent.push(line)
      currentIndex++
      continue
    }

    // Check for callouts
    if (line.trim().startsWith('<tip>')) {
      const endIndex = findClosingTag(lines, currentIndex, '</tip>')
      const calloutContent = lines.slice(currentIndex + 1, endIndex).join('\n').trim()
      elements.push(
        <Callout key={`tip-${currentIndex}`} type="tip">
          {calloutContent}
        </Callout>
      )
      currentIndex = endIndex + 1
      continue
    }

    if (line.trim().startsWith('<warning>')) {
      const endIndex = findClosingTag(lines, currentIndex, '</warning>')
      const calloutContent = lines.slice(currentIndex + 1, endIndex).join('\n').trim()
      elements.push(
        <Callout key={`warning-${currentIndex}`} type="warning">
          {calloutContent}
        </Callout>
      )
      currentIndex = endIndex + 1
      continue
    }

    if (line.trim().startsWith('<info>')) {
      const endIndex = findClosingTag(lines, currentIndex, '</info>')
      const calloutContent = lines.slice(currentIndex + 1, endIndex).join('\n').trim()
      elements.push(
        <Callout key={`info-${currentIndex}`} type="info">
          {calloutContent}
        </Callout>
      )
      currentIndex = endIndex + 1
      continue
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${currentIndex}`} className="text-4xl font-bold text-white mt-0 mb-6">
          {line.slice(2)}
        </h1>
      )
      currentIndex++
      continue
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${currentIndex}`} className="text-2xl font-bold text-white mt-10 mb-4">
          {line.slice(3)}
        </h2>
      )
      currentIndex++
      continue
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${currentIndex}`} className="text-xl font-semibold text-slate-200 mt-8 mb-3">
          {line.slice(4)}
        </h3>
      )
      currentIndex++
      continue
    }

    // Tables
    if (line.includes('|') && line.trim().startsWith('|')) {
      const tableLines = []
      let tableIndex = currentIndex
      while (tableIndex < lines.length && lines[tableIndex].includes('|')) {
        tableLines.push(lines[tableIndex])
        tableIndex++
      }
      elements.push(
        <div key={`table-${currentIndex}`} className="overflow-x-auto my-6">
          <table className="min-w-full border border-dark-600 rounded-lg overflow-hidden">
            {renderTable(tableLines)}
          </table>
        </div>
      )
      currentIndex = tableIndex
      continue
    }

    // Lists
    if (line.trim().startsWith('- ') || line.trim().match(/^\d+\. /)) {
      const listLines = []
      let listIndex = currentIndex
      const isOrdered = line.trim().match(/^\d+\. /)
      
      while (listIndex < lines.length) {
        const currentLine = lines[listIndex].trim()
        if (currentLine.startsWith('- ') || currentLine.match(/^\d+\. /)) {
          listLines.push(currentLine)
          listIndex++
        } else if (currentLine === '') {
          listIndex++
          break
        } else {
          break
        }
      }

      const ListTag = isOrdered ? 'ol' : 'ul'
      elements.push(
        <ListTag 
          key={`list-${currentIndex}`} 
          className={`my-4 space-y-2 ${isOrdered ? 'list-decimal' : 'list-disc'} list-inside text-slate-300`}
        >
          {listLines.map((item, i) => (
            <li key={i} className="text-slate-300">
              {renderInlineFormatting(item.replace(/^[-\d.]+\s*/, ''))}
            </li>
          ))}
        </ListTag>
      )
      currentIndex = listIndex
      continue
    }

    // Empty lines
    if (line.trim() === '') {
      currentIndex++
      continue
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${currentIndex}`} className="text-slate-300 my-4 leading-relaxed">
        {renderInlineFormatting(line)}
      </p>
    )
    currentIndex++
  }

  return elements
}

function findClosingTag(lines, startIndex, tag) {
  for (let i = startIndex; i < lines.length; i++) {
    if (lines[i].trim() === tag) {
      return i
    }
  }
  return lines.length
}

function renderInlineFormatting(text) {
  const parts = []
  let remaining = text
  let keyIndex = 0

  // Process inline code, bold, links, etc.
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\))/g
  let match
  let lastIndex = 0

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    const fullMatch = match[0]

    // Inline code
    if (fullMatch.startsWith('`') && fullMatch.endsWith('`')) {
      parts.push(
        <code key={keyIndex++} className="px-1.5 py-0.5 bg-dark-700 rounded text-cyan-400 font-mono text-sm">
          {fullMatch.slice(1, -1)}
        </code>
      )
    }
    // Bold
    else if (fullMatch.startsWith('**') && fullMatch.endsWith('**')) {
      parts.push(
        <strong key={keyIndex++} className="font-semibold text-white">
          {fullMatch.slice(2, -2)}
        </strong>
      )
    }
    // Links
    else if (match[2] && match[3]) {
      parts.push(
        <a 
          key={keyIndex++} 
          href={match[3]} 
          className="text-cyan-400 hover:text-cyan-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[2]}
        </a>
      )
    }

    lastIndex = match.index + fullMatch.length
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

function renderTable(lines) {
  if (lines.length < 2) return null

  const parseRow = (line) => {
    return line
      .split('|')
      .map(cell => cell.trim())
      .filter(cell => cell !== '')
  }

  const headers = parseRow(lines[0])
  const rows = lines.slice(2).map(parseRow) // Skip header and separator row

  return (
    <>
      <thead className="bg-dark-700">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-slate-200 border-b border-dark-600">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-dark-600">
        {rows.map((row, i) => (
          <tr key={i} className="bg-dark-800/50">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-sm text-slate-300">
                {renderInlineFormatting(cell)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  )
}

