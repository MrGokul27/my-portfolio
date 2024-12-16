import { useEffect, useState } from "react";
import myImageDark from "../images/Profile.png";
import myImageLight from "../images/Profile (1).png";
import jpDark from "../images/JP-dark.png";
import jpLight from "../images/JP-light.png";
import lightThemeLogo from "../images/bulb-lightmode.png";
import darkThemeLogo from "../images/bulb-darkmode.png";
import "../css/home.css";
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

      <section id="home" className="hero-section px-md-5 px-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
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
              <div className="text-center">
                {theme === "light" ? (
                  <img src={myImageLight} alt="" className="img-fluid" />
                ) : (
                  <img src={myImageDark} alt="" className="img-fluid" />
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="py-5 text-end mt-5">
                {theme === "light" ? (
                  <img src={jpLight} alt="" className="img-fluid" />
                ) : (
                  <img src={jpDark} alt="" className="img-fluid" />
                )}
                <h2>
                  <span>I AM</span> GOKULANATH
                </h2>
                <p className="mt-4">
                  Creative Web Developer with 1+ year of experience and a
                  passion for developing user-friendly websites. Collaborated
                  with a team of developers to implement responsive web design,
                  ensuring optimal user experience across different devices and
                  screen sizes.
                </p>
                <div className="d-flex align-items-center justify-content-end mt-md-5 mt-3">
                  <div className="resume-button me-5">
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
                  <div className="social-icons">
                    <a
                      href="https://www.instagram.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gokulanath-jp-464465261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://wa.me/yourphonenumber"
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
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
