'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ExternalLink } from 'lucide-react'
import ImageLightbox from './image-lightbox'

interface ProjectModalProps {
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
    category?: string
    link?: string
    screenshots?: string[]
  }
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Use screenshots array if available, otherwise use the main image
  const displayImages = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : [project.image]

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto sm:overflow-visible">
        <div
          className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto scrollbar-thin scrollbar-track-card scrollbar-thumb-muted hover:scrollbar-thumb-muted-foreground my-auto"
          onClick={(e) => e.stopPropagation()}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Header with close button */}
          <div className="sticky top-0 bg-card border-b border-border p-3 sm:p-6 flex items-start justify-between gap-3 bg-opacity-95 backdrop-blur-sm">
            <div className="flex-1 min-w-0">
              {project.category && (
                <p className="text-xs font-light text-accent mb-1 sm:mb-2 uppercase tracking-wider truncate">
                  {project.category}
                </p>
              )}
              <h2 className="text-lg sm:text-2xl md:text-3xl font-light tracking-tight break-words">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-6 space-y-6 sm:space-y-8">
            {/* Screenshot Gallery */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Website Preview
              </h3>
              <div className={`grid gap-3 sm:gap-4 ${displayImages.length > 1 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1'}`}>
                {displayImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImageIndex(index)
                      setLightboxOpen(true)
                    }}
                    className="relative w-full bg-muted rounded-lg overflow-hidden border border-border group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-card"
                    aria-label={`View screenshot ${index + 1}`}
                  >
                    <div className="relative w-full pt-[56.25%]">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-light">
                          Click to expand
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-border pt-4 sm:pt-6">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 sm:mb-3 uppercase tracking-wide">
                About Project
              </h3>
              <p className="text-sm sm:text-base leading-relaxed font-light text-foreground/90">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="border-t border-border pt-4 sm:pt-6">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-3 sm:mb-4 uppercase tracking-wide">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 text-accent font-light rounded-full hover:bg-accent/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="border-t border-border pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-accent text-accent-foreground font-light hover:bg-accent/90 transition-colors rounded-lg text-sm sm:text-base"
                >
                  View Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 border border-border text-foreground font-light hover:bg-muted transition-colors rounded-lg text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={displayImages}
        initialIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        alt={project.title}
      />
    </>
  )
}
