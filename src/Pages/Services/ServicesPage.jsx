import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import pc from "../../assets/pc.jpg";
import allinone from "../../assets/allinone.png";
import asc from "../../assets/asc.jpg";
import laptop from "../../assets/laptop.jpg";
import desktop from "../../assets/desktops.jpg";
import lp from "../../assets/lazerprinter.jpg";
import itp from "../../assets/inktankprinter.jpg";
import plotter from "../../assets/plotter.jpg";
import photocopy from "../../assets/photocopy.png";
import ipanel from "../../assets/interactivepanel.jpeg";
import monitor from "../../assets/monitors.jpg";
import StayConnected from "../../Components/StayConnected";
import { useLocation } from "react-router-dom";


const ServiceItem = ({ imgSrc, index, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  // Scroll to top when the component mounts or location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <Container
      className="d-flex align-items-center justify-content-center gap-5 mt-5"
      style={{
        border: "1px solid green",
        borderRadius: "8px",
        padding: "20px",
        minHeight: "60vh",
      }}
    >
      <img
        src={imgSrc}
        style={{
          maxWidth: "30%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div
        style={{
          maxWidth: "40%",
          textAlign: "left",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2>{`${index < 10 ? "0" + index : index}.`}</h2>
        <h3>{title}</h3>
        <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {isExpanded ? description : `${description.substring(0, 150)}...`}
        </p>{" "}
        <span>
          <button
            onClick={toggleExpand}
            style={{
              backgroundColor: "#4a9a00",
              color: "White",
              border: "2px solid",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </span>
      </div>
    </Container>
  );
};

const ServicesPage = () => {
  const services = [
    {
      imgSrc: pc,
      title: "Gaming PCs",
      description:
        "Unleash your gaming potential with our high-performance gaming PCs! Engineered for speed and power, these machines feature cutting-edge graphics, lightning-fast processors, and customizable options to elevate your gaming experience. Whether you’re diving into immersive worlds or competing in fast-paced battles, our gaming PCs deliver stunning visuals and seamless gameplay. Don’t just play—dominate the game with a system built for champions. Level up your setup today!",
    },
    {
      imgSrc: allinone,
      title: "All in One PCs",
      description:
        "Streamline your workspace with our sleek all-in-one PCs! Combining powerful performance with a space-saving design, these versatile machines offer everything you need for work and play in one elegant package. With vibrant displays, fast processors, and ample storage, you can tackle any task with ease—whether it's multitasking for work or enjoying your favorite games. Say goodbye to clutter and hello to a stylish solution that fits perfectly in any environment. Discover the convenience of all-in-one computing today!",
    },
    {
      imgSrc: laptop,
      title: "Laptops",
      description:
        "Experience the ultimate in portability and performance with our range of laptops! Perfect for students, professionals, and gamers alike, these lightweight devices pack powerful processors, vibrant displays, and long-lasting batteries to keep you productive on the go. Whether you're working from a café, attending classes, or streaming your favorite shows, our laptops deliver the speed and reliability you need. Elevate your mobile computing experience—find your perfect laptop today!",
    },
    {
      imgSrc: asc,
      title: "Gaming Accessories",
      description:
        "Enhance your computing experience with our top-quality computer peripherals! From ergonomic keyboards and precision mice to high-resolution monitors and immersive audio solutions, we have everything you need to boost productivity and enjoyment. Designed for comfort and performance, our peripherals seamlessly integrate with your setup, helping you work smarter and play harder. Elevate your workspace and enjoy every click—explore our range of computer peripherals today!",
    },
    {
      imgSrc: desktop,
      title: "Desktops",
      description:
        "Power up your productivity with our cutting-edge desktop computers! Built for performance and reliability, our desktops deliver blazing-fast speeds, stunning graphics, and ample storage, making them ideal for everything from gaming to graphic design and everyday tasks. With customizable configurations and sleek designs, you can create the perfect setup for your needs. Experience the difference that a powerful desktop can make—transform your workspace today!",
    },
    {
      imgSrc: lp,
      title: "Laser Printers",
      description:
        "Achieve professional-quality printing with our advanced laser printers! Designed for high-speed performance and exceptional clarity, these printers are perfect for busy offices or home use. With sharp text and vibrant graphics, you can produce everything from detailed reports to striking presentations with ease. Plus, their cost-efficient cartridges and low maintenance make them a smart choice for any budget. Experience reliable, high-volume printing that keeps you ahead—upgrade to a laser printer today!",
    },
    {
      imgSrc: itp,
      title: "Ink Tank Printers",
      description:
        "Say goodbye to ink cartridge hassles with our innovative ink tank printers! Designed for high-volume printing, these efficient machines offer lower running costs and incredible print quality. With a refillable ink tank system, you can enjoy thousands of pages without frequent replacements, making them perfect for home or office use. Whether you need stunning color photos or sharp text documents, our ink tank printers deliver reliable performance and convenience. Experience the future of printing today!",
    },
    {
      imgSrc: plotter,
      title: "Plotters",
      description:
        "Elevate your design projects with our precision plotters! Perfect for architects, engineers, and creatives, these high-performance machines deliver stunning, large-format prints with impeccable detail and accuracy. Whether you're creating blueprints, maps, or intricate graphics, our plotters ensure vibrant colors and sharp lines every time. With user-friendly interfaces and efficient printing speeds, you can bring your visions to life quickly and easily. Transform your workspace and take your projects to the next level—discover our range of plotters today!",
    },
    {
      imgSrc: photocopy,
      title: "Photo Copiers",
      description:
        "Upgrade your office efficiency with our state-of-the-art photocopiers! Designed for high-speed performance and exceptional print quality, our machines handle everything from crisp black-and-white copies to vibrant color prints. With user-friendly features and advanced security options, you can streamline your workflow and protect your documents with ease. Experience reliable, high-volume copying that keeps your business running smoothly—choose our photocopiers for all your printing needs!",
    },
    {
      imgSrc: ipanel,
      title: "Interactive Panels",
      description:
        "Transform your space with our cutting-edge interactive panels! Perfect for businesses, events, or educational settings, these dynamic displays engage your audience like never before. With intuitive touch technology and customizable content, you can easily share information, showcase multimedia presentations, and create immersive experiences. Elevate your communication and captivate your viewers—discover the future of interaction today!",
    },
    {
      imgSrc: monitor,
      title: "Monitors",
      description:
        "Elevate your workspace with our stunning range of monitors! Experience vibrant colors and crystal-clear resolution that brings your content to life, whether you're working, gaming, or streaming. Our ergonomic designs and adjustable stands ensure comfort during long hours, while advanced features like blue light reduction protect your eyes. Upgrade your viewing experience today and see the difference quality makes!",
    },
  ];

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
          <h1 style={{ color: "#fff", fontSize: "2.3rem", fontWeight: "bold" }}>
            Complete Computer Solutions for Everyone
          </h1>
        </div>
      </Container>

      {services.map((service, index) => (
        <ServiceItem
          key={index}
          imgSrc={service.imgSrc}
          index={index + 1}
          title={service.title}
          description={service.description}
        />
      ))}

      <StayConnected/>

      {/* <Container
        fluid
        className="d-flex align-items-center justify-content-center mt-5"
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
          <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
            Stay Connected with Digital Domain
          </h1>
          <p style={{ color: "white", fontSize: "12px" }}>
            Sign up for our newsletter to receive updated on the latest
            products, deals, and tech trends.
          </p>
          <button className="btn custom-btn mt-3 ">Get In Touch</button>
        </div>
      </Container> */}
    </>
  );
};

export default ServicesPage;
