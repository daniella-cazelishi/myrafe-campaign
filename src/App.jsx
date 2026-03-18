import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrackRecord from './components/TrackRecord'
import Vision from './components/Vision'
import Community from './components/Community'
import FAB from './components/FAB'

function App() {
  return (
    <div className="min-h-screen bg-[#F9F6EE]">
      <Navbar />
      <main>
        <Hero />
        <TrackRecord />
        <Vision />
        <Community />
      </main>
      <FAB />
      
      <footer className="py-12 bg-white border-t border-brand-blue/5 text-center">
        <p className="text-brand-blue/40 text-sm font-medium">
          © 2026 Myrafe Campaign for Barangay Captain. All rights reserved. <br />
          Sustained Progress for Brgy Ingas, Infanta, Quezon.
        </p>
      </footer>
    </div>
  )
}

export default App

