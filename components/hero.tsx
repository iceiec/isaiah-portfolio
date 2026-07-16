import Link from 'next/link'
import AnimatedText from './animated-text'

export default function Hero() {
  return (
    <section className="w-full bg-background py-16 md:py-24 hero-playful-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
          {/* Bio Content */}
          <div className="space-y-8">
            <div>
              <AnimatedText
                text="Pierre Isaiah I. Aguinaldo"
                className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-10 text-foreground block"
                delay={0}
              />
              
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/90 font-medium">
                <p>
                  An aspiring Full-Stack Developer with hands-on experience building web and mobile applications through academic and internship projects.
                </p>
                
                <p>
                  I enjoy creating responsive, scalable, and user-focused solutions while continuously expanding my knowledge of modern technologies and best development practices.
                </p>
              </div>
            </div>

            {/* See More Link */}
            <div className="pt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 text-base font-semibold text-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                See More About Me
                <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-6 cursor-pointer">
              <a href="https://www.facebook.com/pierreisaiah/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/isaiahaguinaldo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/iceiec" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.546.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path></svg>
              </a>
              <a href="https://www.instagram.com/iseya.__" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"></path><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
