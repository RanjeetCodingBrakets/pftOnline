import React from 'react';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './aboutUs.css';



const AboutUs = () => {
  return (
    <div className='about  '>
    <div className='container  '>
   <div className='subscribe_banner '>
    <div className='row ounded-4 p-4 mb-40 position-relative '>
    <div className="col-6">
    <div className='subscribe-section'>
    <h4>Sign Up to Get <br/> Updates & News <span>About Us</span></h4>
    </div>
    <div className='position-absolute'>
    <img className='aboutSpice-img' src={images.spices2} alt='masale'/>
    <img className='aboutFruitjuice-img' src={images.fruitjuice} alt='fruitjuice'/>
    </div>
          </div>
          <div className="col-6 d-flex justify-content-end">
          <div className='subscribe'>
           <span> <input type='email' placeholder='Enter Youe Email'></input>
            <Link to='#'>subscribe</Link>
            </span>
          </div>
     
          
    </div>
</div>
</div>

        <div className='row '>
            <div className='col-6'>
            <div className='box-image'>
            <img src={images.stick} alt='' className='about_stick' />
      <img src={images.sp} alt='' className='about_sp' />
      <img src={images.wheat} alt='' className='about_wheat' />
      <img src={images.mint} alt='' className='about_mint' />
    </div>
            
            </div>
            <div className='col-6'>
            <div className='about_content'>
                <h4>About <span>Us</span></h4>
                <h3>Committed for best quality products</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                 previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print,
                and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text 
                commonly used in the graphic, print, and publishing industries for previewing layouts and visual
                mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing 
                industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly
                 used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                 <Link to='#'>Contact Us</Link>
            </div>

            </div>   
        </div>
    
    </div>
      
    </div>
  )
}

export default AboutUs;
