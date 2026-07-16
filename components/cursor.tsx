'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const backgroundLightRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const smoothPositionRef = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef(false)
  const timeRef = useRef(0)

  useEffect(() => {
    const isInteractive = (element: any): boolean => {
      if (!element) return false
      
      const interactiveTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']
      if (interactiveTags.includes(element?.tagName)) return true
      
      if (element?.onclick) return true
      if (element?.getAttribute?.('role') === 'button') return true
      
      return false
    }

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }

      const target = e.target as any
      const closestLink = target?.closest?.('a')
      const closestButton = target?.closest?.('button')
      
      isHoveringRef.current = isInteractive(target) || isInteractive(closestLink) || isInteractive(closestButton)
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animationFrame = () => {
      smoothPositionRef.current.x += (positionRef.current.x - smoothPositionRef.current.x) * 0.5
      smoothPositionRef.current.y += (positionRef.current.y - smoothPositionRef.current.y) * 0.5

      const isHovering = isHoveringRef.current

      if (cursorRef.current) {
        const size = isHovering ? 44 : 30
        cursorRef.current.style.transform = `translate(${smoothPositionRef.current.x - size / 2}px, ${smoothPositionRef.current.y - size / 2}px) scale(1)`
        cursorRef.current.style.width = `${size}px`
        cursorRef.current.style.height = `${size}px`
        cursorRef.current.style.borderWidth = isHovering ? '2px' : '1.5px'
        cursorRef.current.style.borderColor = isHovering ? 'rgb(96, 168, 192)' : 'rgba(96, 168, 192, 0.6)'
        cursorRef.current.style.boxShadow = isHovering 
          ? '0 0 25px rgba(96, 168, 192, 0.8), inset 0 0 25px rgba(96, 168, 192, 0.3)' 
          : '0 0 12px rgba(96, 168, 192, 0.4)'
      }

      if (dotRef.current) {
        const dotSize = isHovering ? 7 : 4
        dotRef.current.style.transform = `translate(${positionRef.current.x - dotSize / 2}px, ${positionRef.current.y - dotSize / 2}px)`
        dotRef.current.style.width = `${dotSize}px`
        dotRef.current.style.height = `${dotSize}px`
        dotRef.current.style.backgroundColor = 'rgb(96, 168, 192)'
        dotRef.current.style.boxShadow = isHovering 
          ? '0 0 12px rgba(96, 168, 192, 1)' 
          : '0 0 6px rgba(96, 168, 192, 0.6)'
      }

      if (glowRef.current) {
        const glowSize = isHovering ? 10 : 10
        glowRef.current.style.transform = `translate(${smoothPositionRef.current.x - glowSize / 2}px, ${smoothPositionRef.current.y - glowSize / 2}px)`
        glowRef.current.style.width = `${glowSize}px`
        glowRef.current.style.height = `${glowSize}px`
        glowRef.current.style.opacity = isHovering ? '0.8' : '0.4'
      }

      if (backgroundLightRef.current) {
        const lightRadius = isHovering ? 10 : 10
        backgroundLightRef.current.style.transform = `translate(${smoothPositionRef.current.x - lightRadius / 2}px, ${smoothPositionRef.current.y - lightRadius / 2}px)`
        backgroundLightRef.current.style.width = `${lightRadius}px`
        backgroundLightRef.current.style.height = `${lightRadius}px`
        backgroundLightRef.current.style.boxShadow = `0 0 80px 40px rgba(96, 168, 192, 1)`
        
        // Apply pulsating animation
        if (isHovering) {
          backgroundLightRef.current.className = 'pointer-events-none fixed rounded-full hidden lg:block cursor-light-pulse-hover'
        } else {
          backgroundLightRef.current.className = 'pointer-events-none fixed rounded-full hidden lg:block cursor-light-pulse'
        }
      }

      requestAnimationFrame(animationFrame)
    }

    const frameId = requestAnimationFrame(animationFrame)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      {/* Background Light */}
      <div
        ref={backgroundLightRef}
        className="pointer-events-none fixed rounded-full hidden lg:block"
        style={{
          width: '300px',
          height: '300px',
          background: 'transparent',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
          zIndex: '5',
        }}
      />

      {/* Glow Effect */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed rounded-full z-40 hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(96, 168, 192, 0.3) 0%, rgba(96, 168, 192, 0.1) 70%, transparent 100%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Main Ring Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed border rounded-full z-50 hidden lg:block"
      />

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed rounded-full z-50 hidden lg:block"
      />
    </>
  )
}
