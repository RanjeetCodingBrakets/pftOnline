import React from 'react';
import images from "../../constants/images";
import { Link } from 'react-router-dom';
import { FaPhoneVolume } from "react-icons/fa6";
import { Button, Carousel, Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='home_top_section'>
          <Container fluid>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-left">
                <div className='pulses_image'>
                  <img src={images.pulses} alt='yellow_peas' />
                </div>
                <div className='organic'>
                  <h5>100% Organic</h5>
                  <h1>The <span className='blend'>Blend</span> Of <span className="quality">Quality</span></h1>
                  <Button className='buttons'>
                    <Link to='#'><FaPhoneVolume /> +91 1234567890</Link>
                  </Button>
                </div>
                <div className='mint_image'>
                  <img src={images.mint} alt='mint' />
                </div>
              </Col>
              <Col md={6} className="text-center text-md-right">
              <div className='stick_image'>
                  <img src={images.stick} alt='stick'></img>
                  </div>

                <div className='bg_image'>
                <img src={images.stick} alt='stick' className='stick_image'></img>
                  <img src={images.bg} alt='people' />
                  
                </div>
                <div className='rice_image'>
                  <img src={images.rice} alt='rice' />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      
      {/* Add more Carousel.Items as needed */}
      <Carousel.Item>
      <div className='home_top_section'>
          <Container fluid>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-left">
                <div className='pulses_image'>
                  <img src={images.pulses} alt='yellow_peas' />
                </div>
                <div className='organic'>
                  <h5>100% Organic</h5>
                  <h1>The <span className='blend'>Blend</span> Of <span className="quality">Quality</span></h1>
                  <Button className='buttons'>
                    <Link to='#'><FaPhoneVolume /> +91 1234567890</Link>
                  </Button>
                </div>
                <div className='mint_image'>
                  <img src={images.mint} alt='mint' />
                </div>
              </Col>
              <Col md={6} className="text-center text-md-right">
              <div className='stick_image'>
                  <img src={images.stick} alt='stick'></img>
                  </div>

                <div className='bg_image'>
                <img src={images.stick} alt='stick' className='stick_image'></img>
                  <img src={images.bg} alt='people' />
                  
                </div>
                <div className='rice_image'>
                  <img src={images.rice} alt='rice' />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
