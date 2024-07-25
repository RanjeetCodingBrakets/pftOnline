import React from 'react';
// import './feedback.css';
import images from "../../../constants/images";

const CustomerFeedback = () => {
  return (
    <div className="container feedback-container">
      <h2>Our Customer Feedback</h2>
      <h4>Over 200+ Happy Customer Feedback</h4>

      <div id="customCarousel" className="carousel slide">
        <div className="custom-carousel-indicators carousel-indicators">
          <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="feedback-card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={images.manisha} className="img-fluid rounded-3" alt="women-image" />
                </div>
                <div className="col-md-8">
                  <div className="feedback-body">
                    <p className="feedback-content">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <p className="feedback-name">
                      <strong>Manisha Singh</strong><br />
                      <small>Customer Of Our Shop</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="feedback-card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={images.manisha} className="img-fluid rounded-3" alt="women-image" />
                </div>
                <div className="col-md-8">
                  <div className="feedback-body">
                    <p className="feedback-content">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <p className="feedback-name">
                      <strong>Manisha Singh</strong><br />
                      <small>Customer Of Our Shop</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="feedback-card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={images.manisha} className="img-fluid rounded-3" alt="women-image" />
                </div>
                <div className="col-md-8">
                  <div className="feedback-body">
                    <p className="feedback-content">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <p className="feedback-name">
                      <strong>Manisha Singh</strong><br />
                      <small>Customer Of Our Shop</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='position-relative'>
        <button className="custom-carousel-control-prev carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
          <span className="feedback-control-prev-icon" aria-hidden="true">&#8249;</span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="custom-carousel-control-next carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
          <span className="feedback-control-next-icon" aria-hidden="true">&#8250;</span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;









// import React from 'react';
// import { Carousel, Container, Row, Col } from 'react-bootstrap';
// import './feedback.css';
// import images from "../../constants/images";

// const feedbackData = [
//   {
//     id: 1,
//     name: 'Manisha Singh',
//     role: 'Customer Of Our Shop',
//     feedback: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
//     imgSrc: images.manisha, 
//   },
//   {
//     id: 2,
//     name: 'Manisha Singh',
//     role: 'Customer Of Our Shop',
//     feedback: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
//     imgSrc: images.manisha, 
//   },
//   {
//     id: 3,
//     name: 'Manisha Singh',
//     role: 'Customer Of Our Shop',
//     feedback: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
//     imgSrc: images.manisha, 
//   },
 
// ];

// const CustomerFeedback = () => {
//   return (
//     <Container className="feedback-container">
//       <h2>Our Customer Feedback</h2>
//       <h4>Over 200+ Happy Customer Feedback</h4>
//       <Carousel className='carousel_feedback' 
//       interval={4000} 
//       indicators={true} 
//       nextIcon={<span className="custom-next">&#8250;</span>}
//       prevIcon={<span className="custom-prev">&#8249;</span>}>

//         {feedbackData.map((feedback, index) => (
//           <Carousel.Item key={index} className="carousel-item">
//             <div className="feedback-card">
//               <Row className="g-0">
//                 <Col md={4}>
//                   <img src={feedback.imgSrc} className="img-fluid rounded-3" alt={feedback.name} />
//                 </Col>
//                 <Col md={8}>
//                   <div className="feedback-body">
//                     <p className="feedback-content">{feedback.feedback}</p>
//                     <p className="feedback-name">
//                       <strong>{feedback.name}</strong><br />
//                       <small>{feedback.role}</small>
//                     </p>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//     </Container>
//   );
// };

// export default CustomerFeedback;

