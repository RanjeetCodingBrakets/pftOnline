import React from "react";
import "../aboutUs.css";
import images from "../../../constants/images";

const Service = () => {
  return (
    <div className="container mb-50">
      <div className="row text-center mb-5">
        <div className="col">
          <h3 className="ab-header">Why You Should Choose Services</h3>
          <p className="ab-con w-50 text-center mx-auto">
            When an unknown printer took a galley of type and scrambled make
            specimen book It has survived five centuries.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="service-card p-3 text-center">
            <div className="service-icon mb-3">
              <img src={images.frame6} alt="" />
            </div>
            <h5>Organic Food Services</h5>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make follow type specimen area book.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card p-3 text-center">
            <div className="service-icon mb-3 ">
              <img src={images.frame7} alt="" />
            </div>
            <h5>24/7 Support Services</h5>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make follow type specimen area book.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card p-3 text-center">
            <div className="service-icon mb-3">
              <img src={images.frame8} alt="" />
            </div>
            <h5>Offers And Discounts</h5>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make follow type specimen area book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
