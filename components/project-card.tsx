'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-56 mb-6 bg-card border border-border overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
      </div>
      
      <h3 className="text-base font-light tracking-tight mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 font-light">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span 
            key={tag}
            className="text-xs px-3 py-1 bg-card border border-muted-foreground/30 text-muted-foreground font-light"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
