// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-primary)]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mission />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;