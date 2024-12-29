import React, { useRef } from "react";
import "../css/project.css";
import projectImage1 from "../images/project-image-1.png";
import projectImage3 from "../images/project-image-2.png";

const Projects = () => {
  const sliderRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("contact");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    isDragging = true;
    sliderRef.current.style.cursor = "grabbing";
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging = false;
    sliderRef.current.style.cursor = "grab";
  };

  const projects = [
    {
      image: projectImage1,
      title: "CK Edge",
      description: "CK Edge provides high-quality skill development courses to help you achieve your career goals.",
    },
    {
      image: projectImage1,
      title: "Zenopus",
      description: "Zen Opus, is a contemporary publishing house that acquired M/s Bookpub, a respected name in Gujarati literature.",
    },
    {
      image: projectImage3,
      title: "Ive's Clothing",
      description: "Ive's Clothing is an online store featuring trendy apparel and accessories for every occasion and style.",
    },
    {
      image: projectImage1,
      title: "CK Edge",
      description: "CK Edge provides high-quality skill development courses to help you achieve your career goals.",
    },
    {
      image: projectImage1,
      title: "Zenopus",
      description: "Zen Opus, is a contemporary publishing house that acquired M/s Bookpub, a respected name in Gujarati literature.",
    },
    {
      image: projectImage3,
      title: "Ive's Clothing",
      description: "Ive's Clothing is an online store featuring trendy apparel and accessories for every occasion and style.",
    },
  ];

  return (
    <section id="projects" className="projects-section p-lg-5 p-3 bebasNeue">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bradleyHand">
            <h1 className="section-heading-underline">MY WORKS</h1>
          </div>
        </div>
        <div
          className="row mb-5 slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ cursor: "grab", overflow: "hidden" }}
        >
          <div className="col-12 slide-track">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-6 col-md-8 col-12">
                <div className="card projects-card p-3 mt-md-5 mt-3 slide">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                  <h3 className="mt-3">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <div className="down-arrow-container">
              <i
                className="fas fa-arrow-down"
                onClick={scrollToNextSection}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
