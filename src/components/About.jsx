import React from "react";
import "../css/about.css";
import curveBend1 from "../images/curve-arrow-1.svg";
import curveBend2 from "../images/curve-arrow-2.svg";
import myImageAbout from "../images/myImageAbout.png";

const About = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="about" className="about-section p-md-5 p-3 bebasNeue">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bradleyHand">
            <h1 className="about-me">ABOUT ME</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-style-txt bradleyHand">
              <p>
                My Qualifications
                <img src={curveBend1} alt="" className="mt-3" />
              </p>
            </div>
            <div className="bachelors-degree mt-md-5">
              <h2 className="mb-3">B.Tech. in Information Technology</h2>
              <h3 className="mb-3">
                Sri Manakula Vinayagar Engineering College, Puducherry, India
              </h3>
              <h4>( 2018 - 2022 )</h4>
            </div>
            <div className="higher-school-degree mt-md-5">
              <h2 className="mb-3">HSC (Higher Secondary Education)</h2>
              <h3 className="mb-3">
                CK School Of Practical Knowledge, Cuddalore, Tamil Nadu, India
              </h3>
              <h4>( 2016 - 2018 )</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <img src={myImageAbout} alt="" className="img-fluid" />
            </div>
            <div className="text-center">
              <p className="about-style-txt bradleyHand">
                Me
                <img src={curveBend2} alt="" className="ms-3 mb-4" />
              </p>
            </div>
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

export default About;
