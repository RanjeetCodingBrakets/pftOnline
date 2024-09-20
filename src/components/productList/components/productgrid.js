import React, { useState } from "react";
import { Col, Dropdown, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
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

  return (
    < >
      <div className="row mb-4 d-flex align-items-center ">
        <div className="col-lg-9 col-12 d-flex flex-wrap order-sm-2 order-md-2 order-lg-1 order-2">
          {selectedSorts.map((sort, index) => (
            <Toast key={index} className="w-auto m-1 toast-box ">
              <Toast.Body className="w-auto toast-btn">
                {sort}
                <button
                  type="button"
                  className="btn-close "
                  aria-label="Close"
                  onClick={() => handleToastClose(sort)}
                ></button>
              </Toast.Body>
            </Toast>
          ))}
        </div>
        <div className="col-lg-3 col-12 order-sm-1 order-md-1 order-lg-2 order-1">
          <Dropdown className="float-end">
            <Dropdown.Toggle id="dropdown-basic" className="filter-btn">
              Sort Options
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="drop-sort-opt" onClick={() => handleSortChange("price")}>
                Sort by Price
              </Dropdown.Item>
              <Dropdown.Item className="drop-sort-opt" onClick={() => handleSortChange("name")}>
                Sort by Name
              </Dropdown.Item>
              <Dropdown.Item className="drop-sort-opt" onClick={() => handleSortChange("bestseller")}>
                Sort by Best Seller
              </Dropdown.Item>
              <Dropdown.Item className="drop-sort-opt" onClick={() => handleSortChange("newarrival")}>
                Sort by New Arrival
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <Col key={product.id} xs={6} sm={6} md={6} lg={4}>
            <Link to="/product-details" className="product-card-link">
              <div className="product-card  mb-4">
                <div className="product-outer mx-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                </div>
                <h3>{product.name}</h3>
                <hr className="divide" />
                <div className="product-rate">
                  <p className="p-2">
                    ₹{product.price.toFixed(2)}{" "}
                    <span className="float-end product-price">
                      {product.weight}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
