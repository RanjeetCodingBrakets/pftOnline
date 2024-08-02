import React from 'react';
import images from '../../constants/images';
import './profile.css';

const OrderHistory = () => {
  const orders = [
    { id: 1, productName: 'Punjabi gmnh Gram Masala Powder', quantity: 2, price: 600 },
    { id: 2, productName: 'Punjabi gmnh Gram Masala Powder', quantity: 3, price: 600 },
    { id: 3, productName: 'Punjabi gmnh Gram Masala Powder', quantity: 1, price: 600 }
  ];

  return (
    <div className="container my-5">
      <div className='history-box'>
        <div className="row mb-3">
          <div className="col">
            <h3>Order History</h3>
          </div>
        </div>
        {orders.map((order) => (
          <div key={order.id} className="row align-items-center mb-3 p-2 order-row">
            <div className="col-md-8 col-lg-5 col-12 d-flex align-items-center p-0">
              <div className='history-img'>
                <img src={images.teju} alt="Product" className="me-3 w-100" />
              </div>
              <span>{order.productName}</span>
            </div>
            <div className="col-md-4 col-lg-2 col-4 text-center order-value">
              <h5>Quantity</h5>
              <span>{order.quantity}</span>
            </div>
            <div className="col-md-4 col-lg-2 col-4 text-center order-value">
              <h5>Price</h5>
              <span>₹{order.price.toFixed(2)}</span>
            </div>
            <div className="col-md-4 col-lg-2 col-4  text-center order-value">
              <h5>Amount</h5>
              <span>₹{(order.price * order.quantity).toFixed(2)}</span>
            </div>
            <div className="col-md-4 col-lg-1 col-12 text-center p-0">
              <button className="btn view-order">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
