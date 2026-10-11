import {React} from "react";
import "./Testimonials.css";

const testimonials = [
  {
    rating: "★★★★★",
    text: "Completely satisfied with the services. Pankaj bhai and his team are very cooperative. I would always recomend to visit the store for any software/ hardware glitch in the system. Thank you so much.",
    author: "Anu Mehrotra",
  },
  {
    rating: "★★★★★",
    text: "Very good and cooperative place for any kind of hardware or software issues",
    author: "Vikas Chandra Srivastava",
  },
  {
    rating: "★★★★★",
    text: "The owner of the shop is very polite and of helpful nature",
    author: "Revant Kumar Singh",
  },
  {
    rating: "★★★★★",
    text: "Great selection of laptops and quick delivery. Will definitely buy from Digital Domain again!",
    author: "BCL Tech Pvt Ltd",
  },
];

const Testimonials = () => {
  return (
    <><div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <img
          src="https://res.cloudinary.com/appbuilder/image/upload/v1774867654/amplify-impact/certificates/a369381a-43c8-430d-be67-825d5df66913.png"
          style={{ width: "100%", maxWidth: "800px", height: "auto" }}
          alt="Certificate"
        />
      </div>
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
    </div></>
    
  );
};

export default Testimonials;
