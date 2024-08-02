import React from "react";
import images from "../../../constants/images";

const Team = () => {
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
      <div className="row mb-5 justify-content-center team-desc">
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
      <div className="row map-box">
        <div className="col-md-12 col-lg-6 map-con">
        <h4 className="map-head">Lorem Ipsum Dummy text</h4>
          <p className="map-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className="col-md-12 col-lg-6 map">
          <img src={images.map} alt="" className=""/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
