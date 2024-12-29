import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <section className="footer-section py-3 bradleyHand">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>
                MADE WITH LOVE BY ME, MYSELF & I
                <i
                  className="fa-solid fa-heart ms-3"
                  style={{ color: "red", fontSize: "18px" }}
                ></i>
              </h2>
            </div>
          </div>
        </div>
        {/* Scroll to Top Button */}
        {isVisible && (
          <div
            className="scroll-to-top"
            style={{
              position: "fixed",
              bottom: "10px",
              right: "20px",
              zIndex: "1000",
              cursor: "pointer",
              backgroundColor: "#000",
              borderRadius: "50%",
              padding: "12px 15px 8px 15px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            onClick={scrollToTop}
          >
            <i
              className="fa-solid fa-arrow-up"
              style={{ fontSize: "20px", color: "#fff" }}
            ></i>
          </div>
        )}
      </section>
    </>
  );
};

export default Footer;
