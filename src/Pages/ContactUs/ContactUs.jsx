import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import StayConnected from "../../Components/StayConnected";

const Contactus = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ height: "50vh", backgroundColor: "#0a0f0a" }}
      >
        <div className="text-center">
          <hr
            style={{
              width: "50px",
              borderTop: "2px solid #4CAF50",
              margin: "0 auto 10px",
            }}
          />
          <h1 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "bold" }}>
            Get in Touch with Digital
            <br />
            Domain, Prayagraj
          </h1>
        </div>
      </Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ height: "30vh", backgroundColor: "white" }}
      >
        <div className="text-center">
          <hr
            style={{
              width: "50px",
              borderTop: "2px solid #4CAF50",
              margin: "0 auto 10px",
            }}
          />
          <h1
            style={{ color: "black", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Reach Out to Us Today
          </h1>
          <p>
            Have any questions or inquiries? We're here to help.Contact us for
            all your computer needs!
          </p>
        </div>
      </Container>
      <Container className="d-flex align-items-center justify-content-center gap-5">
        <div style={{ maxWidth: "40vw" }}>
          <div
            className="mt-4"
            style={{
              border: "1px solid",
              borderColor: "#4a9a00",
              borderRadius: "10px",
            }}
          >
            <div className="mt-3" style={{ marginLeft: "2rem" }}>
              <h5>PHONE:</h5>
              <h5>+91-7387463609</h5>
              <h5>+91-8588990359</h5>
            </div>
          </div>
          <div
            className="mt-4"
            style={{
              border: "1px solid",
              borderColor: "#4a9a00",
              borderRadius: "10px",
            }}
          >
            <div className="mt-3" style={{ marginLeft: "2rem" }}>
              <h5>EMAIL:</h5>
              <h5>help@digitaldomain.in</h5>
            </div>
          </div>
          <div
            className="mt-4"
            style={{
              border: "1px solid",
              borderColor: "#4a9a00",
              borderRadius: "10px",
            }}
          >
            <div
              className="mt-3"
              style={{ marginLeft: "2rem", whiteSpace: "normal" }}
            >
              <h5>ADDRESS:</h5>
              <h5>
                31, Mahatma Gandhi Marg, Civil Lines, Prayagraj, Uttar Pradesh
                211001
              </h5>
            </div>
          </div>
          <div
            className="mt-4"
            style={{
              border: "1px solid",
              borderColor: "#4a9a00",
              borderRadius: "10px",
            }}
          >
            <div
              className="mt-3"
              style={{ marginLeft: "2rem", whiteSpace: "normal" }}
            >
              <h5>
                <a
                  href="https://www.instagram.com/digitaldomain.prayagraj/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" }}
                >
                  Follow us on Instagram
                </a>
              </h5>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ flex: "1", padding: "20px", backgroundColor: "#f0f9f0" }}
          >
            <form>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              >
                <div style={{ flex: "1" }}>
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  />
                </div>
                <div style={{ flex: "1" }}>
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label>Message *</label>
                <textarea
                  name="message"
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </Container>
      <div className="mt-5">
        <StayConnected />
      </div>
    </>
  );
};
export default Contactus;
