'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-6 z-[101] shadow-2xl shadow-violet-500/20 overflow-hidden"
          >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500">
                  Contact Me
                </h3>
                <p className="text-sm text-gray-400">Let's connect and build something.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6 relative z-10">
              
              {/* Contact Items */}
              <div className="space-y-4">
                <ContactItem 
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value="tranquocthuan2003@gmail.com"
                  href="mailto:tranquocthuan2003@gmail.com"
                />
                <ContactItem 
                  icon={<Phone className="w-5 h-5" />}
                  label="Phone"
                  value="0941 646 254"
                  href="tel:+84941646254"
                />
                <ContactItem 
                  icon={<MapPin className="w-5 h-5" />}
                  label="Location"
                  value="HCM, Viet Nam"
                />
              </div>

              <div className="h-px bg-white/10 my-4" />

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Social Profiles</p>
                <div className="flex justify-center gap-6">
                  <div className="flex justify-center gap-6">
                    <SocialLink 
                      href="https://github.com/Thuannnnnnn" 
                      icon={<Github className="w-5 h-5" />} 
                      color="hover:text-white hover:bg-gray-800"
                    />
                    <SocialLink 
                      href="https://www.linkedin.com/in/trần-quốc-thuận-2606422a9/" 
                      icon={<Linkedin className="w-5 h-5" />} 
                      color="hover:text-white hover:bg-[#0077b5]"
                    />
                    <SocialLink 
                      href="https://www.facebook.com/thuaniubinhnhieulam" 
                      icon={<Facebook className="w-5 h-5" />} 
                      color="hover:text-white hover:bg-[#1877F2]"
                    />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    // @ts-ignore
    <Wrapper 
      href={href}
      className={`flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group ${href ? 'cursor-pointer hover:bg-white/10' : ''}`}
    >
      <div className="p-2 bg-white/5 rounded-lg text-gray-300 group-hover:text-violet-400 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase font-medium">{label}</div>
        <div className="text-gray-200 font-medium group-hover:text-white transition-colors">{value}</div>
      </div>
    </Wrapper>
  )
}

function SocialLink({ href, icon, color }: { href: string, icon: React.ReactNode, color: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${color}`}
    >
      {icon}
    </a>
  )
}
