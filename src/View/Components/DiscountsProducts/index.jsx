import React from "react";
import "./discountProducts.css";
import shutterStock from "../../Assets/Images/shutterstock_1908560635.png";

function DiscountsProducts() {
  return (
    <section className="discount-product-container">
      <div className="mainHeader">
        <div className="header">
          <h1 className="headerText">
            Exclusive <span className="highlight">Discounts</span> on <br />
            Essential <span className="highlight">Wellness</span> Products
          </h1>
        </div>
        <div className="shutterStock">
          <img className="shutterStock-image" src={shutterStock} alt="Discounted Wellness Products" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default DiscountsProducts;