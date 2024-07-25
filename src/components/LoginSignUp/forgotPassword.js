import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";
import './LoginSignup.css'; 

const ForgotPassword = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log({ email, password, confirmPassword });
  };

  return (
    <Modal show={show} onHide={handleClose} centered className='forgot-m'>
      <Modal.Body className='forgot-body'>
        <div className="d-block forgot-head">
          <h5 className="text-center head-t">Forgot Password <button type="button" className="close close-forget float-end" onClick={handleClose}>
            <IoMdClose />
          </button></h5>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-2">
            <Form.Label className='forgot-label'>Email Address</Form.Label>
            <Form.Control 
            className='forgot-input'
              type="email" 
              placeholder="Enter Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-2">
            <Form.Label className='forgot-label'>Password</Form.Label>
            <Form.Control 
            className='forgot-input'
              type="password" 
              placeholder="Enter Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label className='forgot-label'>Confirm Password</Form.Label>
            <Form.Control 
            className='forgot-input'
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </Form.Group>
          <div className='d-flex justify-content-center'>
          <Button type="submit" className="forgot-sub w-75">
            Reset Password
          </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ForgotPassword;
