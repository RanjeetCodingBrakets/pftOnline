import React from "react";
import images from "../../../constants/images";
import { Link } from "react-router-dom";
// import "./weekendSale.css";
import Timer from "./Timer";

const WeekendSale = () => {
  return (
    <div className="sale mb-50">
      <div className="container  ">
      <div className="sale_banner rounded-4 ">
      <img src={images.gift1} alt="Gifts" className="gift1_image" />
      <img src={images.gift2} alt="Gifts" className="gift2_image" />
        <div className="row p-4">
          <div className="col-12 col-md-12 col-lg-6 text-left">
            <div className="position-relative sale-content">
              <h3>% Flat Sale %</h3>
              <h6>Great promotions, save up to 35% only for a short time!</h6>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 text-center my-3 my-md-0">
            <Timer />
          </div>
          <div className="col-12 col-lg-3 col-md-6 offer-btn">
            
              <Link to="/promotionalPage" className="view_button">
                About the Offer
              </Link>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WeekendSale;

