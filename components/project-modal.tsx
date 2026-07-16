'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, ExternalLink } from 'lucide-react'

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with close button */}
          <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between bg-opacity-95 backdrop-blur-sm">
            <div className="flex-1">
              {project.category && (
                <p className="text-xs font-light text-accent mb-2 uppercase tracking-wider">
                  {project.category}
                </p>
              )}
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Screenshot Gallery */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Website Preview
              </h3>
              <div className={`grid gap-4 ${displayImages.length > 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
                {displayImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative w-full bg-muted rounded-lg overflow-hidden border border-border group"
                  >
                    <div className="relative w-full pt-[56.25%]">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                About Project
              </h3>
              <p className="text-base leading-relaxed font-light text-foreground/90">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-4 py-2 bg-accent/10 border border-accent/30 text-accent font-light rounded-full hover:bg-accent/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="border-t border-border pt-6 flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground font-light hover:bg-accent/90 transition-colors rounded-lg"
                >
                  View Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-border text-foreground font-light hover:bg-muted transition-colors rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
