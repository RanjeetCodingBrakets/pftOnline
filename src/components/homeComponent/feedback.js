
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

];

const CustomerFeedback = () => {
  return (
    <Container className="feedback-container">
      <h2>Our Customer Feedback</h2>
      <h4>Over 200+ Happy Customer Feedback</h4>
      <Carousel interval={null} controls={false} indicators={false}>
        {feedbackData.map((feedback, index) => (
          <Carousel.Item key={index}>
            <Row className="align-items-center">
              <Col md={4}>
              <div>
                <img className="d-block w-100 rounded-3" src={feedback.imgSrc} alt={feedback.name} />
               </div>
              </Col>
              <Col md={8}>
                <div className="feedback-content">
                  <p>{feedback.feedback}</p>
                  <h5>{feedback.name}</h5>
                  <small>{feedback.role}</small>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      
    </Container>
  );
};

export default CustomerFeedback;
