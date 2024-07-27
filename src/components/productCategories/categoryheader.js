import React from "react";
import { Button } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";

const Categoryheader = ({ selectedCategory }) => {
  return (
    <div className="container">
    <div className="row category-head">
    <div className="col-6">
        <h1>Spices</h1>
        </div>
        <div className="col-6 ">
        <div className="search-cate">
        <Button><IoSearchOutline /></Button>
        <input type="text" placeholder="Search items or categories" className="input-catgry" />
        </div>
        </div>

      </div>
    </div>
  );
};

export default Categoryheader;
