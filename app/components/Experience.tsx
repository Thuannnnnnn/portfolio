'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Code2, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const leftX = useTransform(scrollYProgress, [0, 0.4], [-100, 0])
  const rightX = useTransform(scrollYProgress, [0, 0.4], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])

  return (
    <section id="experience" ref={containerRef} className="min-h-screen w-full py-20 relative flex flex-col items-center justify-center bg-[#050505]">
      
      <motion.div 
        style={{ opacity }}
        className="text-center mb-16 z-20"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500">The Battle</h2>
        <p className="text-xl text-violet-400">Act Brain Viet Nam</p>
        <p className="text-gray-400 text-sm">March 2024 - September 2024</p>
      </motion.div>

      <div className="container mx-auto px-4 relative max-w-5xl">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2 hidden md:block">
          <motion.div 
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-violet-500 to-orange-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-24 relative z-10">
          
          {/* Developer Side */}
          <motion.div style={{ x: leftX, opacity }} className="text-right space-y-8">
            <div className="flex items-center justify-end space-x-4 mb-8">
              <h3 className="text-2xl font-bold text-violet-400">Developer</h3>
              <div className="p-3 bg-violet-500/10 rounded-full border border-violet-500/20">
                <Code2 className="w-6 h-6 text-violet-400" />
              </div>
            </div>
            
            <TaskCard 
              title="RESTful API Construction" 
              desc="Built robust APIs using PHP Laravel"
              side="left"
              color="violet"
            />
            <TaskCard 
              title="Frontend Components" 
              desc="Developed interactive React components"
              side="left"
              color="violet"
            />
          </motion.div>

          {/* Tester Side */}
          <motion.div style={{ x: rightX, opacity }} className="text-left space-y-8">
             <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-fuchsia-500/10 rounded-full border border-fuchsia-500/20">
                <ShieldCheck className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-2xl font-bold text-fuchsia-400">Tester / QA</h3>
            </div>

            <TaskCard 
              title="Testing Automation" 
              desc="Wrote unit and integration tests covering critical paths"
              side="right"
              color="fuchsia"
            />
            <TaskCard 
              title="Quality Assurance" 
              desc="Collaborated with QA team to identify and fix defects"
              side="right"
              color="fuchsia"
            />
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center max-w-2xl mx-auto p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
        >
          <p className="text-lg text-gray-300 italic">
            &quot;At Act Brain, I wasn&apos;t just a developer. I played a dual role: building features while ensuring quality with a Tester&apos;s mindset.&quot;
          </p>
        </motion.div>

      </div>
    </section>
  )
}

function TaskCard({ title, desc, side, color }: { title: string, desc: string, side: 'left' | 'right', color: 'violet' | 'fuchsia' }) {
  const alignClass = side === 'left' ? 'items-end' : 'items-start'
  const colorClass = color === 'violet' ? 'border-violet-500/30' : 'border-fuchsia-500/30'
  const iconColor = color === 'violet' ? 'text-violet-400' : 'text-fuchsia-400'
  
  return (
    <div className={`flex flex-col ${alignClass} group`}>
      <div className={`p-4 rounded-xl border ${colorClass} bg-white/5 hover:bg-white/10 transition-all duration-300 w-full`}>
        <div className="flex items-start gap-3">
          {side === 'right' && <CheckCircle2 className={`w-5 h-5 ${iconColor} mt-1 shrink-0`} />}
          
          <div className="flex-1">
            <h4 className="font-semibold text-lg text-gray-200">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>

          {side === 'left' && <CheckCircle2 className={`w-5 h-5 ${iconColor} mt-1 shrink-0`} />}
        </div>
      </div>
    </div>
  )
}
