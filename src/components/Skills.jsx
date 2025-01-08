import React from "react";
import "../css/skill.css";
import skillImage1 from "../images/icons8-html-logo-48.png";
import skillImage2 from "../images/icons8-css-logo-48.png";
import skillImage3 from "../images/icons8-bootstrap-48.png";
import skillImage4 from "../images/icons8-react-100.png";
import skillImage5 from "../images/icons8-javascript-48.png";
import skillImage6 from "../images/icons8-github-50.png";
import skillImage7 from "../images/icons8-gitlab-48.png";

const Skills = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const skills = [
    { image: skillImage1, title: "HTML" },
    { image: skillImage2, title: "CSS" },
    { image: skillImage3, title: "BOOTSTRAP 5" },
    { image: skillImage4, title: "REACT JS" },
    { image: skillImage5, title: "JAVASCRIPT" },
    { image: skillImage6, title: "GITHUB" },
    { image: skillImage7, title: "GITLAB" },
  ];

  return (
    <section id="skills" className="skills-section p-lg-5 p-3 poppins">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="section-heading-underline bradleyHand">MY SKILLS</h1>
            <p className="mt-4">
              Proficient in Frontend Development using ReactJS, JavaScript,
              Bootstrap 5, HTML5, and CSS3, with expertise in creating responsive
              designs that ensure cross-browser compatibility and a mobile-first
              approach. Skilled in version control systems, including Git, GitHub,
              and GitLab, for efficient collaboration and project management.
            </p>
          </div>
        </div>

        <div className="row mt-3 mb-5 justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-3 col-6 d-flex justify-content-center skills-sec-card">
              <div className="card skills-card mt-4 border-0 rounded-0 d-flex flex-column justify-content-center align-items-center">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="img-fluid mb-2 w-50"
                />
                <p className="mb-0">{skill.title}</p>
              </div>
            </div>
          ))}
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

export default Skills;
