import React from 'react';
import images from "../../constants/images";
import { Button, Container, Row, Col } from 'react-bootstrap';
import './weekendSale.css';

const WeekendSale = () => {
  return (
    <div className='sale'>
      <div className='container sale_banner rounded-4'>
        <Row className="p-4 ">
          <Col lg={6} className="d-flex justify-content-center align-item-center">
            <h5>Daily Tuesday Night <span className='highlight'>Weekend Sale</span></h5>
            <button className='sale_button'>50% OFF</button>
          </Col>
          <Col lg={6} className="text-center">
            <img src={images.spices} alt='spices' className='spices_image'/>
            <img src={images.fruitjuice} alt='fruit juice' className='fruitjuice'/>
            <button className='view_button'>View Products</button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

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
