import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SortOptions from './sortOption';

const ProductGrid = ({ products }) => (
  <Container className='mb-90'>
    <Row>
      <Col>
        <SortOptions />
      </Col>
    </Row>
    <Row>
      {products.map(product => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
          <Link to="" className="product-card-link">
            <div className="product-card">
              <img src={product.image} alt={product.name} className="img-fluid" />
              <h3>{product.name}</h3>
              <hr className="divide" />
              <div className='d-flex '>
              <p>₹{product.price.toFixed(2)}</p>
              <span>{product.weight}</span>
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductGrid;
















// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import SortOptions from './sortOption';

// const ProductGrid = ({ products }) => (
//   <Container>
//   <Row>
//     <Col>
//         <SortOptions/>
//     </Col>
//   </Row>
//     <Row>
//       {products.map(product => (
//         <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
//           <div className="product-card">
//             <img src={product.image} alt={product.name} className="img-fluid" />
//             <h3>{product.name}</h3>
//             <p>₹{product.price.toFixed(2)}</p>
//             <span>{product.weight}</span>
//           </div>
//         </Col>
//       ))}
//     </Row>
//   </Container>
// );

// export default ProductGrid;
