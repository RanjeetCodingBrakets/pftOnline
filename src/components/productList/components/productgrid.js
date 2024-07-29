import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  const [sortKey, setSortKey] = useState('');
  const [selectedSorts, setSelectedSorts] = useState([]);

  const handleSortChange = (key) => {
    if (!selectedSorts.includes(key)) {
      setSelectedSorts([...selectedSorts, key]);
    }
    setSortKey(key);
    // Implement sorting logic here if necessary
  };

  const handleToastClose = (key) => {
    setSelectedSorts(selectedSorts.filter(sort => sort !== key));
  };

  return (
    <Container className='mb-90'>
      <Row>
        <Col className='mb-4 d-flex align-items-center'>
          {selectedSorts.map((sort, index) => (
            <Toast key={index} className="me-2">
              <Toast.Body>
                {sort}
                <button 
                  type="button" 
                  className="btn-close ms-2" 
                  aria-label="Close"
                  onClick={() => handleToastClose(sort)}
                ></button>
              </Toast.Body>
            </Toast>
          ))}
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Sort Options
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSortChange('price')}>Sort by Price</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange('name')}>Sort by Name</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange('bestseller')}>Sort by Best Seller</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortChange('newarrival')}>Sort by New Arrival</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
