import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './LoginSignup.css'; 
import { IoMdClose } from "react-icons/io";
import images from '../../constants/images';
import ForgotPassword from './forgotPassword'; 

const LoginSignup = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State for Forgot Password modal

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      console.log({ email, password });
    } else {
      // Handle signup
      console.log({ fullName, email, password });
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setFullName('');
  };

  const handleForgotPassword = () => {
    handleClose(); // Hide the login/signup modal
    setShowForgotPassword(true); // Show the forgot password modal
  };

  const handleForgotPasswordClose = () => {
    setShowForgotPassword(false);
  };

  return (
    <>
      <Modal show={show && !showForgotPassword} onHide={handleClose} centered className="login-modal signup-m">
        <Modal.Body className="login-modal-body">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-12 d-md-block image-section">
              <img src={images.grains} alt="Food Grains" className="img-fluid" />
            </div>
            <div className="col-md-12 col-lg-6 col-12 form-section m-form">
              <div className="modal-header m-head">
                <h5 className="modal-title m-title">{isLogin ? 'Login' : 'Signup'}</h5>
                <button type="button" className="close m-close" onClick={handleClose}>
                  <IoMdClose />
                </button>
              </div>
              <div className='d-flex'>
                <Button className="account-login me-3">
                  <img src={images.go} alt="google" />{isLogin ? 'Login' : 'SignUp'} With Google
                </Button>
                <Button className="account-login">
                  <img src={images.fb} alt="facebook" />{isLogin ? 'Login' : 'SignUp'} With Facebook
                </Button>
              </div>
              <div className="d-flex justify-content-center">
                <div className="separator my-3">OR</div>
              </div>
              <Form onSubmit={handleSubmit}>
                {!isLogin && (
                  <Form.Group controlId="formFullName" className='signup-f mb-3'>
                    <Form.Label className="signup-label">Full Name</Form.Label>
                    <Form.Control 
                      className="signup-detail"
                      type="text" 
                      placeholder="Enter full name" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                    />
                  </Form.Group>
                )}
                <Form.Group controlId="formEmail" className='signup-f mb-3'>
                  <Form.Label className="signup-label">Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    className="signup-detail"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className='signup-f mb-3'>
                  <Form.Label className="signup-label">Password</Form.Label>
                  <Form.Control 
                    className="signup-detail"
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </Form.Group>
                <Button type="submit" className="signup-btn w-100 my-3">
                  {isLogin ? 'Login' : 'Create Account'}
                </Button>
                {isLogin && (
                  <div className="forgot-password text-center mb-3">
                    <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
                  </div>
                )}
                <div className="login-btn mb-5">
                  {isLogin ? 'Don\'t have an account?' : 'Already have an account?'} 
                  <a href="#" onClick={toggleForm}>
                    {isLogin ? ' Sign up' : ' Log in'}
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <ForgotPassword 
        show={showForgotPassword} 
        handleClose={handleForgotPasswordClose} 
      />
    </>
  );
};

export default LoginSignup;
