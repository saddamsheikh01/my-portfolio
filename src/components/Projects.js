import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <h3>Project 1</h3>
          <p>A cool project description here.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Another awesome project description here.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
