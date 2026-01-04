import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { About } from './components/sections/About'
import { TechStack } from './components/sections/TechStack'
import { Contact } from './components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}