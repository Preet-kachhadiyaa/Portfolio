import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-11 mx-auto mt-4">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <div className="b-name">Portfolio</div>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#Navbar">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Experiance">
                      Experiance
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Project">
                      Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
