import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import HowItWorks from './components/sections/How-It-Works.jsx'
import KeyFeatures from './components/sections/Key-Features.jsx'
import CompetitorTable from './components/sections/Competitor-Table.jsx'
import UserStories from './components/sections/User-Story.jsx'
import Reviews from './components/sections/Reviews.jsx'
import CTAButtons from './components/sections/CTA-Buttons.jsx'
import Footer from './components/layout/Footer.jsx'
import About from '/src/pages/About.jsx'
import Contact from '/src/pages/Contact.jsx'
import Demo from '/src/pages/Demo.jsx'
import Terms from '/src/pages/Terms.jsx'
import Help from '/src/pages/Help.jsx'

function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-7xl">
        <Hero />
        <HowItWorks />
        <KeyFeatures />
        <CompetitorTable />
        <UserStories />
        <Reviews />
        <CTAButtons />
      </main>
    </>
  )
}

export default function App() {

  return (
    <div className="min-h-screen text-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </div>
  )
}
