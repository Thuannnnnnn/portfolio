'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Server, Layout, Cloud, Github, ExternalLink, Code2, FolderCode, Database } from 'lucide-react'

interface ProjectItem {
  title: string
  subtitle: string
  github: string
  demo?: string
  details: {
    category: string
    icon: any
    text: string
    color: string
    tech: string[]
  }[]
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  const projects: ProjectItem[] = [
    {
      title: "E-Learning System (ELS)",
      subtitle: "Comprehensive Education Platform",
      github: "https://github.com/Thuannnnnnn/sell_course",
      details: [
        {
          category: "Backend Core",
          icon: Server,
          text: "Built with NestJS and PostgreSQL. Implemented secure Role-Based Access Control (RBAC) alongside robust JWT authentication.",
          color: "violet",
          tech: ["NestJS", "PostgreSQL", "RBAC", "JWT"]
        },
        {
          category: "Modern UI/UX",
          icon: Layout,
          text: "Developed a highly optimized frontend using Next.js. Engineered a seamless, responsive layout for course management.",
          color: "fuchsia",
          tech: ["Next.js", "TailwindCSS", "React", "TypeScript"]
        },
        {
          category: "DevOps Pipeline",
          icon: Cloud,
          text: "Managed Docker containerization, Azure cloud deployment, and robust automated CI/CD pipelines via GitHub Actions.",
          color: "amber",
          tech: ["Docker", "Azure", "CI/CD", "GitHub Actions"]
        }
      ]
    },
    {
      title: "Phone Store",
      subtitle: "Java Classic Architecture Web App",
      github: "https://github.com/Kane-Nguyen/project_swp",
      details: [
        {
          category: "MVC Architecture",
          icon: Code2,
          text: "Engineered solid MVC architecture patterns utilizing Java Servlets and JSPs to ensure a structured separation of concerns.",
          color: "violet",
          tech: ["Java Servlets", "JSP", "MVC Pattern"]
        },
        {
          category: "DAO Pattern",
          icon: Database,
          text: "Designed an efficient Database Access Object (DAO) abstraction layer interfacing seamlessly with a MySQL relational database.",
          color: "fuchsia",
          tech: ["MySQL", "DAO Pattern", "JDBC"]
        },
        {
          category: "E-Commerce Features",
          icon: FolderCode,
          text: "Implemented core shopping capabilities: persistent cart management, dynamic product filtering, and a secure checkout flow.",
          color: "amber",
          tech: ["Cart Logic", "Authentication", "Session State"]
        }
      ]
    }
  ]

  return (
    <section id="projects" ref={containerRef} className="min-h-screen w-full py-24 relative flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 z-20 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400">
          The Masterpieces
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
          A showcase of selected engineering works, detailing architecture decisions, technologies, and system structures.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 relative max-w-5xl z-20">
        {/* Timeline Vertical Line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-fuchsia-500/50 via-violet-500/50 to-transparent z-10" />

        <div className="space-y-20 relative">
          {projects.map((proj, projIdx) => (
            <motion.div 
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: projIdx * 0.1 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline Node Icon (Left) */}
              <div className="absolute left-6 md:left-8 -translate-x-1/2 top-2 w-6 h-6 rounded-full bg-[#050505] border-2 border-fuchsia-500/60 flex items-center justify-center z-30 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 animate-pulse" />
              </div>

              {/* Project Header Block */}
              <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                    {proj.title}
                  </h3>
                  <p className="text-lg text-fuchsia-400 font-medium mt-1">{proj.subtitle}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>

              {/* Grid of Details */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {proj.details.map((detail, detailIdx) => {
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
