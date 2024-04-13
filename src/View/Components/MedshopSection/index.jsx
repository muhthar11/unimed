import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./medshop.css";
import Map from "../../Assets/Images/map-pin.png";
import medshop from "../../Assets/Images/medshop.png";

function Medshop() {
  return (
    <div className="container-fluid px-0">
      <div className="row medshop-container">
        <div className="col-md-6 container-left">
          <div className="inner-container-left">
            <h6 className="heading-text">
              Medshop<span>AHD</span>
            </h6>
            <p className="secondHeader">Lorem ipsum dolor sit amet</p>
            <p className="content">
              Medshop Pharmacy, your trusted health partner, offers convenience, 
              expert guidance, and personalized service for your well-being.
            </p>
            <div className="location d-flex">
              <img className="map" src={Map} alt="Location Map" />
              <div className="location-content">
                <p className="content-location">
                  <span> Staywell Pharmacy </span>
                  <br />
                  789 Oasis Street, Dubai Health District, Lorem Emirates, PO Box 12345, Dubai
                </p>
                <button className="find-button btn">
                  Find us On Map
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 container-right">
          <img className="medshop" src={medshop} alt="Medshop Exterior" />
        </div>
      </div>
    </div>
  );
}

export default Medshop;
