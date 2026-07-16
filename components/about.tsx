export default function About() {
  return (
    <section id="about" className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
            Skills & Experience
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-muted-foreground mb-6">
                SKILLS
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI Design', 'Web Performance', 'JavaScript', 'CSS/SCSS', 'Figma'].map((skill) => (
                  <div 
                    key={skill}
                    className="px-4 py-3 bg-card border border-border text-sm text-foreground font-light"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-widest text-muted-foreground mb-6">
                EXPERIENCE
              </h3>
              <div className="space-y-8">
                <div className="pb-8 border-b border-border">
                  <p className="text-base font-light text-foreground">Senior Frontend Developer</p>
                  <p className="text-sm text-muted-foreground mt-1">Creative Studio • 2022 - Present</p>
                </div>
                <div className="pb-8 border-b border-border">
                  <p className="text-base font-light text-foreground">Frontend Engineer</p>
                  <p className="text-sm text-muted-foreground mt-1">Tech Company • 2020 - 2022</p>
                </div>
                <div>
                  <p className="text-base font-light text-foreground">Junior Developer</p>
                  <p className="text-sm text-muted-foreground mt-1">Startup • 2019 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
