'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ProjectModalProps {
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
    category?: string
    link?: string
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
          className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with close button */}
          <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between">
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
              className="ml-4 p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 bg-muted rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                About
              </h3>
              <p className="text-base leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-2 bg-muted border border-muted-foreground/20 text-foreground/80 font-light rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link if available */}
            {project.link && (
              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground font-light hover:bg-accent/90 transition-colors rounded"
                >
                  View Live
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
