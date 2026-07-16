export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-light">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            {/* <a 
              href="#" 
              className="text-sm text-muted-foreground font-light hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground font-light hover:text-foreground transition-colors"
            >
              Terms
            </a> */}
            <a 
              href="#about" 
              className="text-sm text-muted-foreground font-light hover:text-foreground transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
