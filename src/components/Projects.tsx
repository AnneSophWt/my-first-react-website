// src/components/Projects.tsx
import React from 'react';
import "./Home.css";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project Title</h3>
        <p>Project description goes here.</p>
        <a href="project-link">View Project</a>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
};

export default Projects;
