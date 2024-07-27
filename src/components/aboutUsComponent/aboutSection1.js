import React from 'react'
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import "./aboutUs.css";
import WeekendSale from '../homeComponent/homeSections/weekendSale';

const AboutSection1 = () => {
  return (
    <div className='about-section1'>
       <div className="container">
       <div className='row mb-50'>
        <div className='col-12 about-head'>
        <h3>Home &#x3e; About Us</h3>
        <div/>

        </div>
       </div>
              <div className="row ">
                <div className="col-md-6 col-12  ">
                  
                <div className="about_content about-con">
              <h4>
                About <span>Us</span>
              </h4>
              <h3>Committed to best quality products</h3>
              <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
               print, and publishing industries for previewing layouts and
                visual mockups.Lorem ipsum is placeholder text commonly used in
               the graphic, print, and publishing industries for previewing
                layouts and visual mockups.Lorem ipsum is placeholder text
                commonly used in the graphic, print, and publishing industries
                 for previewing layouts and visual mockups.Lorem ipsum is
                 placeholder text commonly used in the graphic, print, and
                 publishing industries for previewing layouts and visual
              mockups.Lorem ipsum is placeholder text commonly used in the
               graphic, print, and publishing industries for previewing layouts
                 and visual mockups.
              </p>
              <h5><img src={images.layer2} alt='layer' className='mr-2'/>Lorem ipsum is placeholder text commonly</h5>
              <h5><img src={images.layer2} alt='layer' className='mr-2'/>Lorem ipsum is placeholder text commonly</h5>
              <h5><img src={images.layer2} alt='layer' className='mr-2'/>Lorem ipsum is placeholder text commonly</h5>
              <h5><img src={images.layer2} alt='layer' className='mr-2' />Lorem ipsum is placeholder text commonly</h5>
              <Link className="btn-light" to="#">Contact Us</Link>
            </div>
                 
                </div>
                <div className="col-md-6 col-12">
                  <div className="slider-images d-flex justify-content-center">
                    <div className="bg_image">
                      
                      <img src={images.bg} alt="people" className="people_image" />
                      {/* <div className='curve-img position-absolute'>
                        <img src={images.curvetext} alt='curvetext' className=''/>
                      </div> */}
                      
                    </div>
               
                  
                  </div>
                </div>
              </div>
            </div>
            <WeekendSale/>
    </div>
  )
}

export default AboutSection1;
