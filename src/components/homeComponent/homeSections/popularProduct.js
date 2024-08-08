import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../../constants/images";

const PopularProduct = () => {
  const [popular] = useState([
    { id: 1, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 2, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 3, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 4, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 5, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
    { id: 6, name: "Matcha Green Tea powder ", imgSrc: images.teaPowder },
  ]);

  return (
    <div className="popularProduct_List1 position-relative mb-50">
      <img
        src={images.moongDal}
        alt="Dal"
        className="dalImage position-absolute"
      ></img>
      <img
        src={images.spices1}
        alt="Spices"
        className="spices1 position-absolute"
      ></img>
      <div className="container">
        <div className="row mb-50 discount-block justify-content-center">
          <div className="col-md-4 col-lg-4 col-sm-10 col-12 mb-4 ">
            <div className="discount-product discount-juice d-flex justify-content-between">
              <div>
                <p>50% Off</p>
                <h3 className="mb-3 text-white fw-bold">
                  Fresh Organic <span className="break-line">Juice</span>{" "}
                </h3>
                <Link to="/Promotional" className="discount_link btn-dark">
                  View Products
                </Link>
              </div>
              {/* <div className="f-image">   
                 <img src={images.fruit1} alt="Fruits" />
              </div> */}
            </div>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-10 col-12 mb-4">
            <div className="discount-product discount-masala d-flex justify-content-between">
              <div>
                <p>50% Off</p>
                <h3 className="mb-3 text-white fw-bold">
                  All Organic <span className="break-line">Masala</span>{" "}
                </h3>
                <Link to="/Promotional" className="discount_link btn-dark">
                  View Products
                </Link>
              </div>
              {/* <div className="f-image">   
                 <img src={images.spices} alt="spices" className="spice-img" />
                </div> */}
            </div>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-10 col-12 mb-4">
            <div className="discount-product discount-dal d-flex justify-content-between">
              <div>
                <p>50% Off</p>

                <h3 className="mb-3 text-white fw-bold">
                  All Organic <span className="break-line">Dal</span>
                </h3>
                <Link to="/Promotional" className="discount_link btn-dark">
                  View Products
                </Link>
              </div>
              {/* <div className="f-image">   
                 <img src={images.dal} alt="dal" />
                </div>   */}
            </div>
          </div>
        </div>

        <div className="row mb-90 p-prod">
          <div className="col-12">
            <div className="product_heading">
              <h3 className="text-center">Choose From Popular Products</h3>
              <h6 className="text-center">Over 250+ products available</h6>
            </div>
          </div>
        </div>

        <div className="row mb-40">
          {popular.map((product) => (
            <div
              key={product.id}
              className="col-lg-2 col-md-3 col-sm-3 col-6 text-center mb-4"
            >
              <div className="product-item p-2">
                <Link to="">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="product-image"
                  />
                  <h5>{product.name}</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="popularProduct-viewMore btn-dark">
              <Link to="">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
