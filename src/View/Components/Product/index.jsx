import React from "react";
import "./product.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../Assets/Images/product1.png";
import product2 from "../../Assets/Images/product2.png";
import product3 from "../../Assets/Images/product3.png";
import product4 from "../../Assets/Images/product4.png";

const data = [
  {
    image: product1,
  },
  {
    image: product2,
  },
  {
    image: product3,
  },
  {
    image: product4,
  },
];

function Product() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
  return (
    <div className="container-fluid px-0">
      <div className="product-container col-12">
        <Slider {...settings}>
          {data.map((product, index) => (
            <div key={index} className="product-slide">
              <img
                className="product-image"
                src={product.image}
                alt={`product${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Product;
