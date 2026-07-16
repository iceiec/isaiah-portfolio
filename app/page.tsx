import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import PageTransition from '@/components/page-transition'

export default function HomePage() {
  return (
    <main className="w-full bg-background text-foreground">
      <Header />

      <PageTransition>
        <Hero />
      </PageTransition>

      <Footer />
    </main>
  )
}
