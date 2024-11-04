import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/digital domain.svg";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const handleNavigateto = () => {
    navigate("/ContactUs");
  };


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-navbar">
      <div className="container">
        <Link className="navbar-brand mr-auto" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "75px", height: "75px", borderRadius: "37.5px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ml-auto ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={() => setIsOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services" onClick={() => setIsOpen(false)}>
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OurCompanies" onClick={() => setIsOpen(false)}>
                OUR COMPANIES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs" onClick={() => setIsOpen(false)}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <button className="shop-now-btn" onClick={handleNavigateto}>SHOP NOW</button>
      </div>
    </nav>
  );
}

export default Navbar;
