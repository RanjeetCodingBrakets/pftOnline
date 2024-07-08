import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import images from "../../constants/images";
import './weTrade.css';

const WeTrade = () => {
  const [tradeImages, setTradeImages] = useState([
    { id: 1, src: images.aashirvaad, alt: 'Image 1' },
    { id: 2, src: images.aashirvaad, alt: 'Image 2' },
    { id: 3, src: images.aashirvaad, alt: 'Image 3' },
    { id: 4, src: images.aashirvaad, alt: 'Image 4' },
    { id: 5, src: images.aashirvaad, alt: 'Image 5' },
    { id: 6, src: images.aashirvaad, alt: 'Image 6' },
    { id: 7, src: images.aashirvaad, alt: 'Image 7' },
    { id: 8, src: images.aashirvaad, alt: 'Image 8' },
    { id: 8, src: images.aashirvaad, alt: 'Image 8' },
    { id: 8, src: images.aashirvaad, alt: 'Image 8' },
  ]);

  const showImages = [];
  for (let i = 0; i < tradeImages.length; i += 5) {
    showImages.push(tradeImages.slice(i, i + 5));
  }

  return (
    <Container className='carousel-container'>
    <div className=''>
      <h3>We Trade</h3>
      <Carousel indicators={false}>
        {showImages.map((group, index) => (
          <Carousel.Item key={index}>
            <Row>
              {group.map((image) => (
                <Col key={image.id} xs={12} sm={6} md={4} lg={2}>
                  <img className='d-block w-100' src={image.src} alt={image.alt} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </Container>
  );
};

export default WeTrade;
