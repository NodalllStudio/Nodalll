import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  )
}
