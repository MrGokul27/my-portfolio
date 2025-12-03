import { useEffect, useState } from "react";
import jpDark from "../images/JP-dark.png";
import jpLight from "../images/JP-light.png";
import lightThemeLogo from "../images/bulb-lightmode.png";
import darkThemeLogo from "../images/bulb-darkmode.png";
import "../css/home.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  // };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* Theme Toggle Button */}
      <section id="home" className="hero-section px-lg-5 px-3 poppins">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 parallax-effect">
              <div className="position-relative">
                <button
                  className="theme-toggle-btn"
                  // onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <img src={darkThemeLogo} alt="" className="img-fluid" />
                  ) : (
                    <img src={lightThemeLogo} alt="" className="img-fluid" />
                  )}
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="py-lg-5 py-3 text-md-end text-start mt-lg-5">
                {theme === "light" ? (
                  <img src={jpLight} alt="" className="img-fluid jp-img" />
                ) : (
                  <img src={jpDark} alt="" className="img-fluid jp-img" />
                )}
                <h2 className="bradleyHand">
                  <span>I AM</span> GOKULANATH
                </h2>
                <p className="mt-4">
                  Frontend Developer with "2+ years" of experience building
                  responsive, user-focused web applications. Proficient in
                  React.js, Redux, JavaScript, Bootstrap 5, HTML,
                  and CSS, with a solid grasp of front-end development
                  principles, UI/UX best practices, and modern development
                  workflows.
                </p>
                <div className="d-md-flex align-items-center justify-content-end mt-md-5 mt-3">
                  <div className="resume-button me-md-5 mt-md-0 mt-4 text-md-end text-center">
                    <a
                      href="/Gokulanath-resume.pdf"
                      download="Gokulanath_Resume"
                      className="btn dark-resume-btn"
                    >
                      Resume
                      <i
                        className="fas fa-cloud-download-alt ms-3"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div className="social-icons text-md-end text-center mt-md-0 mt-4">
                    <a
                      href="https://www.linkedin.com/in/gokulanath-jp-464465261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/MrGokul27?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/mr_gokul_27/profilecard/?igsh=d3JveXd5dXAzZmZj"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://wa.me/qr/OXQMTD3OIV24G1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
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

      {/* Other Components */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
