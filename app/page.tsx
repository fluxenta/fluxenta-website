import { Header, Footer } from '@/modules/shared'
import { Hero, Services, About, TechStack, Contact } from '@/modules/marketing'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
         <div className="section-white-gap" />
      <Services />
      <div className="section-white-gap" />
      <About />
      <div className="section-white-gap" />
      <TechStack />
         <div className="section-white-gap" />
      <Contact />
      <Footer />
    </main>
  )
}
