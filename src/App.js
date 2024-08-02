import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/homeComponent/Home";
import AboutUs from "./components/aboutUsComponent/aboutUs";
import Header from "./components/commonComponent/Header";
import Footer from "./components/commonComponent/Footer";
import TopHeader from "./components/commonComponent/topHeader";
import ProdctDetails from "./components/prductDetails/productDetails";
import ProductListing from "./components/productList/productListing";
import Profile from "./components/profile/profile";

function App() {
  return (
    <Router>
      <TopHeader />
      <Header />
      <div className="main-body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs/>} />
          <Route exact path="/product-Listing" element={<ProductListing/>}/>
          <Route exact path="/product-details" element={<ProdctDetails/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
