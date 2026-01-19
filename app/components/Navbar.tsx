'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'
export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
    >
      {/* Logo */}
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <Image src={logo} alt="Tran Quoc Thuan" width={100} height={100} className="object-cover" />
      </div>

      {/* Center Menu */}
      <div className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-purple-500/5">
        <NavLink href="#about">About Me</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
      </div>

      {/* CTA Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-gradient-to-r from-violet-600 to-orange-500 rounded-full text-white font-medium shadow-lg shadow-violet-500/25"
      >
        Contact Me
      </motion.button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}
