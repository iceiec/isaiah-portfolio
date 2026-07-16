'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  offset?: number
  className?: string
}

export default function ParallaxSection({
  children,
  offset = 100,
  className = '',
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (latest) => latest * 0.5)

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
