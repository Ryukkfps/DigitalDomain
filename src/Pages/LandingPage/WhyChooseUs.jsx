import React from "react";
import "./WhyChooseUs.css";
import image from '../../assets/keyboardwithledlights.jpeg'
import { CheckCircle } from "react-bootstrap-icons";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section d-flex align-items-center">
      <div className="why-choose-us-content">
        <h2>Why Choose Us</h2>
        <div className="feature">
          <CheckCircle className="icon" />
          <div>
            <h4>Quality Products</h4>
            <p>Offering top-notch computer systems and peripherals to enhance your computing experience.</p>
          </div>
        </div>
        <div className="feature">
          <CheckCircle className="icon" />
          <div>
            <h4>Customer Satisfaction</h4>
            <p>Dedicated to providing excellent customer service and ensuring your satisfaction with every purchase.</p>
          </div>
        </div>
      </div>
      <div className="why-choose-us-image">
        <img src={image} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
