'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 border-t border-white/5">
      
      <div className="max-w-4xl w-full text-center z-10 space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500">
            Ready to create impact?
          </h2>
          <p className="text-xl text-gray-400">Ready to join your team.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          <motion.a 
            href="tel:+84941646254"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="p-5 bg-white/5 rounded-full border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300 animate-[wiggle_1s_ease-in-out_infinite] hover:animate-none">
              <Phone className="w-8 h-8 text-white group-hover:text-emerald-400" />
            </div>
            <span className="text-lg text-gray-300 group-hover:text-white transition-colors">0941 646 254</span>
          </motion.a>

          <motion.a 
            href="mailto:tranquocthuan2003@gmail.com"
            whileHover={{ y: -10 }}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="p-5 bg-white/5 rounded-full border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
              <Mail className="w-8 h-8 text-white group-hover:text-blue-400 group-hover:animate-bounce" />
            </div>
            <span className="text-lg text-gray-300 group-hover:text-white transition-colors">tranquocthuan2003@gmail.com</span>
          </motion.a>

          <motion.div 
            className="flex flex-col items-center gap-3 cursor-default"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-5 bg-white/5 rounded-full border border-white/10">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <span className="text-lg text-gray-300">HCM, Viet Nam</span>
          </motion.div>

        </div>

      </div>

      <footer className="absolute bottom-8 w-full text-center text-gray-600 text-sm">
        <p>Copyright 2026 - Designed by Tran Quoc Thuan</p>
      </footer>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

    </section>
  )
}
