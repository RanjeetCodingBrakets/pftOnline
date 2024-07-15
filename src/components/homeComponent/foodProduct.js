import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './foodProduct.css';  
import images from "../../constants/images";

const FoodProduct = () => {
  const [products] = useState([
    { id: 1, name: 'Spices', imgSrc: images.teju },
    { id: 2, name: 'Spices & Tea', imgSrc: images.teju },
    { id: 3, name: 'Sauces', imgSrc: images.teju},
    { id: 4, name: 'Dal', imgSrc: images.teju },
    { id: 5, name: 'Pulp', imgSrc: images.teju },
    { id: 6, name: 'Dairy Valley', imgSrc: images.teju },
    { id: 7, name: 'Patak', imgSrc: images.teju },
    { id: 8, name: 'Rice', imgSrc: images.teju},
    { id: 9, name: 'Thai', imgSrc: images.teju},
    { id: 10, name: 'Mehl /Atta', imgSrc: images.teju},
  ]);

  return (
    <div className='foodProduct_List1 mb-50'>
      <div className='container '>
        <div className='row mb-40' >
          <div className='col-6'>
            <div className='foodProduct-content' >
              <h3 >Our Food Products</h3>
              <h6>Over 2000+ products available</h6>
            </div>
            </div>
            <div className='col-6 d-flex justify-content-end'>
            <div className='foodProduct-view' >
              <Link to="#">View all</Link>
              </div>
              </div>
              </div>
            
       
        <div className='row'>
          {products.map(product => (
            <div className='col-2_5 text-center'>
            <div key={product.id}  className='foodProduct-item mb-4'>
                <Link to="">
                  <img src={product.imgSrc} alt={product.name} className='product-image1'/>
                  <h6>{product.name}</h6>
                </Link>
              </div>
            </div>
          ))}
          </div>
          
          </div>
          </div>
   

  );
}

export default FoodProduct;