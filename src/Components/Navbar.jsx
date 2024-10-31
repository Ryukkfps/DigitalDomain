import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/digital domain.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand mr-auto" to="/">
          <img
            src={logo} 
            alt="Logo"
            style={{ width: '50px', height: '50px' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center ml-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#companies">
                OUR COMPANIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-dark ml-3">SHOP NOW</button>
      </div>
    </nav>
  );
}

export default Navbar;
