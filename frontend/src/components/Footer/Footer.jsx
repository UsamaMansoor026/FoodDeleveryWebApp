import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">FlavorByte</h1>
          <p>
            Life's too short for boring meals. Explore a world of culinary
            possibilities with <b>FlavorByte</b>. We deliver happiness, one
            delicious bite at a time.
          </p>
          <div className="footer-social-icons">
            <img src={assets.linkedin_icon} alt="LinkedIn" />
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92 3009815672</li>
            <li>contact@company.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; Company.com - All right reserevd
      </p>
    </footer>
  );
};

export default Footer;
