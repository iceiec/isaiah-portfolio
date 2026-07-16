import Header from '@/components/header'
import Footer from '@/components/footer'
import ParallaxSection from '@/components/parallax-section'
import ProjectCard from '@/components/project-card'
import PageTransition from '@/components/page-transition'

export default function ProjectsPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <Header />
      
      <PageTransition>
        <ParallaxSection className="w-full bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Featured Projects
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl font-medium leading-relaxed">
              A selection of my recent work showcasing my design and development capabilities. Each project represents a unique challenge solved with thoughtful design and clean code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-foreground">
              Looking for more?
            </h2>
            <p className="text-base text-foreground/80 font-medium mb-8 max-w-2xl">
              I&apos;m always working on new and interesting projects. If you&apos;d like to see more of my work or discuss a potential collaboration, feel free to reach out via email.
            </p>
          </div>
        </div>
        </ParallaxSection>
      </PageTransition>

      <Footer />
    </main>
  )
}

const projects = [
  {
    id: 1,
    title: 'E-commerce Website (Full-Stack Web Application)',
    category: 'Company Project',
    image: '/nda.png',
    description:
      'A full-stack e-commerce application built with Next.js, TypeScript, and Supabase, featuring secure authentication, PayPal integration, role-based access control, and a responsive user experience.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'PayPal API',
    ],
  },
  {
    id: 2,
    title: 'E-commerce Platform v2',
    category: 'Company Project',
    image: '/nda.png',
    description:
      'An enhanced version of a full-stack e-commerce platform with additional business features, workflow improvements, and UI refinements built using the same modern technology stack.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
    ],
  },
  {
    id: 3,
    title: 'Backend Messaging System',
    category: 'Company Project',
    image: '/nda.png',
    description:
      'A full-stack backend messaging system built with Next.js and Supabase, featuring secure authentication, real-time communication, and an intuitive admin interface.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
    ],
  },
  {
    id: 4,
    title: 'Tomb Navigation & Contract Management',
    category: 'Mobile System',
    image: '/ceme.png',
    description:
      'A Flutter-based mobile system for cemetery navigation and contract management, designed around clarity, guided workflows, and practical utility. Features interactive cemetery mapping, contract signing workflows, real-time navigation, and comprehensive plot information management powered by Google Gemini AI.',
    tags: [
      'Flutter',
      'Firebase',
      'AI Integration',
      'Maps API',
      'Google Gemini',
    ],
    screenshots: [
      '/mob1.png',
      '/mob2.png',
      '/mob3.png',
      '/mob4.png',
      '/mob5.png',
      '/mob6.png',
      '/mob7.png',
      '/mob8.png',
    ],
  },
  {
    id: 5,
    title: 'Balai Alegria E-Commerce',
    category: 'Booking Platform Case Study',
    image: '/balai.png',
    description:
      'A resort booking experience with a secure payment flow and a clean interface that makes discovery, booking, and checkout feel straightforward.',
    tags: [
      'HTML/CSS',
      'Express.js',
      'Node.js',
      'PayMongo API',
    ],
    link: 'https://balai-orpin.vercel.app/',
  },
  {
    id: 6,
    title: 'FJA Basketball Scheduling Web Application',
    category: 'Dashboard Case Study',
    image: '/fja.png',
    description:
      'An operations-focused scheduling and reporting system that streamlines workflows, automates monthly reports, and reduces manual coordination.',
    tags: [
      'PHP',
      'MySQL',
      'Bootstrap',
    ],
  },
];
