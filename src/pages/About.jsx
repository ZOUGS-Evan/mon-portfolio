import React from 'react'

export default function About() {
  return (
    <div className="about-container">

      <h2 className="about-title">À propos</h2>

      <div className="about-section">
        <p>
          Je m'appelle <strong>Evan Zougs</strong>. Je suis étudiant en 
          <strong> BTS SIO</strong> (Services Informatiques aux Organisations), 
          option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers).
        </p>

      </div>

      {/* FRAMEWORKS */}
      <h3 className="subtitle">Frameworks</h3>
      <ul className="skills-list">
        <li>Laravel</li>
        <li>React</li>
      </ul>

      {/* LANGUAGES */}
      <h3 className="subtitle">Langages</h3>
      <ul className="skills-list">
        <li>PHP</li>
        <li>SQL</li>
        <li>HTML / CSS</li>
        <li>JavaScript</li>
      </ul>

      {/* DATABASE SERVICES */}
      <h3 className="subtitle">Serveurs de Base de Données</h3>
      <ul className="skills-list">
        <li>SQL Server</li>
        <li>MariaDB</li>
      </ul>

      {/* TOOLS */}
      <h3 className="subtitle">Outils et environnement</h3>
      <ul className="skills-list">
        <li>GitLab et GitHub</li>
        <li>VS Code</li>
      </ul>

      {/* OBJECTIF */}
      <h3 className="subtitle">Objectif</h3>
      <p className="about-goal">
        Continuer à progresser dans le développement web, travailler sur des projets concrets
        et renforcer mes compétences full-stack afin de devenir un développeur complet 
        et polyvalent.
      </p>

    </div>
  );
}
