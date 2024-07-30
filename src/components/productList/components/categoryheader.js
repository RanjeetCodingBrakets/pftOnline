import React from "react";
import { Button } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";

const Categoryheader = ({ selectedCategory }) => {
  return (
    <div className="container">
      <div className="row category-head mb-90">
        <div className="col-lg-6 col-md-6 col-12 col-sm-6">
          <h1>All Products</h1>
        </div>
        <div className="col-lg-6 col-md-6 col-12 col-sm-6 d-flex justify-content-end ">
          <div class="input-group mb-3 w-75">
            <Button className=" p-0 search-item">
              <span class="px-3 text-dark" id="basic-addon1">
                <IoSearchOutline />
              </span>
            </Button>
            <input
              type="text"
              class="form-control search-inpt w-50"
              placeholder="Search Items And Categories Here"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoryheader;
