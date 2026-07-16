'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
  ]

  const handleNavigate = (href: string) => {
    setMobileMenuOpen(false)
    router.push(href)
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo - PI Initials */}
        <Link
          href="/"
          onClick={(event) => {
            event.preventDefault()
            handleNavigate('/')
          }}
          className="text-2xl font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          PI
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault()
                handleNavigate(link.href)
              }}
              className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault()
                  handleNavigate(link.href)
                }}
                className="text-base font-medium text-foreground hover:text-accent transition-colors duration-200 py-2 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
