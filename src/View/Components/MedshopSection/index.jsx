import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./medshop.css";
import Map from "../../Assets/Images/map-pin.png";
import medshop from "../../Assets/Images/medshop.png";

function Medshop() {
  return (
    <div className="container-fluid px-0">
      <div className="medshop-container col-12">
        <div className="container-left col-6">
          <div className="inner-container-left">
            <div>
              <h6 className="heading-text">
                Medshop<span>AHD</span>
              </h6>
              <p className="secondHeader">Lorem ipsum dolor sit amet</p>
              <p className="content">
                Medshop Pharmacy, your trusted health partner, offers
                convenience, expert guidance, and personalized service for your
                well-being.
              </p>
              <div className="location">
                <img className="map" src={Map} alt="map" />
                <div className="location-content">
                  <p className="content-location">
                    <span> Staywell Pharmacy </span>
                    <br />
                    789 Oasis Street, Dubai Health District, Lorem Emirates, PO
                    Box 12345, Dubai
                  </p>
                  <button className="find-button">
                    <span>Find us On Map</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-right col-6">
          <img className="medshop" src={medshop} alt="medshop" />
        </div>
      </div>
    </div>
  );
}

export default Medshop;
