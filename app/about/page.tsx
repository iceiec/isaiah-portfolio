import Header from '@/components/header'
import Footer from '@/components/footer'
import ParallaxSection from '@/components/parallax-section'
import PageTransition from '@/components/page-transition'

export default function AboutPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <Header />

      <PageTransition>
        <ParallaxSection className="w-full bg-background py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-14 text-foreground">
                About Me
              </h1>

              <div className="space-y-7 text-base md:text-lg leading-relaxed text-foreground/90 font-medium">
                <p>
                  I&apos;m a <strong>Full-Stack Developer</strong> passionate about building modern, scalable, and user-focused web applications. I enjoy transforming ideas into complete digital solutions by developing responsive frontends, designing efficient backend systems, and creating secure APIs that power real-world applications.
                </p>

                <p>
                  During my internship at <strong>Argon Software Development Service</strong>, I developed production-ready applications using React.js, Node.js, Express.js, and Supabase. I took ownership of feature development, database design, RESTful API implementation, authentication, testing, and deployment while collaborating in an Agile environment.
                </p>

                <p>
                  My experience spans a variety of projects, including e-commerce platforms, real-time messaging systems, booking applications, and business management solutions. I focus on writing clean, maintainable code while building software that is secure, scalable, and easy to use.
                </p>

                <p>
                  I believe that exceptional software combines strong engineering with thoughtful user experience. Whether I&apos;m designing an intuitive interface, optimizing backend performance, or integrating modern technologies, my goal is to create products that are both functional and visually engaging.
                </p>

                <p>
                  I&apos;m continuously learning new technologies, exploring best practices in software architecture, and challenging myself through real-world projects. As I grow in my career, I&apos;m excited to contribute to innovative teams, solve meaningful problems, and build applications that make a lasting impact.
                </p>

              </div>

              <div className="mt-20 pt-12 border-t border-border">
                <h2 className="text-3xl font-bold mb-10 text-foreground">Why Work With Me?</h2>
                <ul className="space-y-5 text-base font-medium text-foreground/90">
                  <li className="flex gap-4 items-start">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    <span>Full-stack development with React.js, Next.js, Node.js, Express.js, and Supabase</span>
                  </li>

                  <li className="flex gap-4 items-start">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    <span>Building secure RESTful APIs with JWT authentication and role-based access control (RBAC)</span>
                  </li>

                  <li className="flex gap-4 items-start">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    <span>Creating responsive, user-centered interfaces with a focus on performance and usability</span>
                  </li>

                  <li className="flex gap-4 items-start">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    <span>Designing scalable database architectures and maintainable application structures</span>
                  </li>

                  <li className="flex gap-4 items-start">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    <span>Committed to clean code, continuous learning, and delivering high-quality software</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </PageTransition>

      <Footer />
    </main>
  )
}
