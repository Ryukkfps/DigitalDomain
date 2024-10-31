import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.css";
import "./OurPortfolioSection.css";

const OurPortfolioSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  if (inView && !startCount) {
    setStartCount(true);
  }

  return (
    <div ref={ref} className="our-portfolio-section py-5 text-center">
      <div className="container">
        <h2 className="font-weight-bold">Our Portfolio</h2>
        <p className="mb-5">
          Check out some of our featured products and client projects to see our work.
        </p>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <h3 className="font-weight-bold">
              {startCount ? <CountUp end={300} duration={3} /> : "0"}+
            </h3>
            <p>Projects Completed</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h3 className="font-weight-bold">
              {startCount ? <CountUp end={700} duration={3} /> : "0"}+
            </h3>
            <p>Happy Customers</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h3 className="font-weight-bold">
              {startCount ? <CountUp end={10} duration={3} /> : "0"}+
            </h3>
            <p>Team Members</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h3 className="font-weight-bold">
              {startCount ? <CountUp end={6} duration={3} /> : "0"}+
            </h3>
            <p>Tech Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPortfolioSection;
