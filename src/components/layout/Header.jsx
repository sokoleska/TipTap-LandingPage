'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { label: 'How It Works?', href: '#how-it-works' },
    { label: 'Features', href: '#key-features' },
    { label: 'Competitor Table', href: '#competitor-table' },
    { label: 'User Story', href: '#user-stories' },
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-[#7AB5FF]/20 backdrop-blur-sm 
    bg-[linear-gradient(134.73deg,_#0B0A1A_-0.47%,_#11113390_50.24%,_#0D0D26_100.47%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-4"> 
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/src/assets/images/Original_Logo.svg" alt="Tip Tapp Logo" className="h-14 w-14" />
            <span className="ml-10 sm:mx-10 font-bold text-3xl text-white">Tip App</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#7AB5FF] hover:text-white transition-colors text-lg font-medium">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-4">
            <a href="#cta-buttons" className="hidden sm:inline-block">
              <button
                className="text-white text-lg px-6 py-2 rounded-2xl font-semibold border-2 border-[#ff6f6f]/90 bg-[#2d1421] shadow-[0px_0px_12px_0px_rgba(255,111,111,0.5)]
                hover:scale-105 transform transition-all hover:bg-white hover:shadow-[0_0_12px_0_rgba(255,111,111,0.9)] hover:text-[#2D1421] hover:font-semibold">
                Get Started
              </button>
            </a>

            {/* Burger only on mobile/tablet */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white p-2 bg-[#2d1421] shadow-[0px_0px_12px_0px_rgba(255,111,111,0.5)] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2 border-t border-[#7AB5FF]/20 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-[#7AB5FF] hover:text-white transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a href="#cta-buttons">
              <button
                className="sm:hidden w-full mt-4 px-6 py-2 text-white text-lg rounded-2xl font-semibold border-2 border-[#ff6f6f]/90 bg-[#2d1421] shadow-[0px_0px_12px_0px_rgba(255,111,111,0.5)]
            hover:scale-105 transform transition-all hover:bg-white hover:shadow-[0_0_12px_0_rgba(255,111,111,0.9)] hover:text-[#2D1421] hover:font-semibold">
                Get Started
              </button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}