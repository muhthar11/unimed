import React from "react";
import "./product.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../Assets/Images/product1.png";
import product2 from "../../Assets/Images/product2.png";
import product3 from "../../Assets/Images/product3.png";
import product4 from "../../Assets/Images/product4.png";

const products = [
  { id: 'p1', image: product1, alt: 'Product 1 description' },
  { id: 'p2', image: product2, alt: 'Product 2 description' },
  { id: 'p3', image: product3, alt: 'Product 3 description' },
  { id: 'p4', image: product4, alt: 'Product 4 description' },
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  return (
    <div className="container-fluid px-0">
      <div className="product-container col-12">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-slide">
              <img
                className="product-image"
                src={product.image}
                alt={product.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Product;
