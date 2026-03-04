import React from "react";

export default function Projects() {
  return (
    <div className="container">
      <h2>Projets</h2>
      <p>
        Voici quelques exemples de projets sur lesquels j’ai travaillé pour
        pratiquer et développer mes compétences :
      </p>

      <div className="projects-grid">
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
      </div>
    </div>
  );
}
