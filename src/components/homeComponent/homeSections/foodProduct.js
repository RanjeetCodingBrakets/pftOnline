import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

// import './foodProduct.css';  
import images from "../../../constants/images";

const FoodProduct = () => {
  useEffect(() => {
    const loadOwlCarousel = () => {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
      script.onload = () => {
        const $ = window.$;
        const owl = $('.owl-carousel.foodPro-carousel');
        owl.owlCarousel({
          loop: false,
          margin: 10,
          nav: false,  
          dots: false,
          stagePadding:30, 
          responsive: {
           0: { items: 2, stagePadding: 20 }, // Show 1 item with small padding on smaller screens
          600: { items: 3, stagePadding: 30 },
          1000: { items: 5, stagePadding: 50 } // Adjust based on screen size
          }
        });
      };
      document.body.appendChild(script);
      return script;
    };
  
    const script = loadOwlCarousel();
    return () => {
      if (script) {
        document.body.removeChild(script);
      }
      if (window.$ && window.$('.owl-carousel.foodPro-carousel').data('owl.carousel')) {
        window.$('.owl-carousel.foodPro-carousel').owlCarousel('destroy');
      }
    };
  }, []);
  
  const [food] = useState([
    { id: 1, name: 'Spices', imgSrc: images.teju },
    { id: 2, name: 'Spices & Tea', imgSrc: images.teju },
    { id: 3, name: 'Sauces', imgSrc: images.teju },
    { id: 4, name: 'Dal', imgSrc: images.teju },
    { id: 5, name: 'Pulp', imgSrc: images.teju },
    { id: 6, name: 'Dairy Valley', imgSrc: images.teju },
    { id: 7, name: 'Patak', imgSrc: images.teju },
    { id: 8, name: 'Rice', imgSrc: images.teju },
    { id: 9, name: 'Thai', imgSrc: images.teju },
    { id: 10, name: 'Mehl /Atta', imgSrc: images.teju },
  ]);

  return (
    <div className='foodProduct_List1 mb-50'>
      <div className='container '>
        <div className='row mb-40' >
          <div className='col-8'>
            <div className='foodProduct-content' >
              <h3 >Our Food Products</h3>
              <h6>Over 2000+ products available</h6>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-end'>
            <div className='foodProduct-view anchor-hover' >
              <Link to="#">View all</Link>
            </div>
          </div>
        </div>

        <div className='row food-block justify-content-center pro__show-list'>
          {food.map(product2 => (
            <div className='col-2_5 text-center'>
              <div key={product2.id} className='foodProduct-item mb-4'>
                <Link to="/product-details">
                  <div className='product-image1'>
                    <img src={product2.imgSrc} alt={product2.name} />
                    <h6>{product2.name}</h6>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='food-block owl-carousel owl-theme foodPro-carousel pro__hide-list'>
          {food.map(product2 => (
            <div className='text-center'>
              <div key={product2.id} className='foodProduct-item mb-4'>
                <Link to="/product-details">
                  <div className='product-image1'>
                    <img src={product2.imgSrc} alt={product2.name} />
                    <h6>{product2.name}</h6>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>


  );
}

export default FoodProduct;