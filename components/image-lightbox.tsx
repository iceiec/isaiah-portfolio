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
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', handleArrowKeys)
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.removeEventListener('keydown', handleArrowKeys)
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
        className="fixed inset-0 bg-black/80 z-40 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox */}
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Main image */}
        <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt={`${alt} - image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            {/* Previous button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors hidden sm:flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors hidden sm:flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm font-light">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </>
  )
}
