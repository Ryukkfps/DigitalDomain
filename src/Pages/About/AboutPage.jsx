import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/pic2.jpg";
import keyboardImage from '../../assets/keyboardwithledlights.jpeg'

function AboutPage() {
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
            Welcome to Digital Domain, <br /> Prayagraj
          </h1>
        </div>
      </Container>

      <Container className="mt-5" style={{ maxWidth: "800px" }}>
        <hr
          style={{
            width: "50px",
            borderTop: "2px solid #4CAF50",
            margin: "0 0 10px",
          }}
        />

        <Row>
          <Col md={4}>
            <h2 style={{ fontWeight: "bold", color: "#1a1a1a" }}>
              Discover the Essence of Digital Domain
            </h2>
          </Col>
          <Col md={8}>
            <p style={{ color: "#333", lineHeight: "1.6", fontSize: "1.1rem" }}>
              Digital Domain is your hub for cutting-edge technology, offering a
              diverse range of gaming PCs, workstations, laptops, and computer
              peripherals to cater to retail customers and wholesale clients
              alike.
            </p>
            <p style={{ color: "#333", lineHeight: "1.6", fontSize: "1.1rem" }}>
              Digital Domain prides itself on delivering premium technology
              solutions and exceptional service, exceeding client expectations
              with every interaction.
            </p>
          </Col>
          <img src={image} style={{ width: "100vw", maxHeight: "50vh" }} />
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center mt-5"
        style={{ height: "50vh", backgroundColor: "#0a0f0a"}}
      >
        <Row>
          <Col md={4}>
            <div className="text-center">
              <hr
                style={{
                  width: "50px",
                  borderTop: "2px solid #4CAF50",
                  margin: "0 auto 10px",
                }}
              />
              <h3 style={{ color: "white" }}>Our Mission</h3>
              <p style={{ color: "white" }}>
                Empowering individuals and businesses with innovative technology
                solutions for enhanced productivity and enjoyment.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center">
              <hr
                style={{
                  width: "50px",
                  borderTop: "2px solid #4CAF50",
                  margin: "0 auto 10px",
                }}
              />

              <h3 style={{ color: "White" }}>Our Values</h3>
              <p style={{ color: "White" }}>
                At Digital Domain, integrity, excellence, and customer
                satisfaction are at the core of everything we do.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center">
              <hr
                style={{
                  width: "50px",
                  borderTop: "2px solid #4CAF50",
                  margin: "0 auto 10px",
                }}
              />

              <h3 style={{ color: "white" }}>Our Vision</h3>
              <p style={{ color: "white" }}>
                To be the go-to destination for all computer technology needs,
                setting the standard for quality and service in the industry.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Our Story Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={keyboardImage} // replace with your image source
              alt="Keyboard"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>
          <Col md={6}>
            <hr
              style={{
                width: "50px",
                borderTop: "2px solid #4CAF50",
                margin: "0 0 10px",
              }}
            />
            <h2 style={{ fontWeight: "bold", color: "#1a1a1a" }}>Our Story</h2>
            <p style={{ color: "#333", lineHeight: "1.6", fontSize: "1.1rem" }}>
              We started in the year 1993 and today we are one of the oldest IT
              Hardware and software providers in Uttar Pradesh. We believe that
              Our mission is to empower businesses with cutting-edge technology
              solutions that enhance efficiency, productivity, and innovation.
              We are committed to providing reliable and high-quality IT
              hardware products that meet the evolving needs of our customers,
              while fostering long-term partnerships built on trust and
              exceptional service.
            </p>
            <p style={{ color: "#333", lineHeight: "1.6", fontSize: "1.1rem" }}>
              Our vision is to be the leading provider of innovative IT hardware
              solutions, recognized for our commitment to excellence, customer
              satisfaction, and technological advancement. We strive to
              continuously push the boundaries of what's possible in the
              industry, driving digital transformation and empowering businesses
              to thrive in the ever-evolving digital landscape.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;
