"use client"

import { useEffect, useRef } from "react"

interface TypedTextProps {
  text: string
  className?: string
}

export default function TypedText({ text, className = "" }: TypedTextProps) {
  const elementRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    element.textContent = ""

    let i = 0
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [text])

  return <h1 ref={elementRef} className={className}></h1>
}
