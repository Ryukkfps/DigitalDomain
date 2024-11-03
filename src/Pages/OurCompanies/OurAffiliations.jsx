import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portrait1 from "../../assets/portrait1.jpg"; // replace with your actual image path
import portrait2 from '../../assets/portrait2.jpg'

function AffiliationsSection() {
  return (
    <Container fluid className="py-5">
      <Row>
        <Col md={3} className="d-flex justify-content-center mt-3">
          <img
            src={portrait1} // replace with actual image
            alt="Placeholder"
            style={{
              width: "75%",
              height: "auto",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
            }}
          />
        </Col>
        <Col md={3} className="d-flex justify-content-center mt-5">
          <img
            src={portrait2} // replace with actual image
            alt="Placeholder"
            style={{
              width: "75%",
              height: "auto",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
            }}
          />
        </Col>
        <Col md={6}>
          <div className="affiliations-list">
            <h3 style={{ color: "#1a1a1a", fontWeight: "bold" }}>Our Affiliations:</h3>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>✔ HP – Registered Supplies Reseller, Registered Commercial Partner, HP World, Registered Consumer products partner, Registered GEM Partner</li>
              <li>✔ Lenovo – Authorised Reseller</li>
              <li>✔ Acer – Authorised Reseller, GEM Registered partner</li>
              <li>✔ Brother – Brother Channel 1 Partner, Registered GEM Partner.</li>
              <li>✔ Canon – Registered Supplies partner, Registered Commercial partner, Registered GEM Partner</li>
              <li>✔ Epson – Registered Supplies partner, Registered Commercial partner, Registered GEM partner</li>
              <li>✔ Peoplelink – Registered GEM Partner, Authorised Reseller</li>
              <li>✔ Eaton – Exclusive channel partner, Registered GEM reseller</li>
              <li>✔ BPE – Registered GEM Reseller</li>
              <li>✔ Elnova – Authorised Partner</li>
              <li>✔ Samsung – Authorised Reseller</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AffiliationsSection;
