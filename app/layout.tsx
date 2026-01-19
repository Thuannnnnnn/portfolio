import type { Metadata } from 'next'
import { Dancing_Script, Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'The Code Journey | Tran Quoc Thuan',
  description: 'Portfolio of Tran Quoc Thuan - Fresher Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-50 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
