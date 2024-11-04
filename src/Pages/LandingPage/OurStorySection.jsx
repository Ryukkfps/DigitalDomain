import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import image from "../../assets/pic2.jpg";
// import "./OurStorySection.css"; // Optional: for any additional custom styling
import { useNavigate } from "react-router-dom";

const OurStorySection = () => {
const navigate = useNavigate();

const handleclick =() =>
{
  navigate("/About");
}

  return (
    <div
      className="our-story-section py-5 text-center"
      style={{ backgroundColor: "#edf4ed" }}
    >
      <div className="container d-flex gap-2">
        <img
          src={image} // Replace with actual path to the image
          alt=""
          className="img-fluid mb-3"
          style={{ maxWidth: "50%" }}
        />
        <div>
          <h2 className="font-weight-bold">Our Story</h2>
          <p className="mx-auto" style={{ maxWidth: "600px" }}>
            We started in the year 1993 and today we are one of the oldest IT
            Hardware and software providers in Uttar Pradesh. We believe that
            Our mission is to empower businesses with cutting-edge technology
            solutions that enhance efficiency, productivity, and innovation. We
            are committed to providing reliable and high-quality IT hardware
            products that meet the evolving needs of our customers, while
            fostering long-term partnerships built on trust and exceptional
            service.</p>
            <p>
            Our vision is to be the leading provider of innovative IT
            hardware solutions, recognized for our commitment to excellence,
            customer satisfaction, and technological advancement. We strive to
            continuously push the boundaries of what's possible in the industry,
            driving digital transformation and empowering businesses to thrive
            in the ever-evolving digital landscape.
          </p>
          <button className="btn btn-success mt-3" onClick={handleclick}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
