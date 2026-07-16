import ProjectCard from './project-card'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration. Features include product filtering, cart management, and secure checkout.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Design System',
    description: 'A comprehensive component library and design system with 50+ reusable components. Complete documentation and accessibility guidelines included.',
    tags: ['React', 'Storybook', 'TypeScript', 'CSS'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard displaying business metrics and KPIs. Interactive charts, data visualization, and export functionality.',
    tags: ['React', 'Chart.js', 'API', 'Performance'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'SaaS Application',
    description: 'Multi-tenant SaaS app with user authentication, team management, and subscription billing. Built for scalability and security.',
    tags: ['Next.js', 'Firebase', 'Tailwind', 'Auth'],
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'Headless CMS with a beautiful editor interface. API-first architecture supporting multiple content types and workflows.',
    tags: ['Node.js', 'GraphQL', 'React', 'Database'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Mobile App Landing',
    description: 'Landing page for a productivity mobile app. Showcasing features, testimonials, and app store download links with smooth animations.',
    tags: ['React', 'Animation', 'Responsive', 'Marketing'],
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl font-light">
            Selected work showcasing my design and development capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
