import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import image from "../../assets/pic2.jpg";
// import "./OurStorySection.css"; // Optional: for any additional custom styling

const OurStorySection = () => {
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
            hardware and software providers in Uttar Pradesh. We believe that
            our mission is to empower businesses with cutting-edge technology
            solutions that enhance efficiency, productivity, and innovation.
          </p>
          <button className="btn btn-success mt-3">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
