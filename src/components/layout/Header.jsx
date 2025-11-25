'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import '/src/styles.css'

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
    <header className="border-b border-purple-500/20 backdrop-blur-sm sticky top-0 z-50
    bg-[linear-gradient(134.73deg,_#1c0f3a66_-0.47%,_#24144f66_50.24%,_#2d196866_100.47%)]">
      <div className="max-w-7xl mx-auto px-10 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-p2">
            <img src="/src/assets/images/Original_Logo.svg" alt="Tip App Logo" className="h-15 w-15" />
            <span className="mx-10 font-bold text-3xl text-white">Tip App</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-lg font-medium">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href="#cta-buttons" className="hidden sm:inline-block">
              <button
                className="text-white px-6 py-2 rounded-full font-semibold border-2 border-[#a7d8f0] bg-gradient-to-r from-[#280b50] to-[#7e3cd9] hover:scale-105 transform transition-all hover:bg-[linear-gradient(125.77deg,_#b8f3ff_-10.8%,_#7e3cd9_111.8%)] hover:shadow-[0_0_10px_0_#b8f3ff] hover:text-[#280b50] hover:text-semibold">
                Get Started
              </button>
            </a>

            <button
              onClick={toggleMenu}
              className="menu-toggle text-white p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t border-purple-500/20 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              className="w-full mt-4 text-white px-6 py-2 rounded-full font-semibold border-2 border-[#a7d8f0] mobile-cta bg-gradient-to-r from-[#280b50] to-[#7e3cd9] hover:scale-105 transform transition-all hover:bg-[linear-gradient(125.77deg,_#b8f3ff_-10.8%,_#7e3cd9_111.8%)] hover:shadow-[0_0_10px_0_#b8f3ff] hover:text-[#280b50] hover:text-semibold">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}