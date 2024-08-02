import React, { useState } from "react";
import "./profile.css";
import images from "../../constants/images";
import OrderHistory from "./orderHistory";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Mittal Soni",
    email: "mittal@example.com",
    password: "89568995",
    phone: "1234567890",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handlePasswordChange = () => {
    setIsChangingPassword(!isChangingPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-box">
          <div className="row">
            <div className="col-12">
              <div className="profile-header text-center justify-content-center">
                <img
                  src={images.profilepic}
                  alt="Profile"
                  className="profile-image rounded-circle"
                />
                <h3 className="mt-3">{profile.name}</h3>
              </div>
              <div className="profile-form mt-4">
                <form>
                  <div className="row mb-3">
                    <div className="col-12 col-md-6">
                      <label className="profile-label">Name</label>
                      <input
                        type="text"
                        className="form-control input-feed"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="profile-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control input-feed"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12 col-md-6">
                      <label className="profile-label">Password</label>

                      <div class="input-group mb-3 change-pass">
                        <input
                          type="password"
                          class="form-control pass-feed "
                          name="password"
                          value={profile.password}
                          onChange={handleInputChange}
                          readOnly={!isChangingPassword}
                          placeholder="Enter Your Password"
                          
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span class="input-group-text" id="basic-addon2">
                        <button type="button" className="btn password-btn" onClick={handlePasswordChange}>
                          {isChangingPassword ? "Save Password" : "Change Password"}
                        </button>
                        </span>
                      </div>

                    </div>
                    <div className="col-12 col-md-6">
                      <label className="profile-label">Phone Number</label>
                      <input
                        type="text"
                        className="form-control input-feed"
                        name="phone"
                        value={profile.phone}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        placeholder="Enter Your Phone Number"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col text-center justify-content-center">
                      {isEditing ? (
                        <button
                          type="button"
                          className="custom-btn"
                          onClick={handleSave}
                        >
                          Save Profile
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="custom-btn"
                          onClick={handleEdit}
                        >
                          Update Profile
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderHistory />
    </div>
  );
};

export default Profile;
