'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCFA]/90 backdrop-blur-md border-b border-[#EDE9E4]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm text-[#B08EC0] tracking-widest">
          dandy.dot
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-[#8C8078] hover:text-[#B08EC0] transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:dandycarreon.2001@gmail.com" className="text-sm px-5 py-2 rounded-full bg-[#B08EC0] text-white hover:bg-[#9B7AB0] transition-all duration-200">
              Hire Me
            </a>
          </li>
        </ul>
        <button className="md:hidden text-[#8C8078]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'X' : 'Menu'}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-[#EDE9E4] px-6 py-4 flex flex-col gap-4 bg-white">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-[#8C8078] hover:text-[#B08EC0]" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="mailto:dandycarreon.2001@gmail.com" className="text-sm px-5 py-2 rounded-full bg-[#B08EC0] text-white w-fit">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}