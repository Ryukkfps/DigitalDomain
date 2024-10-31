import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p>Discover the diverse range of computer products and services we offer to meet your needs.</p>
      
      <div className="services-cards">
        <div className="service-card">
          <h3>01.</h3>
          <h4>Gaming PCs</h4>
          <p>High-performance gaming rigs for ultimate gaming experience.</p>
          <a href="#gaming">READ MORE</a>
        </div>
        
        <div className="service-card">
          <h3>02.</h3>
          <h4>Workstations</h4>
          <p>Powerful workstations tailored for professional use and productivity.</p>
          <a href="#workstations">READ MORE</a>
        </div>
        
        <div className="service-card">
          <h3>03.</h3>
          <h4>Laptops</h4>
          <p>Portable laptops for on-the-go productivity and entertainment.</p>
          <a href="#laptops">READ MORE</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
