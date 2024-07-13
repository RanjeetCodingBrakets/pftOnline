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


const Home = () => {
  return (
    <>
      <Slider/>
      <WeekendSale/>
      <WeTrade/>
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