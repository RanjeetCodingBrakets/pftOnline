import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {   Button } from 'react-bootstrap';  
import images from "../../constants/images";
import './popularProduct.css'; 
import { IoIosArrowDown } from "react-icons/io";
const PopularProduct = () => {
  const [popularProducts] = useState([
    { id: 1, name: 'Matcha Green Tea powder ', imgSrc: images.teaPowder },
    { id: 2, name: 'Matcha Green Tea powder ', imgSrc: images.teaPowder},
    { id: 3, name: 'Matcha Green Tea powder ', imgSrc: images.teaPowder},
    { id: 4, name: 'Matcha Green Tea powder ', imgSrc: images.teaPowder },
    { id: 5, name: 'Matcha Green Tea powder ', imgSrc: images.teaPowder},
    { id: 5, name: 'Matcha Green Tea powder ', imgSrc: images.teaPowder},
  ]);

  return (
    <div className='popularProduct_List1 position-relative mb-50 '>
    <img src={images.moongDal} alt='' className='dalImage position-absolute' ></img>
        <img src={images.spices1} alt='' className='spices1 position-absolute' ></img>
      <div className='container '>


      <div className='row mb-90'>     
          <div className='col-4'>
          <div className='discount-product'>
          <div className='row'>
          <div className='col-6'>
          <div className='discount_content'>
            <div><span>50% Off</span></div>
              <h3>Fresh Organic Juice</h3>
              <Link to="" className='discount_link'>View Products</Link>
            </div>
          </div>
          <div className='col-6 '> 
          <div className='discount-image'>
          <img src={images.fruit1} alt=''/>
          </div>
          </div>
          </div>
          </div>      
            </div>

            <div className='col-4'>
          <div className='discount-product'>
          <div className='row'>
          <div className='col-6'>
          <div className='discount_content'>
            <div><span>50% Off</span></div>
              <h3>All Organic Masala</h3>
              <Link to="" className='discount_link'>View Products</Link>
            </div>
          </div>
          <div className='col-6 '> 
          <div className='discount-image'>
          <img src={images.spices} alt=''/>
          </div>
          </div>
          </div>
          </div>      
            </div>

            <div className='col-4'>
          <div className='discount-product'>
          <div className='row'>
          <div className='col-6'>
          <div className='discount_content'>
            <div><span>50% Off</span></div>
              <h3>All Organic Dal</h3>
              <Link to="" className='discount_link'>View Products</Link>
            </div>
          </div>
          <div className='col-6 '> 
          <div className='discount-image'>
          <img src={images.dal} alt=''/>
          </div>
          </div>
          </div>
          </div>      
            </div>

            

      
      </div>
      
      <div className='row mb-50'>
      <div className='col-12'>
      <div className='product_heading'>
      
        <h3 className='text-center'>Choose From Popular Products</h3>
        <h6 className='text-center'>Over 250+ products available</h6>
        </div>
        </div>

        </div>
        <div className='row p-5 '>
          {popularProducts.map(product => (
            <div className='col-2 text-center'>
            <div key={product.id} className='product-item p-2'>
                <Link to=""   >
                  <img src={product.imgSrc} alt={product.name} className='product-image ' />
                  <h5>{product.name}</h5>
                </Link>
             
            </div>
            </div>
          ))}

       
        </div>
        <div className='row'>
          <div className='col-12  text-center'>
            <div className='popularProduct-viewMore'>
            <Link to=''>View More <IoIosArrowDown /></Link>
            </div>
          </div>
        </div>
        </div>
      </div>

  );
}

export default PopularProduct;
