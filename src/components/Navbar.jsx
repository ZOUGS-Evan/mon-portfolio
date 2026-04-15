import React from 'react'

export default function Navbar() {
  // Fonction qui fait défiler vers la section demandée
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand">Evan Zougs</div>

        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Accueil</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>À propos</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projets</a></li>
	  <li><a href="/veille" onClick={(e) => { e.preventDefault(); scrollToSection('veille') }}>Veille Informatique</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
