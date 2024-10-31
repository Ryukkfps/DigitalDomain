import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    rating: "★★★★★",
    text: "Outstanding service, great products, and friendly staff. Highly recommend Digital Domain!",
    author: "Rohan Gupta",
  },
  {
    rating: "★★★★",
    text: "The quality of the gaming PC I purchased exceeded my expectations. Thank you, Tritech Enterprises!",
    author: "Kanishk Srivastava",
  },
  {
    rating: "★★★★★",
    text: "I found the perfect workstation for my needs at Digital Domain. Impressed with the service!",
    author: "Pratyaksh Kapoor",
  },
  {
    rating: "★★★★★",
    text: "Great selection of laptops and quick delivery. Will definitely buy from Digital Domain again!",
    author: "BCL Tech Pvt Ltd",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>Client Testimonials</h2>
      <p>See what our satisfied customers have to say about their experience with Tritech Enterprises.</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="rating">{testimonial.rating}</div>
            <p>{testimonial.text}</p>
            <h6>- {testimonial.author}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
