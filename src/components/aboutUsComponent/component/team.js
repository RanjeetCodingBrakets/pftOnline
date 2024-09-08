import React, { useState, useEffect } from "react";
import images from "../../../constants/images";
import MapComponent from "./map";

const Team = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Adjust the width as per your requirement

    if (isMobile) {
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
    };
  }
  }, []);

  return (
    <div className="team-container overflow-hidden">
    <div className="container ">
      <div classname="row text-center mb-5">
        <div className="col  pt-5 ">
          <h3 className="ab-header text-center">Meet Out Team</h3>
          <p className="ab-con w-50 text-center mx-auto">
            When an unknown printer took a galley of type and scrambled make
            specimen book It has survived five centuries.
          </p>
        </div>
      </div>
      <div className="row mb-5 justify-content-center team-desc owl-carousel owl-theme popular-carousel">
        <div className="col-2_5 p-1 team-box">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
        <div className="col-2_5 mt-60 p-1 team-box">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
        <div className="col-2_5 mt-120 mb-50 p-1 team-box">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
        <div className="col-2_5 mt-60 p-1 team-box">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
        <div className="col-2_5 p-1 team-box">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <MapComponent/>
    </div>
  );
};

export default Team;
