import React from "react";// Replace with your image path
import "bootstrap/dist/css/bootstrap.min.css";
import "./banner.css";

function Banner() {
  return (
    <div className="banner-container container-fluid px-0">
      <div className="banner-text">
        <h2 className="heading">MedShop</h2>
        <p className="paragraph">
          One-Stop Destination for Medical Essentials and Wellness Solutions
        </p>
      </div>
    </div>
  );
}

export default Banner;
