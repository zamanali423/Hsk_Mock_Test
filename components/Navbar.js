import React from "react";
import "../css/navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Logo" width="140" height="30" className="me-2" />
            {/* <span className="fw-bold">HSK Mock</span> */}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="d-flex align-items-center">
              <a href="/login" className="btn me-2 btns">
                Log in / Sign up
              </a>
              {/* <a href="#" className="btn btns">
                
              </a> */}
              <select className="form-select ms-3" id="languageSelect">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
