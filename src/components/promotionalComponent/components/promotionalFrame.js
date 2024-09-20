import React from "react";

import "../promotional.css";
import images from "../../../constants/images";

const PromotionalFrame = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="true"
    >
    <div className="promobutton-border-frame">
     <img src={images.frame11} alt="heroVector1" className="header-frame" />
     </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="promotion-frame">
            <div className="container ">
              <div className="row">
                <div className="col-6">
                  <h1 className="big-value">
                    <span>Big Value </span><br/>Deals
                  </h1>
                  <p className="offer-time">
                    Offer Available In <span>July - September</span>
                  </p>
                </div>
                <div className="col-6 position-relative">
                  <div>
                    <img
                      src={images.promoimg1}
                      alt=""
                      className="promoimage1"
                    />
                  </div>
                </div>
              </div>
              <div className="row w-90 m-auto promo-disc-banner">
                <div className="col text-center disc-banner-sec">
                  <h3>50% OFF</h3>
                  <p>All Juices Products</p>
                </div>
                <div className="col text-center disc-banner-cente">
                  <h3>20% OFF</h3>
                  <p>All Spices Products</p>
                </div>
                <div className="col text-center disc-banner-sec">
                  <h3>15% OFF</h3>
                  <p>All Dairy Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <div className="promotion-frame">
            <div className="container ">
              <div className="row">
                <div className="col-6">
                  <h1 className="big-value">
                    <span>Big Value </span><br/>Deals
                  </h1>
                  <p className="offer-time">
                    Offer Available In <span>July - September</span>
                  </p>
                </div>
                <div className="col-6 position-relative">
                  <div>
                    <img
                      src={images.promoimg1}
                      alt=""
                      className="promoimage1"
                    />
                  </div>
                </div>
              </div>
              <div className="row w-90 m-auto promo-disc-banner">
                <div className="col text-center disc-banner-sec">
                  <h3>50% OFF</h3>
                  <p>All Juices Products</p>
                </div>
                <div className="col text-center disc-banner-cente">
                  <h3>20% OFF</h3>
                  <p>All Spices Products</p>
                </div>
                <div className="col text-center disc-banner-sec">
                  <h3>15% OFF</h3>
                  <p>All Dairy Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <div className="promotion-frame">
            <div className="container ">
              <div className="row">
                <div className="col-6">
                  <h1 className="big-value">
                    <span>Big Value </span><br/>Deals
                  </h1>
                  <p className="offer-time">
                    Offer Available In <span>July - September</span>
                  </p>
                </div>
                <div className="col-6 position-relative">
                  <div>
                    <img
                      src={images.promoimg1}
                      alt=""
                      className="promoimage1"
                    />
                  </div>
                </div>
              </div>
              <div className="row w-90 m-auto promo-disc-banner">
                <div className="col text-center disc-banner-sec">
                  <h3>50% OFF</h3>
                  <p>All Juices Products</p>
                </div>
                <div className="col text-center disc-banner-cente">
                  <h3>20% OFF</h3>
                  <p>All Spices Products</p>
                </div>
                <div className="col text-center disc-banner-sec">
                  <h3>15% OFF</h3>
                  <p>All Dairy Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon promotional-slide-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon  promotional-slide-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default PromotionalFrame;
