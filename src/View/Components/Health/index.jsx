import React from "react";
import "./health.css";
import "bootstrap/dist/css/bootstrap.min.css";
import health from "../../Assets/Images/health.png";
import medicalEquipment from "../../Assets/Images/medicalEquipment.png";
import physiotherapyProduct from "../../Assets/Images/physiotherapyProduct.png";
import homeCareDevices from "../../Assets/Images/homeCareDevices.png";
import generalHealthcareProducts from "../../Assets/Images/generalHealthcareProducts.png";

function Health() {
  return (
    <div className="container-fluid px-0">
      <div className="row health-container">
        <div className="col-md-6 health-container__section1">
          <img className="health-container__image" src={health} alt="health" />
        </div>
        <div className="col-md-6 health-container__section2">
          <div className="health-container__heading">
            <p className="health-container__heading-text">
              Find All The<span>Health Essentials Here</span>
            </p>
          </div>
          <div className="row health-container__dataSection">
            { /* Repeat this block for each product category */ }
            <div className="col-md-6 col-lg-4 health-container__healthEssentials">
              <div className="card health-container__card health-container__card--blue">
                <img className="health-container__icon" src={medicalEquipment} alt="medicalEquipment" />
              </div>
              <div className="card-body">
                <h6>Medical Equipment</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 health-container__healthEssentials">
              <div className="card health-container__card health-container__card--green">
                <img className="health-container__icon" src={physiotherapyProduct} alt="physiotherapyProduct" />
              </div>
              <div className="card-body">
                <h6>Physiotherapy Products</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 health-container__healthEssentials">
              <div className="card health-container__card health-container__card--green">
                <img className="health-container__icon" src={homeCareDevices} alt="homeCareDevices" />
              </div>
              <div className="card-body">
                <h6>Homecare Devices</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 health-container__healthEssentials">
              <div className="card health-container__card health-container__card--blue">
                <img className="health-container__icon" src={generalHealthcareProducts} alt="generalHealthcareProducts" />
              </div>
              <div className="card-body">
                <h6>General Healthcare Products</h6>
              </div>
            </div>
            { /* ... other product categories ... */ }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
