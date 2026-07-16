import ProjectCard from './project-card'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration. Features include product filtering, cart management, shopping cart, and secure checkout. The platform includes a beautiful product showcase, user authentication, order history, and responsive design that works seamlessly on all devices.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=450&fit=crop',
    category: 'E-Commerce',
    link: 'https://example.com/ecommerce',
    screenshots: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1556742212-5b321f3c261d?w=800&h=450&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Design System',
    description: 'A comprehensive component library and design system with 50+ reusable components. Complete documentation and accessibility guidelines included. Features a beautiful Storybook interface, TypeScript support for type safety, and carefully crafted components that maintain design consistency across projects.',
    tags: ['React', 'Storybook', 'TypeScript', 'CSS Modules', 'Accessibility'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop',
    category: 'Design System',
    link: 'https://example.com/design-system',
    screenshots: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard displaying business metrics and KPIs. Interactive charts, data visualization, and export functionality. Users can track performance metrics, create custom reports, and drill down into detailed data with smooth animations and intuitive controls.',
    tags: ['React', 'Chart.js', 'REST API', 'Performance', 'Real-time'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    category: 'Analytics',
    link: 'https://example.com/dashboard',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'SaaS Application',
    description: 'Multi-tenant SaaS app with user authentication, team management, and subscription billing. Built for scalability and security with role-based access control. Features include team collaboration tools, project management, activity logs, and flexible pricing tiers.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Authentication', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=450&fit=crop',
    category: 'SaaS',
    link: 'https://example.com/saas',
    screenshots: [
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop'
    ]
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'Headless CMS with a beautiful editor interface. API-first architecture supporting multiple content types and workflows. Features a rich text editor, media management, version control, and flexible publishing workflows for managing content across multiple platforms.',
    tags: ['Node.js', 'GraphQL', 'React', 'PostgreSQL', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    category: 'CMS',
    link: 'https://example.com/cms',
    screenshots: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop'
    ]
  },
  {
    id: 6,
    title: 'Mobile App Landing',
    description: 'Landing page for a productivity mobile app. Showcasing features, testimonials, and app store download links with smooth animations and engaging interactions. The page includes feature highlights, user testimonials, pricing information, and prominent calls-to-action.',
    tags: ['React', 'Framer Motion', 'Responsive Design', 'Marketing', 'SEO'],
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=450&fit=crop',
    category: 'Marketing',
    link: 'https://example.com/landing',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop'
    ]
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
