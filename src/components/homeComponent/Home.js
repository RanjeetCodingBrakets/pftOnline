import React from 'react';
import Slider from './Slider';
import WeekendSale from './weekendSale';
import WeTrade from './weTrade';
import FoodProduct from './foodProduct';
import NonFoodProduct from './nonFoodProduct';
import AboutUs from './aboutUs';
import CustomerFeedback from './feedback';
import Questions from './Questions';
import PopularProduct from './popularProduct';
import images from "../../constants/images";
import "./home.css";


const Home = () => {
  const carouselItems = [
    <img src={images.aashirvaad} alt="Item 1" />,
    <img src={images.aashirvaad} alt="Item 2" />,
    <img src={images.aashirvaad} alt="Item 3" />,
    <img src={images.aashirvaad} alt="Item 4" />,
    <img src={images.aashirvaad} alt="Item 5" />,
    <img src={images.aashirvaad} alt="Item 6" />,
  ];
  return (
    <>
      <Slider/>
      <WeekendSale/>
      <WeTrade items={carouselItems}/>
      <PopularProduct></PopularProduct>
      <FoodProduct/>
     <NonFoodProduct/> 
     <AboutUs/>
     <CustomerFeedback/>
     <Questions/>
      
     
    </>
      
  );
}

export default Home;