import React, { useState } from "react";
import { Dropdown, Toast } from "react-bootstrap";

const OfferOption = () => {
  const [sortKey, setSortKey] = useState("");
  const [selectedSorts, setSelectedSorts] = useState([]);

  const handleSortChange = (key) => {
    if (!selectedSorts.includes(key)) {
      setSelectedSorts([...selectedSorts, key]);
    }
    setSortKey(key);
    // Implement sorting logic here if necessary
  };

  const handleToastClose = (key) => {
    setSelectedSorts(selectedSorts.filter((sort) => sort !== key));
  };

  const options = [
    "Spices",
    "Spices & Tea",
    "Sauces",
    "Dal",
    "Pulp",
    "Dairy Valley",
    "Patak",
    "Rice",
    "Thai",
    "Mehl / Atta",
    "Konserven",
    "Pasta",
  ];

  return (
    <div className="offer-option p-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 position-relative">
            <div className="Offerbtn-banner">
              <div>
                <button className="custom-btn promoOffer-btn">Deal Of The Day</button>
                <button className="custom-btn promoOffer-btn">Combo Offer</button>
                <button className="custom-btn promoOffer-btn">Angebot</button>
              </div>
            </div>
          </div>
          <div className="col-6 position-relative">
            <div className="sonderangebot-banner float-end">
              <div>
                <button className="custom-btn promoOffer-btn">Start Date</button>
                <button className="custom-btn promoOffer-btn">Today</button>
                <button className="custom-btn promoOffer-btn">End Date</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4 mt-5 d-flex align-items-center">
          <div className="col-lg-10 col-12 d-flex flex-wrap order-sm-2 order-md-2 order-lg-1 order-2">
            {selectedSorts.map((sort, index) => (
              <Toast key={index} className="w-auto m-2 toast-box">
                <Toast.Body className="w-auto toast-btn">
                  {sort}
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => handleToastClose(sort)}
                  ></button>
                </Toast.Body>
              </Toast>
            ))}
          </div>
          <div className="col-lg-2 col-12 order-sm-1 order-md-1 order-lg-2 order-1">
            <Dropdown className="float-end">
              <Dropdown.Toggle id="dropdown-basic" className="filter-btn">
                Sort Options
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {options.map((option, index) => (
                  <Dropdown.Item key={index} onClick={() => handleSortChange(option)}>
                    {option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferOption;
