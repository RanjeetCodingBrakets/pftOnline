import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  const [sortKey, setSortKey] = useState('');

  const handleSortChange = (key) => {
    setSortKey(key);
    // Implement sorting logic here if necessary
  };

  return (
    <Container className='mb-90'>
      <Row>
        <Col className='mb-4'>
          <div className="sort-options">
            <button className='sort-btn' onClick={() => handleSortChange('price')}>Sort by Price</button>
            <button className='sort-btn' onClick={() => handleSortChange('name')}>Sort by Name</button>
            <button className='sort-btn' onClick={() => handleSortChange('bestseller')}>Sort by Best Seller</button>
            <button className='sort-btn' onClick={() => handleSortChange('newarrival')}>Sort by New Arrival</button>
          </div>
        </Col>
      </Row>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={6} lg={4}>
            <Link to="" className="product-card-link">
                            <div className="product-card mb-4">
                                <div className='product-outer'>
                                <img src={product.image} alt={product.name} className="img-fluid" />
                                </div>
                                <h3>{product.name}</h3>
                                <hr className="divide" />
                                <div className='product-rate'>
                                    <p className='p-2'>₹{product.price.toFixed(2)} <span className='float-end product-price'>{product.weight}</span></p>

                                </div>
                            </div>
                        </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
