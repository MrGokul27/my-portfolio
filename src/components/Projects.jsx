import React from "react";
import "../css/project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectImage1 from "../images/project-image-1.png";
import projectImage3 from "../images/project-image-2.png";
import projectImage2 from "../images/project-image-3.png";

const Projects = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("contact");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      image: projectImage1,
      title: "CK Edge",
      description: "CK Edge provides high-quality skill development courses to help you achieve your career goals.",
    },
    {
      image: projectImage2,
      title: "Zenopus",
      description: "Zen Opus, is a contemporary publishing house that acquired M/s Bookpub, a respected name in Gujarati literature.",
    },
    {
      image: projectImage3,
      title: "Ive's Clothing",
      description: "Ive's Clothing is an online store featuring trendy apparel and accessories for every occasion and style.",
    },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="projects-section p-lg-5 p-3 poppins">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bradleyHand">
            <h1 className="section-heading-underline">MY WORKS</h1>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <Slider {...settings}>
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="card projects-card p-3 mt-md-5 mt-3 slide">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid"
                    />
                    <h3 className="mt-3">{project.title}</h3>
                    <p className="mt-3" style={{ height: "80px" }}>{project.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
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
