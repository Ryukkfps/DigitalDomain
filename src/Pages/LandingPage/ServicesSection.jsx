import React from "react";
import "./ServicesSection.css";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p>
        Discover the diverse range of computer products and services we offer to
        meet your needs.
      </p>

      <div className="services-cards">
        <div className="service-card">
          <h3>01.</h3>
          <h4>Gaming PCs</h4>
          <p>High-performance gaming rigs for ultimate gaming experience.</p>
          <Link to="/Services">READ MORE</Link>
        </div>

        <div className="service-card">
          <h3>02.</h3>
          <h4>Workstations</h4>
          <p>
            Powerful workstations tailored for professional use and
            productivity.
          </p>
          <Link to="/Services">READ MORE</Link>
        </div>

        <div className="service-card">
          <h3>03.</h3>
          <h4>Laptops</h4>
          <p>Portable laptops for on-the-go productivity and entertainment.</p>
          <Link to="/Services">READ MORE</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
