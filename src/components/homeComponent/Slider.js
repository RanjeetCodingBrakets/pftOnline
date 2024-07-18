import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import "./slider.css";

const Slider = () => {
  return (

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <div className="home_top_section">
           <div className="container">
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
    </div>


    <div className="carousel-item" data-bs-interval="2000">
    <div className="home_top_section">
           <div className="container">
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
  

    </div>
    <div className="carousel-item">
    <div className="home_top_section">
           <div className="container">
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
  
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



  );
};

export default Slider;


