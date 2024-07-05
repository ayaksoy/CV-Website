import React from 'react';
import '../assets/css/Projects.css';

function Projects({ projects }) {
  return (
    <div className="projects">
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={index}>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
