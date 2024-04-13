import React from "react";
import "./footer.css";
import logo from "../../Assets/Images/Group 95.png";
import phone from "../../Assets/Images/phone-call.png";
import email from "../../Assets/Images/Group 99.png";
import instagram from "../../Assets/Images/instagram.png";
import linkedin from "../../Assets/Images/linkedin.png";
import x from "../../Assets/Images/x.png";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-header">
        <img className="logo" src={logo} alt="logo" />
        <ul class="nav unOrder-List">
          <li className="active-Tab">pharma</li>
          <li className="tab">medical</li>
          <li className="tab">consumer</li>
          <li className="tab">healthcare retail</li>
        </ul>
      </div>
      <hr className="border-line" />
      <div className="footer-content">
        <div className="footer-inner-content">
          <div className="inner-section1">
            <h4 className="inner-section1-header">Get In Touch</h4>
            <p className="inner-section1-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              augue dolor, finibus a efficitur ut, mattis ac nisi.
            </p>
            <div className="info-section">
              <img className="icon" src={email} alt="email" />
              <p className="info-section1-content">info@unimed.com</p>
            </div>
            <div className="info-section">
              <img className="icon" src={phone} alt="phone" />
              <p className="info-section1-content">+971 8945213979</p>
            </div>
          </div>
          <div className="inner-section2">
            <h4 className="inner-section2-header">Quick Links</h4>
            <div className="inner-section2-content">
              <ul className="col-12">
                <li className="inner-section2-content-text">Partners</li>
                <li className="inner-section2-content-text">Products</li>
                <li className="inner-section2-content-text">About us</li>
                <li className="inner-section2-content-text">UMD standards</li>
              </ul>
              <ul className="col-12">
                <li className="inner-section2-content-text">Careers</li>
                <li className="inner-section2-content-text">Media</li>
                <li className="inner-section2-content-text">Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-line" />
      <div className="footer-header">
        <p className="footer-inner-section">
          Copyright 2024 © Unimed. All Rights Reserved.
        </p>
        <ul class="nav unOrder-List">
          <li className="footer-text">Follow Us On</li>
          <img className="social-icon" src={linkedin} alt="LinkedIn" />
          <img className="social-icon" src={x} alt="X" />
          <img className="social-icon" src={instagram} alt="Instagram" />
        </ul>
      </div>
    </section>
  );
}

export default Footer;
