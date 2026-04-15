import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import VeilleInformatique from './pages/VeilleInformatique';
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
              Développeur web passionné, actuellement étudiant en <span className="accent">BTS SIO</span> option <span className="accent">SLAM</span>. <br />
              Mon objectif est de concevoir des applications web modernes, performantes et agréables à utiliser. <br />
            </p>
            <div className="hero-action">
              <a href="#projects" className="cta-button">Voir mes projets</a>
            </div>
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

	{/* Veille Informatique */}
	<section id="veille" className="section">
	  <VeilleInformatique />
	</section>

        {/* Contact */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  )
}
