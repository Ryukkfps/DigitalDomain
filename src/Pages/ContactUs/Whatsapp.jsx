import React from "react";
import "./WhatsappButton.css"; // Ensure to create and style this CSS file accordingly
import WA from "../../assets/WhatsAppicon.png";

const WhatsappButton = () => {
  return (
    <div className="whatsapp-overlay">
      <div className="help-text">
        Need Help?{" "}
        <a
          href="https://wa.me/7387463609"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with us
        </a>
      </div>
      <a
        href="https://wa.me/7387463609"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="whatsapp-icon">
          <img src={WA} alt="WhatsApp" />
        </div>
      </a>
    </div>
  );
};
export default WhatsappButton;
