import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsPlusSquare } from "react-icons/bs";
import LiveTimer from '../../commonComponent/liveTimer';

const DealOfTheDay = ({ offerMockData }) => {
  // const [itemsToShow, setItemsToShow] = useState(11);

  // const handleShowMore = () => {
  //   setItemsToShow((prev) => prev + 11);
  // };
  const [itemsToShow, setItemsToShow] = useState(11);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if the width is less than or equal to 768px (mobile view)
    };

    // Check the window width on component mount
    handleResize();

    // Add event listener to handle resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Set itemsToShow to 7 if on mobile view, otherwise 11
    setItemsToShow(isMobile ? 7 : 11);
  }, [isMobile]);

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 6); // Add more items based on the view
  };

  return (
    <div className='mb-30'>
      <div className="container">
        <div className="row p-3 offer-container DealOfThe-day">
          <div className="col-6">
            <h3>Deal Of The Day</h3>
            <h5>Offer valid on 19.07.</h5>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
          <LiveTimer offerTimer="offer-timer" initialHours={10} initialMinutes={0} initialSeconds={0} />
          </div>
        </div>

        <div className="row product-promo-grid promoGridDealOfTheDay position-relative">
          {offerMockData.slice(0, itemsToShow).map((product) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3" key={product.id}>
              <Link to="/product-details" className="product-card-link">
                <div className="card offer-card position-relative">
                <div className="promoOffer-img d-flex justify-content-center align-items-center">
                  <img src={product.image} alt={product.title} className="offer-gridImg m-auto" />
                  </div>
                  <div className="card-body offer-body">
                    {product.label && <span className="badge seller-banner position-absolute">{product.label}</span>}
                    <p className="card-text position-absolute discount-banner">
                      <span className="">{product.discount}</span>
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
            <button onClick={handleShowMore} className="position-absolute showMore-btn dealofTheDay-showbtn">
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

export default DealOfTheDay;
