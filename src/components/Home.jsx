import { useEffect, useState } from "react";
import myImageDark from "../images/Profile.png";
import myImageLight from "../images/Profile (1).png";
import jpDark from "../images/JP-dark.png";
import jpLight from "../images/JP-light.png";
import lightThemeLogo from "../images/bulb-lightmode.png";
import darkThemeLogo from "../images/bulb-darkmode.png";
import "../css/home.css"; // Include the updated CSS file
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

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
      <section id="home" className="hero-section px-md-5 px-3 bradleyHand">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 parallax-effect">
              <div className="position-relative">
                <button
                  className="theme-toggle-btn"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <img src={darkThemeLogo} alt="" className="img-fluid" />
                  ) : (
                    <img src={lightThemeLogo} alt="" className="img-fluid" />
                  )}
                </button>
              </div>
              {/* <div className="text-center">
                {theme === "light" ? (
                  <img src={myImageLight} alt="" className="img-fluid" />
                ) : (
                  <img src={myImageDark} alt="" className="img-fluid" />
                )}
              </div> */}
            </div>
            <div className="col-md-6">
              <div className="py-5 text-end mt-md-5">
                {theme === "light" ? (
                  <img src={jpLight} alt="" className="img-fluid" />
                ) : (
                  <img src={jpDark} alt="" className="img-fluid" />
                )}
                <h2>
                  <span>I AM</span> GOKULANATH
                </h2>
                <p className="mt-4">
                  Results-driven Web Developer with 1+ years of experience in
                  creating responsive, user-centric websites and applications.
                  Skilled in ReactJS, JavaScript, Bootstrap 5, HTML, CSS. Adept
                  at optimizing website performance, collaborating with
                  cross-functional teams, and delivering projects on time with a
                  focus on scalability and aesthetics.
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
                      href="https://www.instagram.com/yourprofile"
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
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
