import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './nonFoodProduct.css';  
import images from "../../constants/images";

const NonFoodProduct = () => {
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
    <div className='nonfoodProduct_List mb-90'>
      <div className='container'>
        <div className='row mb-40' >
          <div className='col-6'>
            <div className='nonFoodHeading'>
              <h3>Our Non Food Products</h3>
              <h6>Over 2000+ products available</h6>
            </div>
          </div>
          <div className='col-6'>
            <div className='text-right'>
            <div className='nonFoodProduct-view'>
              <Link to="">View all</Link>
              </div>
            </div>
          </div>
        </div>
        <div  className='row'>
          {products.map(product => (
            <div className='col-2 text-center'>
            <div key={product.id}  className='nonFoodProduct-item2 mb-3 '>
              <div variant="link" className="product-button">
                <Link to="">
                  <img src={product.imgSrc} alt={product.name} className='product-image2'/>
                  <h6>{product.name}</h6>
                </Link>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NonFoodProduct;