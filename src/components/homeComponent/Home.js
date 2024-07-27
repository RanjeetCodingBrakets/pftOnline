import React from 'react';
import Slider from './homeSections/Slider';
import images from "../../constants/images";
import "./home.css";
import WeekendSale from './homeSections/weekendSale';
import WeTrade from './homeSections/weTrade';
import PopularProduct from './homeSections/popularProduct';
import FoodProduct from './homeSections/foodProduct';
import NonFoodProduct from './homeSections/nonFoodProduct';
import About from './homeSections/about';
import CustomerFeedback from './homeSections/feedback';
import Questions from './homeSections/Questions';


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
    <PopularProduct/>
    <FoodProduct/>
    <NonFoodProduct/>
    <About/>
    <CustomerFeedback/>
    <Questions/>
      
      
     
    </>
      
  );
}

export default Home;