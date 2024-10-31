import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./LandingPage.css";
import ServicesSection from "./ServicesSection";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import OurStorySection from "./OurStorySection";
import OurPortfolioSection from "./OurPortfolioSection";
import UpgradeTech from "./UpgradeTech";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <>
      <div className="mainpage">
        <div className="landing-page">
          <h1>Your One-Stop Tech Store</h1>
          <p>
            Explore our wide range of gaming PCs, workstations, laptops, and
            computer peripherals.
          </p>
          <button className="btn custom-btn mt-3 ">Get In Touch</button>
        </div>
      </div>
      <ServicesSection />
      <OurStorySection/>
      <OurPortfolioSection/>
      <UpgradeTech/>
      <WhyChooseUs/>
      <Testimonials/>
    </>
  );
};

export default LandingPage;
