import React from "react";
import "./footer.css";
import logo from "../../Assets/Images/Group 95.png";
import phoneIcon from "../../Assets/Images/phone-call.png";
import emailIcon from "../../Assets/Images/Group 99.png";
import instagramIcon from "../../Assets/Images/instagram.png";
import linkedinIcon from "../../Assets/Images/linkedin.png";
import xIcon from "../../Assets/Images/x.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-header">
        <img className="logo" src={logo} alt="Unimed Logo" />
        <ul className="nav unOrder-List">
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
              <img className="icon" src={emailIcon} alt="Email Icon" />
              <p className="info-section1-content">info@unimed.com</p>
            </div>
            <div className="info-section">
              <img className="icon" src={phoneIcon} alt="Phone Icon" />
              <p className="info-section1-content">+971 8945213979</p>
            </div>
          </div>
          <div className="inner-section2">
            <h4 className="inner-section2-header">Quick Links</h4>
            <div className="inner-section2-content">
              <ul>
                <li className="inner-section2-content-text">Partners</li>
                <li className="inner-section2-content-text">Products</li>
                <li className="inner-section2-content-text">About us</li>
                <li className="inner-section2-content-text">UMD standards</li>
              </ul>
              <ul>
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
        <ul className="footer-bottom">
          <li className="footer-text">Follow Us On</li>
          <li><a href="https://www.linkedin.com"><img className="social-icon" src={linkedinIcon} alt="LinkedIn" /></a></li>
          <li><a href="https://www.xing.com"><img className="social-icon" src={xIcon} alt="Xing" /></a></li>
          <li><a href="https://www.instagram.com"><img className="social-icon" src={instagramIcon} alt="Instagram" /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
