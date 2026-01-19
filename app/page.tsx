import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Foundation from './components/Foundation'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-slate-50 selection:bg-violet-500/30">
      
      <Navbar />

      <Hero />

      <Foundation />

      {/* Chapter 2: The Arsenal */}
      <Skills />

      {/* Chapter 3: The Battle */}
      <Experience />

      {/* Chapter 4: The Masterpieces */}
      <Projects />

      {/* The Handshake */}
      <Contact />

    </main>
  )
}
