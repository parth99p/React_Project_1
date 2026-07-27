import React from "react";
import "../components/About.css";
import img from "../Assets/ims.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
           Indian Masala Restaurant in Pen is a popular dining spot serving fresh North Indian, Maharashtrian, and fast-food favorites near the Pen-Tarankhop Bridge on the Mumbai-Goa Highway. It opened in early 2026 and is known for its cozy ambiance and made-to-order dishes.
          </p>
          <p>
            Location and HoursAddress: Near Mhada Colony, Pen-Tarankhop Road, Mumbai-Goa Highway, Pen, Raigad, Maharashtra 402107Hours: Monday to Sunday, 8:00 AM to 12:00 AMContact: +91 7276499800 / +91 99609 93766
          </p>

          <button className="about-btn">Learn More</button>
        </div>
        <div className="about-image">
          <img src={img} alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
