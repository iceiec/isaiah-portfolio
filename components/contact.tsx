import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-background py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
            Get in Touch
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl font-light leading-relaxed">
            Have a project in mind? Let&apos;s talk. I&apos;m always interested in hearing about new opportunities and collaborations.
          </p>

          <div className="space-y-8">
            <a 
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-base font-light text-foreground hover:text-accent transition-colors"
            >
              Email me
              <span className="text-lg">→</span>
            </a>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6 font-light">Connect with me:</p>
              <div className="flex gap-8">
                <Link 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </Link>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </Link>
                <Link 
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
