'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const skills = {
  frontend: {
    title: 'Frontend',
    color: 'bg-violet-500',
    textColor: 'text-violet-400',
    items: [
      { name: 'React', desc: 'Component Architecture' },
      { name: 'Next.js', desc: 'SSR & performance' },
      { name: 'HTML/CSS', desc: 'Accessibility & Semantic' },
    ]
  },
  backend: {
    title: 'Backend',
    color: 'bg-fuchsia-500',
    textColor: 'text-fuchsia-400',
    items: [
      { name: 'Node.js', desc: 'Event-driven I/O' },
      { name: 'NestJS', desc: 'Scalable Architecture' },
      { name: 'Java', desc: 'Robust Systems' },
      { name: 'PostgreSQL', desc: 'Relational Data' },
    ]
  },
  devops: {
    title: 'Quality & DevOps',
    color: 'bg-orange-500',
    textColor: 'text-orange-400',
    items: [
      { name: 'Docker', desc: 'Containerization' },
      { name: 'Azure', desc: 'Cloud Services' },
      { name: 'GitHub Actions', desc: 'CI/CD Pipelines' },
      { name: 'Jest', desc: 'Unit/Integration Testing' },
    ]
  }
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={containerRef} className="min-h-screen w-full py-20 relative overflow-hidden flex flex-col items-center justify-center bg-[#050505]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500">The Arsenal</h2>
          <p className="text-xl text-gray-400">End-to-end delivery: From first line of code to CI/CD and automation.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 [perspective:1000px]">
          {/* Frontend Axis */}
          <motion.div style={{ y: isMobile ? 0 : y1 }} className="space-y-6">
            <h3 className={`text-2xl font-bold ${skills.frontend.textColor} text-center mb-8`}>Frontend</h3>
            {skills.frontend.items.map((item, idx) => (
              <SkillCard key={idx} item={item} color="violet" />
            ))}
          </motion.div>

          {/* Backend Axis */}
          <motion.div style={{ y: isMobile ? 0 : y2 }} className="space-y-6 md:mt-12">
            <h3 className={`text-2xl font-bold ${skills.backend.textColor} text-center mb-8`}>Backend</h3>
            {skills.backend.items.map((item, idx) => (
              <SkillCard key={idx} item={item} color="fuchsia" />
            ))}
          </motion.div>

          {/* DevOps Axis */}
          <motion.div style={{ y: isMobile ? 0 : y3 }} className="space-y-6">
            <h3 className={`text-2xl font-bold ${skills.devops.textColor} text-center mb-8`}>Quality & DevOps</h3>
            {skills.devops.items.map((item, idx) => (
              <SkillCard key={idx} item={item} color="orange" />
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-900 rounded-full blur-[120px]" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-900 rounded-full blur-[120px]" />
      </div>
    </section>
  )
}

function SkillCard({ item, color }: { item: { name: string, desc: string }, color: string }) {
  const colorClasses = {
    violet: 'border-violet-500/30 hover:border-violet-500 bg-violet-900/10 hover:bg-violet-900/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    fuchsia: 'border-fuchsia-500/30 hover:border-fuchsia-500 bg-fuchsia-900/10 hover:bg-fuchsia-900/20 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]',
    orange: 'border-orange-500/30 hover:border-orange-500 bg-orange-900/10 hover:bg-orange-900/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, z: 20 }}
      className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${colorClasses[color as keyof typeof colorClasses]} cursor-default group`}
    >
      <h4 className="text-xl font-bold mb-2 group-hover:text-white transition-colors text-gray-200">{item.name}</h4>
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden">
        {item.desc}
      </p>
    </motion.div>
  )
}
