'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageLightboxProps {
  images: string[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
  alt: string
}

export default function ImageLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  alt,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, onClose])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Container */}
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6">
        {/* Header with close button */}
        <div className="w-full max-w-5xl flex items-center justify-between mb-4">
          <h3 className="text-sm sm:text-base font-light text-foreground/70 truncate">
            {alt}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-card rounded-lg transition-colors flex-shrink-0 ml-4"
            aria-label="Close lightbox"
          >
            <X className="w-4 sm:w-5 h-4 sm:h-5 text-foreground" />
          </button>
        </div>

        {/* Main image container */}
        <div className="relative w-full h-auto max-w-5xl flex items-center justify-center bg-card border border-border rounded-lg overflow-hidden">
          <div className="relative w-full pt-[56.25%] sm:pt-[62.5%]">
            <Image
              src={images[currentIndex]}
              alt={`${alt} - image ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) calc(100vw - 24px), (max-width: 768px) calc(100vw - 32px), min(90vw, 56rem)"
              priority
            />
          </div>
        </div>

        {/* Navigation Footer */}
        {images.length > 1 && (
          <div className="w-full max-w-5xl flex items-center justify-between mt-4">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-card rounded-lg transition-colors text-foreground/70 hover:text-foreground"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="text-xs sm:text-sm font-light text-foreground/60">
              {currentIndex + 1} <span className="text-foreground/40">of</span> {images.length}
            </div>

            <button
              onClick={handleNext}
              className="p-2 hover:bg-card rounded-lg transition-colors text-foreground/70 hover:text-foreground"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
