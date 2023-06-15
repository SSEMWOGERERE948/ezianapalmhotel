import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container grid">
        <div className="box">
          <h2>ABOUT US</h2>
          <p>
            Welcome to Eziana Palm Hotel, where luxury meets tranquility. As a prestigious four-star establishment, we take pride in offering impeccable service, refined elegance, and a memorable experience for every guest. Discover our enchanting gardens, indulgent accommodations, exquisite dining, and exceptional amenities that create a haven of relaxation and sophistication. Experience the epitome of hospitality at Eziana Palm Hotel, where comfort, elegance, and personalized service harmoniously blend to create unforgettable moments for our valued guests.
          </p>
          <p>Connect with us on social media to stay updated and engage with our vibrant community.</p>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="box">
          <h2>NAVIGATION</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <p>© 2023 Eziana Palm Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
