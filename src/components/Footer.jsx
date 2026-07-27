import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Indian Masala Restaurant</h3>
        <p>Delicious food delivered to your doorstep</p>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Indian Masala Restaurant. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
