import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { Carousel } from "react-bootstrap";
import "./slider.css";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="home_top_section">
          <div className="container fluid">
            <div className="row">
              <div className="col-6 ">
                <div className="pulses_image">
                  <img src={images.pulses} alt="yellow_peas" />
                </div>
                <div className="organic">
                  <h5>100% Organic</h5>
                  <h1>
                    The <span className="blend">Blend</span> Of{" "}
                    <span className="quality">QUALITY</span>
                  </h1>

                  <Link to="" className="contact-button">
                    <FaPhoneVolume /> +91 1234567890
                  </Link>
                </div>

                <div className="mint_image">
                  <img src={images.mint} alt="mint" />
                </div>
              </div>
              <div className="col-6 ">
                <div className="slider-images d-flex justify-content-end">

                  <div className="bg_image ">
                  <img src={images.spice} alt="people"  className="spice_image"/>
                    <img src={images.bg} alt="people"  className="people_image"/>
                    <img
                      src={images.stick}
                      alt="stick"
                      className="stick_image"
                    ></img>
                  </div>
                  
                  <div className="rice_image">
                    <img src={images.rice} alt="rice" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>

      {/* Add more Carousel.Items as needed */}
    </Carousel>
  );
};

export default Slider;
