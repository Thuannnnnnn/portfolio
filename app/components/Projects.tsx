'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Database, Cloud, Layout, Server, FolderCode, Smartphone } from 'lucide-react'

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]) // Adjusted for 2 projects + padding

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-10 left-10 z-10">
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90">The Masterpieces</h2>
           <p className="text-gray-400 mt-2">Selected Works</p>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-20">
          
          {/* Project 1: E-Learning System */}
          <div className="w-[85vw] md:w-[70vw] h-[80vh] bg-gradient-to-br from-violet-900/10 to-transparent rounded-3xl border border-white/10 p-8 flex flex-col relative overflow-hidden shrink-0 backdrop-blur-sm">
             <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
             
             <div className="z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">E-Learning System (ELS)</h3>
                    <p className="text-gray-400 mt-2">Comprehensive Education Platform</p>
                  </div>
                  <a href="https://github.com/Thuannnnnnn/sell_course" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>

                <div className="flex-1 grid md:grid-cols-2 gap-8 items-center">
                   {/* Wireframe / Visual representation */}
                   <div className="relative h-64 md:h-80 w-full bg-white/5 rounded-xl border border-dashed border-gray-700 flex items-center justify-center group [perspective:1000px]">
                      
                      {/* Backend Hotspot */}
                      <div className="absolute md:top-1/4 md:left-1/4 top-1/4 left-10 cursor-help group/hotspot">
                        <div className="w-8 h-8 rounded-full bg-violet-500 animate-ping absolute inset-0 opacity-75" />
                        <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center relative shadow-lg shadow-violet-500/50">
                          <Server className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute left-10 top-0 w-64 bg-[#1a1a1a] p-4 rounded-xl border border-violet-500/50 opacity-0 group-hover/hotspot:opacity-100 transition-opacity z-20 pointer-events-none shadow-xl">
                           <h4 className="text-violet-400 font-bold text-sm mb-1">Backend Core</h4>
                           <p className="text-xs text-gray-300">NestJS + PostgreSQL. Role-Based Access Control (RBAC) & JWT Auth.</p>
                        </div>
                      </div>

                      {/* DevOps Hotspot */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-help group/hotspot">
                        <div className="w-8 h-8 rounded-full bg-orange-500 animate-ping absolute inset-0 opacity-75" />
                         <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center relative shadow-lg shadow-orange-500/50">
                           <Cloud className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute left-10 top-0 w-64 bg-[#1a1a1a] p-4 rounded-xl border border-orange-500/50 opacity-0 group-hover/hotspot:opacity-100 transition-opacity z-20 pointer-events-none shadow-xl">
                           <h4 className="text-orange-400 font-bold text-sm mb-1">DevOps Pipeline</h4>
                           <p className="text-xs text-gray-300">Azure deployment & Docker containerization with CI/CD via GitHub Actions.</p>
                        </div>
                      </div>

                      {/* Frontend Hotspot */}
                      <div className="absolute bottom-1/4 right-1/4 cursor-help group/hotspot">
                        <div className="w-8 h-8 rounded-full bg-fuchsia-500 animate-ping absolute inset-0 opacity-75" />
                         <div className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center relative shadow-lg shadow-fuchsia-500/50">
                           <Layout className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute right-10 bottom-0 w-64 bg-[#1a1a1a] p-4 rounded-xl border border-fuchsia-500/50 opacity-0 group-hover/hotspot:opacity-100 transition-opacity z-20 pointer-events-none shadow-xl">
                           <h4 className="text-fuchsia-400 font-bold text-sm mb-1">Modern UI/UX</h4>
                           <p className="text-xs text-gray-300">Next.js optimized frontend for seamless user experience.</p>
                        </div>
                      </div>
                      
                      <div className="text-gray-600 font-mono text-sm">System Architecture</div>
                   </div>

                   {/* Tech Stack List */}
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <Server className="w-5 h-5 text-violet-400" />
                        <span>NestJS, PostgreSQL</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Cloud className="w-5 h-5 text-orange-400" />
                        <span>Azure, Docker, GitHub Actions</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Layout className="w-5 h-5 text-fuchsia-400" />
                        <span>Next.js, TailwindCSS</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Project 2: Phone Store */}
          <div className="w-[85vw] md:w-[70vw] h-[80vh] bg-[#1a1a1a] rounded-3xl border border-amber-900/30 p-8 flex flex-col relative overflow-hidden shrink-0">
             <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-black/80 pointer-events-none" />
             
             <div className="z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-amber-500 font-serif">Phone Store</h3>
                    <p className="text-amber-200/60 mt-2">Java Classic Architecture</p>
                  </div>
                  <a href="https://github.com/Kane-Nguyen/project_swp" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Github className="w-6 h-6 text-amber-100" />
                  </a>
                </div>

                <div className="flex-1 grid md:grid-cols-2 gap-8 items-center">
                   <div className="space-y-6">
                      <p className="text-lg text-amber-100/80 leading-relaxed italic">
                        &quot;The power of pure Java. A deep dive into the fundamentals of web architecture.&quot;
                      </p>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-amber-950/30 border border-amber-500/20 rounded-lg">
                          <h4 className="text-amber-400 font-bold mb-1">MVC Pattern</h4>
                          <p className="text-sm text-amber-200/60">Structured separation of concerns using servlets and JSPs.</p>
                        </div>
                        <div className="p-4 bg-amber-950/30 border border-amber-500/20 rounded-lg">
                          <h4 className="text-amber-400 font-bold mb-1">DAO Pattern</h4>
                          <p className="text-sm text-amber-200/60">Efficient database abstraction layer for MySQL.</p>
                        </div>
                      </div>
                   </div>

                   <div className="relative h-64 md:h-80 w-full bg-black/40 rounded-xl border border-amber-900/50 flex items-center justify-center">
                      <FolderCode className="w-24 h-24 text-amber-800/50" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <div className="bg-amber-900/20 px-6 py-3 rounded border border-amber-500/30 backdrop-blur-sm">
                           <code className="text-amber-400">public class Controller extends HttpServlet</code>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}
