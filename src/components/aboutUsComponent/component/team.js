import React from "react";
import images from "../../../constants/images";

const Team = () => {
  return (
    <div className="team-container ">
    <div className="container">
      <div classname="row text-center mb-5">
        <div className="col  pt-5">
          <h3 className="ab-header text-center">Meet Out Team</h3>
          <p className="ab-con w-50 text-center mx-auto">
            When an unknown printer took a galley of type and scrambled make
            specimen book It has survived five centuries.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-2_5 p-1">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body p-0 text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
        <div className="col-2_5 mt-60 p-1">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body p-0 text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
        <div className="col-2_5 mt-120 mb-50 p-1">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body p-0 text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
        <div className="col-2_5 mt-60 p-1">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body p-0 text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
        <div className="col-2_5 p-1">
          <div className="card team-card">
            <img
              src={images.member}
              className="card-img-top"
              alt="member"
            />
            <div className="card-body p-0 text-body">
              <h5 className="card-title member-name">Monika Roy</h5>
              <p className="card-text member-text p-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
