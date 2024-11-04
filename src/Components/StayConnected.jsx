import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StayConnected =() => {
  const navigate = useNavigate();

  const handleClick =() =>{
    navigate("/ContactUs");
  }
    return (
        <Container
        fluid
        className="d-flex align-items-center justify-content-center mt-5"
        style={{ height: "30vh", backgroundColor: "#0a0f0a" }}
      >
        <div className="text-center">
          <hr
            style={{
              width: "50px",
              borderTop: "2px solid #4CAF50",
              margin: "0 auto 10px",
            }}
          />
          <h2 style={{ color: "#fff", fontWeight: "bold" }}>
            Stay Connected with Digital Domain
          </h2>
          <p style={{ color: "white" }}>
            Sign up for our newsletter to receive updates on the latest
            products, deals, and tech trends.
          </p>
          <button className="btn custom-btn mt-3 " onClick={handleClick}>Get In Touch</button>
        </div>
      </Container>
    );
}
export default StayConnected;