import Header from '@/components/header'
import Footer from '@/components/footer'
import ParallaxSection from '@/components/parallax-section'
import PageTransition from '@/components/page-transition'

export default function SkillsPage() {
   const skills = {
  Frontend: [
    'React.js',
    'Next.js',
    'Flutter',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript (ES6+)',
  ],

  Backend: [
    'Node.js',
    'Express.js',
    'PHP',
    'RESTful APIs',
  ],

  Database: [
    'MongoDB',
    'MySQL',
    'Supabase',
    'Firebase',
  ],

  Authentication: [
    'JWT',
    'Authentication & Authorization',
    'Role-Based Access Control (RBAC)',
  ],

  Tools: [
    'Git',
    'GitHub',
    'Trello',
    'Agile/Scrum',
    'Vercel',
    'Adobe Photoshop',
    'Canva',
  ],
}

  const experience = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'Argon Software Development Service',
    period: 'Nov 2025 – May 2026',
   description: `Developed production-ready full-stack web applications using React.js, Node.js, Express.js, and Supabase
Designed and integrated secure RESTful APIs with JWT authentication and Role-Based Access Control (RBAC).
Built a scalable real-time messaging system, including backend APIs, database schema, and frontend integration.
Created production-ready UI/UX prototypes using Figma and v0, then implemented them into live applications.
Performed code reviews and promoted clean, maintainable code practices.
Worked in an Agile/Scrum environment using Trello and Zoho Cliq to manage tasks and collaborate with stakeholders.
Leveraged AI-assisted development tools to accelerate development and improve productivity.`,
  },
];

  return (
    <main className="w-full bg-background text-foreground">
      <Header />
      
      <PageTransition>
        <ParallaxSection className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 text-foreground">
            Skills & Experience
          </h1>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold tracking-tight mb-6 text-accent">
                  {category}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-3 bg-card border border-border text-sm text-foreground font-medium hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-foreground">
              Professional Experience
            </h2>
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="pb-12 border-b border-border last:border-b-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {job.title}
                      </h3>
                      <p className="text-base text-accent font-semibold">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {job.period}
                    </p>
                  </div>
                  <p className="text-base text-foreground/90 leading-relaxed font-medium">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ParallaxSection>
      </PageTransition>

      <Footer />
    </main>
  )
}
