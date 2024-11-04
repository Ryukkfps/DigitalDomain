// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import comp1 from "../../assets/comp1.jpg";
// import comp2 from '../../assets/comp2.jpeg'
// import AffiliationsSection from "./OurAffiliations";
// import StayConnected from "../../Components/StayConnected";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const OurCompanies = () => {
//   const location = useLocation();

//   // Scroll to top when the component mounts or location changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);
//   return (
//     <>
//       <Container
//         fluid
//         className="d-flex align-items-center justify-content-center"
//         style={{ height: "40vh", backgroundColor: "white" }}
//       >
//         <div className="text-center">
//           <hr
//             style={{
//               width: "50px",
//               borderTop: "2px solid #4CAF50",
//               margin: "0 auto 10px",
//             }}
//           />
//           <h1
//             style={{ color: "black", fontSize: "2.3rem", fontWeight: "bold" }}
//           >
//             Our Companies
//           </h1>
//           <p>
//             Explore a world of creative solutions and innovation tailored to
//             your needs.
//           </p>
//         </div>
//       </Container>
//       <Container fluid className="py-5" style={{ backgroundColor: "#f0f8f5" }}>
//         <Row className="align-items-center mt-5">
//           <Col md={6}>
//             <div className="service-text" style={{marginLeft: "3rem"}}>
//               <h4 style={{ color: "#666", fontWeight: "bold" }}>01</h4>
//               <h2 style={{ color: "#1a1a1a", fontWeight: "bold" }}>
//                 Tritech Enterprises
//               </h2>
//               <p
//                 style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}
//               >
//                 Started in the year 1994 inside a small room with just one table
//                 and 2 chairs. Today we are one of the oldest IT hardware
//                 partners in Uttar Pradesh and have partnered with brands like
//                 HP, Canon, Brother, Epson, Acer, Lenovo, Samsung, and many more.
//               </p>
//               {/* <Button
//                 variant="link"
//                 style={{ color: "#000", fontWeight: "bold" }}
//               >
//                 READ MORE <span style={{ fontSize: "1.2rem" }}>→</span>
//               </Button> */}
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="image-container">
//               <img
//                 src={comp1} // replace with your actual image source
//                 alt="Service"
//                 style={{
//                   width: "75%",
//                   height: "auto",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "8px",
//                 }}
//               />
//             </div>
//           </Col>
//         </Row>
//         <Row className="align-items-center mt-5">
//           <Col md={6}>
//             <div className="image-container">
//               <img
//                 src={comp2} // replace with your actual image source
//                 alt="Service"
//                 style={{
//                   width: "75%",
//                   height: "auto",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "8px",
//                 }}
//               />
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="service-text">
//               <h4 style={{ color: "#666", fontWeight: "bold" }}>02</h4>
//               <h2 style={{ color: "#1a1a1a", fontWeight: "bold" }}>
//                 Trident Enterprises
//               </h2>
//               <p
//                 style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}
//               >
//                 Started in the year 1996 with an aim of expanding the it
//                 industry deeper and deeper in the region. We have catered to
//                 500+ corporate customers in different parts of Uttar Pradesh
//                 specializing in Servers, Workstations, Storage solutions and
//                 much more.
//               </p>
//               {/* <Button
//                 variant="link"
//                 style={{ color: "#000", fontWeight: "bold" }}
//               >
//                 READ MORE <span style={{ fontSize: "1.2rem" }}>→</span>
//               </Button> */}
//             </div>
//           </Col>
//         </Row>
//         <Row className="align-items-center mt-5">
//           <Col md={6}>
//             <div className="service-text">
//               <h4 style={{ color: "#666", fontWeight: "bold" }}>03</h4>
//               <h2 style={{ color: "#1a1a1a", fontWeight: "bold" }}>
//                 Benchmark Technologies
//               </h2>
//               <p
//                 style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}
//               >
//                 Started in the year 2021 with an aim of focusing more and more
//                 into the new trends and the changing IT hardware needs.
//               </p>
//               {/* <Button
//                 variant="link"
//                 style={{ color: "#000", fontWeight: "bold" }}
//               >
//                 READ MORE <span style={{ fontSize: "1.2rem" }}>→</span>
//               </Button> */}
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="image-container">
//               <img
//                 src={comp1} // replace with your actual image source
//                 alt="Service"
//                 style={{
//                   width: "75%",
//                   height: "auto",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "8px",
//                 }}
//               />
//             </div>
//           </Col>
//         </Row>
//         <Row className="align-items-center mt-5">
//           <Col md={6}>
//             <div className="image-container">
//               <img
//                 src={comp2} // replace with your actual image source
//                 alt="Service"
//                 style={{
//                   width: "75%",
//                   height: "auto",
//                   border: "1px solid #e0e0e0",
//                   borderRadius: "8px",
//                 }}
//               />
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="service-text">
//               <h4 style={{ color: "#666", fontWeight: "bold" }}>04</h4>
//               <h2 style={{ color: "#1a1a1a", fontWeight: "bold" }}>
//                 Hashtag Solutions
//               </h2>
//               <p
//                 style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}
//               >
//                 Started in the year 2022 partnering with the new Indian brands
//                 trying to enter the Indian IT marketing. Promoting the
//                 government of India's Make in india(MII) initiative we have
//                 partnered with Indian brands like Acxxel, INP, I-Comp,
//                 Peoplelink and much more
//               </p>
//               {/* <Button
//                 variant="link"
//                 style={{ color: "#000", fontWeight: "bold" }}
//               >
//                 READ MORE <span style={{ fontSize: "1.2rem" }}>→</span>
//               </Button> */}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <AffiliationsSection/>
//       <div className="mt-5">
//         <StayConnected />
//       </div>
//     </>
//   );
// };

