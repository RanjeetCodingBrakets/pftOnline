import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import images from "../../../constants/images";

const PopularProduct = () => {
  const [popular] = useState([
    { id: 1, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 2, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 3, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 4, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 5, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 6, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
  ]);

  const [popular_product] = useState([
    { id: 1, name: "Fresh Organic", imgSrc: 'discount-juice', subName: 'Juice' },
    { id: 2, name: "All Organic ", imgSrc: 'discount-masala', subName: 'Masala' },
    { id: 3, name: "All Organic ", imgSrc: 'discount-dal', subName: 'Dal' },
  ]);

  useEffect(() => {
    const loadOwlCarousel = () => {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
      script.onload = () => {
        const $ = window.$;
        const owl = $('.owl-carousel.popular-carousel');
        owl.owlCarousel({
          loop: false,
          margin: 10,
          nav: false,
          dots: false,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          }
        });
        const owl_m = $('.owl-carousel.popular-carousel__mobile');
        owl_m.owlCarousel({
          loop: false,
          margin: 10,
          nav: false,
          dots: false,
          responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 5 }
          }
        });
      };
      document.body.appendChild(script);
      return script;
    };

    const script = loadOwlCarousel();
    return () => {
      if (script) {
        document.body.removeChild(script);
      }
      if (window.$ && window.$('.owl-carousel.popular-carousel').data('owl.carousel')) {
        window.$('.owl-carousel.popular-carousel').owlCarousel('destroy');
      }
      if (window.$ && window.$('.owl-carousel.popular-carousel__mobile').data('owl.carousel')) {
        window.$('.owl-carousel.popular-carousel__mobile').owlCarousel('destroy');
      }
    };
  }, []);

  return (
    <div className="popularProduct_List1 position-relative mb-50">
      <img
        src={images.moongDal}
        alt="Dal"
        className="dalImage position-absolute"
      ></img>
      <img
        src={images.spices1}
        alt="Spices"
        className="spices1 position-absolute"
      ></img>
      <div className="container">
        <div className="mb-50 discount-block owl-carousel owl-theme popular-carousel">
          {popular_product.map((item, index) => (
            <div className="mb-4" key={index}>
              <div className={`discount-product d-flex justify-content-between ${item.imgSrc}`}>
                <div>
                  <p>50% Off</p>
                  <h3 className="mb-3 text-white fw-bold">
                    {item.name} <span className="break-line">{item.subName}</span>{" "}
                  </h3>
                  <Link to="/promotionalPage" className="discount_link btn-dark">
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          )
          )}
        </div>

        <div className="row mb-90 p-prod">
          <div className="col-12">
            <div className="product_heading">
              <h3 className="text-center">Choose From Popular Products</h3>
              <h6 className="text-center">Over 250+ products available</h6>
            </div>
          </div>
        </div>

        <div className="row mb-40 pro__show-list">
          {popular.map((product) => (
            <div
              key={product.id}
              className="col-lg-2 col-md-3 col-sm-3 col-6 text-center mb-4"
            >
              <div className="product-item p-2">
                <Link to="">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="product-image"
                  />
                  <h5>{product.name}</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-40 owl-carousel owl-theme popular-carousel__mobile pro__hide-list">
          {popular.map((product) => (
            <div
              key={product.id}
              className="mb-4"
            >
              <div className="text-center product-item p-2">
                <Link to="">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="product-image d-inline"
                  />
                  <h5>{product.name}</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="popularProduct-viewMore btn-dark">
              <Link to="">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
