// src/components/Projects.tsx
import React from 'react';
import "./Home.css";

interface Project {
  title: string; 
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "snake game 🐍",
    description: "This project is still under develeopment.",
    link: "https://snake-game-955f6.web.app",
  },
  //{
   // title: "Special birthday card for a special friend 💝",
   // description: "Project descritpion goes here.",
    //link: "https://birthdaycard26.web.app",
  //},
  {
    title: "chess game",
    description: "This project is as good as finished. There a still a few bugs that need to be fixed.",
    link: "https://chess-85331.web.app",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className='project' key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
      </section>
  );
};
export default Projects;