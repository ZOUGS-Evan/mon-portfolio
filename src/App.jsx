import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './styles/App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        {/* Accueil */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Bonjour, je suis <span className="accent">Evan Zougs</span>
            </h1>
            <p className="hero-subtitle">
              Développeur web passionné, actuellement en BTS SIO option SLAM. <br />
              J’aime concevoir des applications modernes, performantes et agréables à utiliser.
            </p>
          </div>
        </section>

        {/* À propos */}
        <section id="about" className="section">
          <About />
        </section>

        {/* Projets */}
        <section id="projects" className="section">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  )
}
