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
      <div className="health-container ">
        <div className="health-container-section1 ">
          <img className="health" src={health} alt="health" />
        </div>
        <div className="health-container-section2">
          <div className="heading">
            <p className="heading-text">
              Find All The<span>Health Essentials Here</span>
            </p>
          </div>
          <div className="dataSection">
          <div className="healthEssentials col-4">
            <div className="card cardBorderColor2">
              <img
                className="icon"
                src={medicalEquipment}
                alt="medicalEquipment"
              />
            </div>

            <div class="card-body">
              <h6>Medical Equipment</h6>
            </div>
          </div>
          <div className="healthEssentials col-4">
            <div className="card cardBorderColor1">
              <img
                className="icon"
                src={physiotherapyProduct}
                alt="physiotherapyProduct"
              />
            </div>

            <div class="card-body ">
              <h6 className="w-2">Physiotherapy Products</h6>
            </div>
          </div>
          {/* </div>
          <div className="dataSection"> */}
          <div className="healthEssentials col-4">
            <div className="card cardBorderColor1">
              <img
                className="icon"
                src={homeCareDevices}
                alt="homeCareDevices"
              />
            </div>

            <div class="card-body">
              <h6>Homecare Devices</h6>
            </div>
          </div>
          <div className="healthEssentials col-4">
            <div className="card cardBorderColor2">
              <img
                className="icon"
                src={generalHealthcareProducts}
                alt="genaralHealthcareProducts"
              />
            </div>

            <div class="card-body">
              <h6>General Healthcare Products</h6>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
