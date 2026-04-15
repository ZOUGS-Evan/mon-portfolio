import React from 'react'

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-text">
        Disponible pour un projet, un stage ou une collaboration —
        n'hésitez pas à me contacter !
      </p>

      <div className="contact-info">
        <p>📧 Email : <a href="mailto:zougs.evan@gmail.com">zougs.evan@gmail.com</a></p>
        <p>📍 Localisation : France</p>
        <p>💼 Étudiant en BTS SIO SLAM — Lycée des Chassagnes</p>
      </div>

      <h3 className="contact-subtitle">Réseaux</h3>
      <ul className="contact-socials">
        <li>🔗 GitHub : <a href="https://github.com/ZOUGS-Evan" target="_blank" rel="noopener noreferrer">github.com/ZOUGS-Evan</a></li>
        <li>💼 LinkedIn : <a href="https://www.linkedin.com/in/evan-zougs-5612b8339/" target="_blank" rel="noopener noreferrer">linkedin.com/in/evan-zougs</a></li>
      </ul>
    </div>
  )
}
