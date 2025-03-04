import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import "../css/footer.css"; // Custom CSS file
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <hr />
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Footer Links */}
            <div className="col-md-6 footer-links">
              <a href="/about-us">About Us</a>
              <span className="separator">|</span>
              <a href="#">Pricing</a>
              <span className="separator">|</span>
              <a href="/contact-us">Contact Us</a>
            </div>

            {/* Right: Social Media Links */}
            <div className="col-md-6 text-md-end social-icons">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faWeixin} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>

            <div className="col-md-6 footer-links">
              <a href="/terms-and-conditions" target="_blank">
                Terms of Use
              </a>
              <span className="separator">|</span>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p
            style={{ textAlign: "center", color: "#aba3a7" }}
            onClick={() => (window.location.href = "/profile")}
          >
            Copyright © 2025 HSK Prep. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
