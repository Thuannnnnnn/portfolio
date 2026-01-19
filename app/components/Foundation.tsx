'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { useRef } from 'react'

export default function Foundation() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Logo/Icon */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="relative w-48 h-48 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
            <GraduationCap className="w-24 h-24 text-violet-500" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-2 border-violet-500/30 rounded-full"
            />
          </div>
          <h2 className="text-3xl font-serif font-bold text-center">
            Bachelor of Engineering<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500">Software Engineering</span>
          </h2>
        </div>

        {/* Right Side - Stats */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between text-lg font-medium">
              <span>GPA</span>
              <span className="text-violet-400">3.0/4.0</span>
            </div>
            <div className="h-4 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-violet-600 to-orange-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
             <Calendar className="w-6 h-6 text-orange-500" />
             <div className="flex flex-col">
               <span className="text-sm text-gray-400">Graduation</span>
               <span className="text-xl font-bold text-white">September 2025</span>
             </div>
          </div>

          <blockquote className="border-l-4 border-violet-500 pl-4 py-2 italic text-gray-400">
            &quot;I didn&apos;t just learn to code. I learned how to build sustainable systems from day one.&quot;
          </blockquote>
        </div>

      </div>
    </section>
  )
}