// export default OurCompanies;

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import comp1 from "../../assets/comp1.jpg";
import comp2 from "../../assets/comp2.jpeg";
import AffiliationsSection from "./OurAffiliations";
import StayConnected from "../../Components/StayConnected";
import { useLocation } from "react-router-dom";

const OurCompanies = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ height: "40vh", backgroundColor: "white" }}
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
            style={{ color: "black", fontSize: "2.3rem", fontWeight: "bold" }}
          >
            Our Companies
          </h1>
          <p>
            Explore a world of creative solutions and innovation tailored to
            your needs.
          </p>
        </div>
      </Container>
      <Container fluid className="py-5" style={{ backgroundColor: "#f0f8f5" }}>
        <Row className="align-items-center mt-5">
          <Col md={6} className="px-4">
            <div className="service-text">
              <h4 style={{ color: "#666", fontWeight: "bold" }}>01</h4>
              <h2 style={{ color: "#1a1a1a", fontWeight: "bold" }}>
                Tritech Enterprises
              </h2>
              <p
                style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}
              >
                Started in the year 1994 inside a small room with just one table
                and 2 chairs. Today we are one of the oldest IT hardware
                partners in Uttar Pradesh and have partnered with brands like
                HP, Canon, Brother, Epson, Acer, Lenovo, Samsung, and many more.
              </p>
            </div>
          </Col>
          <Col md={6} className="px-4">
            <div className="image-container">
              <img
                src={comp1}
                alt="Tritech Enterprises"
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6} className="px-4">
            <div className="image-container">
              <img
                src={comp2}
                alt="Trident Enterprises"
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
          <Col md={6} className="px-4">
            <div className="service-text">
              <h4 style={{ color: "#666", fontWeight: "bold" }}>02</h4>
              <h2 style={{ color: "#1a1a1a", fontWeight: "bold" }}>
                Trident Enterprises
              </h2>
              <p
                style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}
              >
                Started in the year 1996 with an aim of expanding the IT
                industry deeper and deeper in the region. We have catered to
                500+ corporate customers in different parts of Uttar Pradesh
                specializing in Servers, Workstations, Storage solutions, and
                much more.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6} className="px-4">
            <div className="service-text">
              <h4 style={{ color: "#666", fontWeight: "bold" }}>03</h4>
              <h2 style={{ color: "#1a1a1a", fontWeight: "bold" }}>
                Benchmark Technologies
              </h2>
              <p
                style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}
              >
                Started in the year 2021 with an aim of focusing more on new
                trends and the changing IT hardware needs.
              </p>
            </div>
          </Col>
          <Col md={6} className="px-4">
            <div className="image-container">
              <img
                src={comp1}
                alt="Benchmark Technologies"
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6} className="px-4">
            <div className="image-container">
              <img
                src={comp2}
                alt="Hashtag Solutions"
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
          <Col md={6} className="px-4">
            <div className="service-text">
              <h4 style={{ color: "#666", fontWeight: "bold" }}>04</h4>
              <h2 style={{ color: "#1a1a1a", fontWeight: "bold" }}>
                Hashtag Solutions
              </h2>
              <p
                style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}
              >
                Started in the year 2022, partnering with new Indian brands
                trying to enter the Indian IT market. Promoting the Indian
                government's Make in India (MII) initiative, we have partnered
                with brands like Acxxel, INP, I-Comp, Peoplelink, and more.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <AffiliationsSection />
      <div className="mt-5">
        <StayConnected />
      </div>
    </>
  );
};

export default OurCompanies;
