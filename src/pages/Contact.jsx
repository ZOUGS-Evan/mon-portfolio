import React from 'react'

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>

      <p className="contact-text">
        Si vous souhaitez me contacter pour un projet, une question ou une collaboration,
        voici mes informations personnelles :
      </p>

      <div className="contact-info">
        <p>📧 Email : <a href="mailto:zougs.evan@gmail.com">zougs.evan@gmail.com</a></p>
        <p>📍 Localisation : France</p>
        <p>💼 Étudiant en BTS SIO SLAM aux Chassagnes</p>
      </div>

      <h3 className="contact-subtitle">Réseaux</h3>
      <ul className="contact-socials">
        <li>🔗 GitHub : <a href="https://github.com/ZOUGS-Evan" target="_blank">github.com/ZOUGS-Evan</a></li>
        <li>💼 LinkedIn : <a href="https://linkedin.com/in/evan-zougs" target="_blank">linkedin.com/in/evan-zougs</a></li>
      </ul>
    </div>
  )
}
