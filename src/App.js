import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/homeComponent/Home';
import AboutUs from './components/aboutUsComponent/aboutUs';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact 
            path="/"
            element={
              <Home />
          }/>
          <Route exact 
            path="/about-us"
            element={
              <AboutUs/>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
