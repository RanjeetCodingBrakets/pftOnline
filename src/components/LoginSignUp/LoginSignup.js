import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './LoginSignup.css'; 
import images from '../../constants/images';

const LoginSignup = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password });
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="login-modal">
      <Modal.Body className="login-modal-body">
        <div className="image-section">
          <img src={images.grains} alt="Food Grains" className="modal-image" />
        </div>
        <div className="form-section">
          <div className="modal-header">
            <h5 className="modal-title">Login / Signup</h5>
            <button type="button" className="close" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className='d-flex'>
            <Button>SignUp With Google</Button>
            <Button>SignUp With Facebook</Button>
          </div>
         
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginSignup;
