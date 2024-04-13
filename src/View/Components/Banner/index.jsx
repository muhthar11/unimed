import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./banner.css";

function Banner() {
  return (
    <div className="banner-container container-fluid px-0">
      <div className="banner__text">
        <h2 className="banner__heading">MedShop</h2>
        <p className="banner__paragraph">
          One-Stop Destination for Medical Essentials and Wellness Solutions
        </p>
      </div>
    </div>
  );
}

export default Banner;
