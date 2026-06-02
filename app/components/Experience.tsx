'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Server, Layout, ShieldCheck, Smartphone, Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  details: {
    category: string
    icon: any
    text: string
    color: string
    tech: string[]
  }[]
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const experiences: ExperienceItem[] = [
    {
      company: "YTech",
      role: "Mobile Developer",
      period: "September 2025 - February 2026",
      location: "Viet Nam",
      details: [
        {
          category: "Backend Development",
          icon: Server,
          text: "Built RESTful APIs using NestJS and PostgreSQL for a Healthcare system. Implemented JWT authentication and role-based authorization (Doctor, Patient). Developed features for appointment booking (Patient) and appointment management (Doctor), with proper validation and optimized queries.",
          color: "violet",
          tech: ["NestJS", "PostgreSQL", "JWT", "REST API"]
        },
        {
          category: "Frontend Development",
          icon: Smartphone,
          text: "Developed a mobile app using React Native CLI. Built reusable components, integrated APIs for authentication and appointments, handled forms, loading/error states, and fixed UI issues from QA.",
          color: "fuchsia",
          tech: ["React Native", "TypeScript", "State Management", "API Integration"]
        }
      ]
    },
    {
      company: "Act Brain Viet Nam",
      role: "Web Developer",
      period: "March 2024 - September 2024",
      location: "Viet Nam",
      details: [
        {
          category: "Backend Development",
          icon: Server,
          text: "Implemented RESTful endpoints with PHP laravel; designed data models and input validation; wrote queries and basic caching; documented APIs for handoff.",
          color: "violet",
          tech: ["PHP Laravel", "MySQL", "Caching", "API Documentation"]
        },
        {
          category: "Frontend Development",
          icon: Layout,
          text: "Use React built reusable, responsive components; integrated APIs; handled forms, loading/error states, and basic accessibility; fixed UI defects from QA.",
          color: "fuchsia",
          tech: ["React", "JavaScript", "Responsive Design", "Accessibility"]
        },
        {
          category: "Testing & QA",
          icon: ShieldCheck,
          text: "Wrote unit/integration tests; created test cases and test reports; used API testing tools to reproduce issues; partnered with QA to verify fixes.",
          color: "amber",
          tech: ["Unit Testing", "Integration Testing", "Postman", "QA Collaboration"]
        }
      ]
    }
  ]

  return (
    <section id="experience" ref={containerRef} className="min-h-screen w-full py-24 relative flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 z-20 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400">
          Professional Journey
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
          A track record of crafting high-performance backend architectures, smooth mobile experiences, and highly responsive web interfaces.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 relative max-w-5xl z-20">
        {/* Timeline Vertical Line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-transparent z-10" />

        <div className="space-y-20 relative">
          {experiences.map((exp, expIdx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: expIdx * 0.1 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline Node Icon (Left) */}
              <div className="absolute left-6 md:left-8 -translate-x-1/2 top-2 w-6 h-6 rounded-full bg-[#050505] border-2 border-violet-500/60 flex items-center justify-center z-30 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse" />
              </div>

              {/* Company Header Block */}
              <div className="mb-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-violet-400" />
                  <span className="text-xs text-gray-300 font-medium">{exp.period}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{exp.company}</h3>
                <p className="text-lg text-violet-400 font-medium mt-1">{exp.role}</p>
              </div>

              {/* Grid of Details */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {exp.details.map((detail, detailIdx) => {
                  const Icon = detail.icon
                  const colorMap: Record<string, { border: string, bg: string, text: string }> = {
                    violet: {
                      border: 'group-hover:border-violet-500/50',
                      bg: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
                      text: 'text-violet-400'
                    },
                    fuchsia: {
                      border: 'group-hover:border-fuchsia-500/50',
                      bg: 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400',
                      text: 'text-fuchsia-400'
                    },
                    amber: {
                      border: 'group-hover:border-amber-500/50',
                      bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
                      text: 'text-amber-400'
                    }
                  }

                  const selectedColor = colorMap[detail.color] || colorMap.violet

                  return (
                    <div 
                      key={detail.category}
                      className={`group p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${selectedColor.border} flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2.5 rounded-xl border ${selectedColor.bg}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-gray-200 text-sm md:text-base group-hover:text-white transition-colors">
                            {detail.category}
                          </h4>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {detail.text}
                        </p>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {detail.tech.map((t) => (
                          <span 
                            key={t} 
                            className="text-[10px] md:text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400 font-mono border border-white/[0.03]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

