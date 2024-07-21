import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './feedback.css';
import images from "../../constants/images";

const feedbackData = [
  {
    id: 1,
    name: 'Manisha Singh',
    role: 'Customer Of Our Shop',
    feedback: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    imgSrc: images.manisha, 
  },
  {
    id: 2,
    name: 'Manisha Singh',
    role: 'Customer Of Our Shop',
    feedback: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    imgSrc: images.manisha, 
  },
  {
    id: 3,
    name: 'Manisha Singh',
    role: 'Customer Of Our Shop',
    feedback: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    imgSrc: images.manisha, 
  },
 
];

const CustomerFeedback = () => {
  return (
    <Container className="feedback-container">
      <h2>Our Customer Feedback</h2>
      <h4>Over 200+ Happy Customer Feedback</h4>
      <Carousel className='carousel_feedback' 
      interval={4000} 
      indicators={true} 
      nextIcon={<span className="custom-next">&#8250;</span>}
      prevIcon={<span className="custom-prev">&#8249;</span>}>

        {feedbackData.map((feedback, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <div className="feedback-card">
              <Row className="g-0">
                <Col md={4}>
                  <img src={feedback.imgSrc} className="img-fluid rounded-3" alt={feedback.name} />
                </Col>
                <Col md={8}>
                  <div className="feedback-body">
                    <p className="feedback-content">{feedback.feedback}</p>
                    <p className="feedback-name">
                      <strong>{feedback.name}</strong><br />
                      <small>{feedback.role}</small>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

    </Container>
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
 
// ];

// const CustomerFeedback = () => {
//   return (
//     <Container className="feedback-container">
//       <h2>Our Customer Feedback</h2>
//       <h4>Over 200+ Happy Customer Feedback</h4>
//       <Carousel interval={null} controls indicators={false}>
//         {feedbackData.map((feedback, index) => (
//           <Carousel.Item key={index} className="carousel-item">
//             <div className="card feedback-card">
//               <Row className="g-0">
//                 <Col md={4}>
//                   <img src={feedback.imgSrc} className="img-fluid rounded-start" alt={feedback.name} />
//                 </Col>
//                 <Col md={8}>
//                   <div className="card-body feedback-body">
//                     <p className="card-text feedback-content">{feedback.feedback}</p>
//                     <p className="card-text feedback-name">
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
