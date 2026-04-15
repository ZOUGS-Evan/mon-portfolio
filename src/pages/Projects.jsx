import React from "react";

export default function Projects() {
  return (
    <div className="project-container">
      <h2 className="project-title">Projets</h2>
      <p className="project-text">
        Voici quelques exemples de projets sur lesquels j’ai travaillé pour
        pratiquer et développer mes compétences :
      </p>


      <div className="projects-grid">
        {/* Card pour l'App de Planning */}
        <div className="project-card">
          <h3>App de Planning</h3>
          <p>
            Application de gestion de planning permettant d’organiser et suivre
            les tâches efficacement.
          </p>

          <a
            href="https://evanzougs.fr/App-de-planning/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            🚀 Voir le projet
          </a>
        </div>



        {/* Nouvelle card pour le site de banque en ligne */}
        <div className="project-card">
          <h3>Site de Banque en Ligne</h3>
          <p>
            Création d'un site web pour une banque en ligne, incluant des
            fonctionnalités sécurisées pour la gestion des comptes et des
            transactions.
          </p>

          <a
            href="https://evanzougs.fr/mabanque"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            🚀 Voir le projet
          </a>
        </div>
      </div>
    </div>
  );
}
