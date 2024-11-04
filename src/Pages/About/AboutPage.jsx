import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image from "../../assets/pic2.jpg";
import keyboardImage from "../../assets/keyboardwithledlights.jpeg";
import StayConnected from "../../Components/StayConnected";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function AboutPage() {

  const location = useLocation();

  // Scroll to top when the component mounts or location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ height: "40vh", backgroundColor: "#0a0f0a" }}
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
            Welcome to Digital Domain, <br /> Prayagraj,
          </h1>
          <p style={{color:"White"}}>
          where gaming meets innovation! We are passionate gamers and tech enthusiasts dedicated to providing you with the ultimate gaming experience. Our mission is to empower players with high-performance gaming PCs tailored to their unique needs and preferences.
          </p>
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
            <p style={{ color: "#333", lineHeight: "1.6", fontSize: "15px" }}>
              Digital Domain is your hub for cutting-edge technology, offering a
              diverse range of gaming PCs, workstations, laptops, and computer
              peripherals to cater to retail customers and wholesale clients
              alike.
              <br />We understand that every gamer is different. Whether you're a casual player or a competitive esports athlete, our expert team is here to help you choose the perfect setup. We offer a wide range of customizable options, from cutting-edge hardware to stylish designs, ensuring that your gaming rig is not just powerful, but also a reflection of your personality.
            </p>
            <p style={{ color: "#333", lineHeight: "1.6", fontSize: "15px" }}>
              Digital Domain prides itself on delivering premium technology
              solutions and exceptional service, exceeding client expectations
              with every interaction.
              <br />We pride ourselves on our commitment to quality and customer satisfaction. Our PCs are built using top-of-the-line components, rigorously tested for performance and reliability. Plus, our knowledgeable staff is always available to provide support, advice, and tips to enhance your gaming experience.
            </p>
          </Col>
          <img src={image} style={{ width: "100vw", maxHeight: "50vh" }} />
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center mt-5"
        style={{ height: "50vh", backgroundColor: "#0a0f0a" }}
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
            <p style={{ color: "#333", lineHeight: "1.6", fontSize: "15px" }}>
              We started in the year 1993 and today we are one of the oldest IT
              Hardware and software providers in Uttar Pradesh. We believe that
              Our mission is to empower businesses with cutting-edge technology
              solutions that enhance efficiency, productivity, and innovation.
              We are committed to providing reliable and high-quality IT
              hardware products that meet the evolving needs of our customers,
              while fostering long-term partnerships built on trust and
              exceptional service.
            </p>
            <p style={{ color: "#333", lineHeight: "1.6", fontSize: "15px" }}>
              Our vision is to be the leading provider of innovative IT hardware
              solutions, recognized for our commitment to excellence, customer
              satisfaction, and technological advancement. We strive to
              continuously push the boundaries of what's possible in the
              industry, driving digital transformation and empowering businesses
              to thrive in the ever-evolving digital landscape.
            </p>
            <p style={{color:"#333", lineHeight:"1.6", fontSize: "15px"}}>
            Join our community of gamers and elevate your play with Digital Domain, Prayagraj. Explore our selection today and discover why we're the go-to destination for gaming PCs!
            </p>
          </Col>
        </Row>
      </Container>
      {/* <Container
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
          <h2 style={{ color: "#fff", fontWeight: "bold" }}>
            Stay Connected with Digital Domain
          </h2>
          <p style={{ color: "white" }}>
            Sign up for our newsletter to receive updates on the latest
            products, deals, and tech trends.
          </p>
          <button className="btn custom-btn mt-3 ">Get In Touch</button>
        </div>
      </Container> */}
      <StayConnected/>
    </>
  );
}

export default AboutPage;
