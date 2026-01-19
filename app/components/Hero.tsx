'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Facebook } from 'lucide-react'
import Image from 'next/image'
import avatar from '../../public/unnamed.jpg'

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#050505] pt-20">
      
      {/* Background Abstract Waves - Represented as blurred gradients for performance/aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* SVG Wave Line */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M-100 450 C 200 450, 400 200, 720 450 C 1040 700, 1240 450, 1540 450" stroke="url(#grad1)" strokeWidth="2" />
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#8b5cf6" />
               <stop offset="100%" stopColor="#f97316" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center w-full max-w-7xl">
        
        {/* LEFT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8 lg:items-start text-center lg:text-left"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white">
              Hello,
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-xs mx-auto lg:mx-0 leading-relaxed">
              Delivering efficient, scalable solutions to transform your tech vision into reality.
            </p>
          </div>

          {/* Roles List with Connector Lines Visualization */}
          <div className="flex flex-col gap-6 relative pl-4 lg:pl-0">
             <RoleItem text="Web Developer" delay={0.3} />
          </div>
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Central Image Container */}
          <div className="w-[300px] h-[400px] md:w-[380px] md:h-[480px] relative rounded-t-full rounded-b-[200px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm shadow-[0_0_50px_rgba(139,92,246,0.15)] flex items-end justify-center">
             {/* Placeholder for User Image - Using a gradient silhouette if no image provided */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
             <div className="w-[90%] h-[95%] bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-full rounded-b-[100px] relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-serif opacity-30 text-8xl select-none group-hover:opacity-50 transition-opacity">
                    YOU
                 </div>
                 {/* Replace this Img tag with user's actual image if available */}
                 <Image src={avatar} alt="Tran Quoc Thuan" fill className="object-cover" />
             </div>
             
             {/* Decorative Connectors */}
             <div className="absolute top-1/2 -left-20 w-20 h-[1px] bg-gradient-to-r from-transparent to-white/20 hidden lg:block" />
             <div className="absolute top-1/2 -right-20 w-20 h-[1px] bg-gradient-to-l from-transparent to-white/20 hidden lg:block" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-12 lg:items-end text-center lg:text-right"
        >
          {/* Name */}
          <div className="space-y-2">
            <h2 className="text-5xl font-light text-white">I am</h2>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
              Tran Quoc <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500">Thuan</span>
            </h2>
          </div>

          {/* Social Connectors - Abstracted as a visual path */}
          <div className="flex lg:flex-col gap-6 items-center lg:items-end justify-center">
            
            <SocialItem icon={<Github className="w-5 h-5" />} label="GitHub" href="https://github.com/Thuannnnnnn" delay={0.5} />
            <div className="h-8 w-[1px] bg-gray-700 hidden lg:block mr-5" />
            
            <SocialItem icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" href="https://www.linkedin.com/in/trần-quốc-thuận-2606422a9/" delay={0.6} />
            <div className="h-8 w-[1px] bg-gray-700 hidden lg:block mr-5" />

            <SocialItem icon={<Facebook className="w-5 h-5" />} label="Facebook" href="https://www.facebook.com/thuaniubinhnhieulam" delay={0.7} />

          </div>
        </motion.div>

      </div>
    </section>
  )
}

function RoleItem({ text, delay }: { text: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4 group"
    >
      <div className="text-lg font-light text-gray-300 group-hover:text-white transition-colors">
        {text}
      </div>
      {/* Connector Line Graphic */}
      <div className="w-12 h-[1px] bg-gray-700 relative overflow-hidden hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-transparent w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      </div>
      <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-violet-500 transition-colors hidden lg:block" />
    </motion.div>
  )
}

function SocialItem({ icon, label, href, delay }: { icon: React.ReactNode, label: string, href: string, delay: number }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4 group cursor-pointer"
    >
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors hidden lg:block">{label}</span>
      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-violet-500 group-hover:border-violet-500 transition-all duration-300 shadow-lg">
        {icon}
      </div>
    </motion.a>
  )
}
