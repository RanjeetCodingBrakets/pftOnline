import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import "./weekendSale.css";

const WeekendSale = () => {
  return (
    <div className="sale">
      <div className="container sale_banner rounded-4">
        <div className="row p-4 ">
          <div className="col-5 text-left text-md-left">
            <div className="position-relative">
              <h3>% Flat Sale % </h3>
              <h6>Greate promotions,save up to 35% only for short time!</h6>
              <img src={images.gift1} alt="Gifts" className="gift1_image" />
              <img src={images.gift2} alt="Gifts" className="gift2_image" />
            </div>
          </div>
          <div className="col-4">
            <div>
              timer
            </div>
          </div>
          <div className="col-3 p-3 text-center ">
            <div className="view_button">
              <Link to="" >
                About the Offer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekendSale;

// import React from 'react'
// import images from "../../constants/images";
// import { Button, Carousel, Container, Row, Col } from 'react-bootstrap';
// import './weekendSale.css';

// const WeekendSale = () => {
//   return (
//     <div className='sale'>
//     <div className='sale_container'>

//               <div>
//               <h5 >Daily Tuesday Night</h5>
//               <button>50% Sale</button>
//               </div>
//               <div className='sale_images'>
//     <img  src={images.spices} alt='spices' className='spices_image'/>
//     <img className='fruitjuice'src={images.fruitjuice} alt='fruitjuic'/>
//     </div>

//               <div>
//                 <button>View Product</button>
//               </div>

//           </div>

//     </div>

//   );
// };

// export default WeekendSale;
