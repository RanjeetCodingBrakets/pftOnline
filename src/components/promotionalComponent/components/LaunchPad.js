import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlusSquare } from "react-icons/bs";

const LaunchPad = ({ offerMockData }) => {
  const [itemsToShow, setItemsToShow] = useState(11);

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 11);
  };

  return (
    <div className='mb-90'>
      <div className="container">
        <div className="row p-4 offer-container launchPad">
          <div className="col-8">
            <h3>Launch pad (New Launch products)</h3>
            <h5>Offer valid on 19.07.</h5>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-end">
            <h5>Time left: 2h 45m</h5>
          </div>
        </div>

        <div className="row product-promo-grid promoGrid-launchPad position-relative">
          {offerMockData.slice(0, itemsToShow).map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <Link to="/product-details" className="product-card-link">
                <div className="card offer-card position-relative">
                  <img src={product.image} alt={product.title} className="offer-gridImg m-auto" />
                  
                  <div className="card-body offer-body">
                    {product.label && <span className="badge seller-banner position-absolute">{product.label}</span>}
                    <p className="card-text position-absolute discount-banner">
                      <small className="">{product.discount}</small>
                    </p>
                    <div className='offerGrid-content'>
                    <h5 className="card-title offerGrid-title">{product.title}</h5>
                    <p className="card-text prod-quantity">{product.size}</p>
                    </div>
                    <div className='d-flex justify-content-between price-section'>
                    <p className="card-text offer-price">
                    {product.price} <span className=" text-decoration-line-through">{product.discounted_price}</span>
                    </p>
                    <p className="card-text prod-weight">
                      <small>{product.weight}</small>
                    </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
          ))}
          {itemsToShow < offerMockData.length && (
            <button onClick={handleShowMore} className="position-absolute showMore-btn launchPad-showBtn">
            <BsPlusSquare  className='showMore-icon'/>
            <br/>
            <span>
              Show More Products
              </span>
            </button>
        )}
        </div>

        
      </div>
    </div>
  );
};

export default LaunchPad;