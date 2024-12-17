import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer-section py-3">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>
                MADE WITH LOVE BY ME, MYSELF & I
                <i
                  class="fa-solid fa-heart ms-3"
                  style={{ color: "red", fontSize: "18px" }}
                ></i>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
