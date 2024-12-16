import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my work.",
    },
    {
      title: "E-Commerce Website",
      description: "An online shopping platform built with React.",
    },
    {
      title: "To-Do App",
      description: "A simple task management tool using React hooks.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
