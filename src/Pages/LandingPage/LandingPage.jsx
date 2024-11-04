import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./LandingPage.css";
import ServicesSection from "./ServicesSection";
import OurStorySection from "./OurStorySection";
import OurPortfolioSection from "./OurPortfolioSection";
import UpgradeTech from "./UpgradeTech";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import { useLocation, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when the component mounts or location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Function to navigate to Contact Us page
  const handleGetInTouchClick = () => {
    navigate("/ContactUs"); // Adjust the path if necessary
  };

  return (
    <>
      <div className="mainpage">
        <div className="landing-page">
          <h1>Your One-Stop Tech Store</h1>
          <p>
            Explore our wide range of gaming PCs, workstations, laptops, and
            computer peripherals.
          </p>
          <button className="btn custom-btn mt-3" onClick={handleGetInTouchClick}>
            Get In Touch
          </button>
        </div>
      </div>
      <ServicesSection />
      <OurStorySection />
      <OurPortfolioSection />
      <UpgradeTech />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default LandingPage;
