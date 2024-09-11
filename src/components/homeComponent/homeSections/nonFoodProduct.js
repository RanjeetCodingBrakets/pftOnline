import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
  
import images from '../../../constants/images';

const NonFoodProduct = () => {
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
          responsive: {
            0: { items: 2 },
            600: { items: 4 },
            1000: { items: 5 }
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

  const [nonFood] = useState([
    { id: 1, name: 'Spices',  imgSrc: images.teju },
    { id: 2, name: 'Spices & Tea', imgSrc: images.teju },
    { id: 3, name: 'Sauces', imgSrc: images.teju},
    { id: 4, name: 'Dal', imgSrc: images.teju },
    { id: 5, name: 'Pulp', imgSrc: images.teju },
    { id: 6, name: 'Dairy Valley', imgSrc: images.teju },
    { id: 7, name: 'Patak', imgSrc: images.teju },
    { id: 8, name: 'Rice', imgSrc: images.teju},
    { id: 9, name: 'Thai', imgSrc: images.teju},
    { id: 10, name: 'Mehl /Atta', imgSrc: images.teju},
  ]);

  return (
    <div className='nonfoodProduct_List mb-90'>
      <div className='container'>
        <div className='row mb-40' >
          <div className='col-8'>
            <div className='nonFoodHeading'>
              <h3>Our Non Food Products</h3>
              <h6>Over 2000+ products available</h6>
            </div>
          </div>
          <div className='col-4'>
            <div className='text-right d-flex justify-content-end'>
            <div className='nonFoodProduct-view anchor-hover'>
              <Link to="">View all</Link>
              </div>
            </div>
          </div>
        </div>
        <div  className='row non-food-block justify-content-center  pro__show-list'>
          {nonFood.map(product1 => (
            <div className='col-2_5 text-center'>
            <div key={product1.id}  className='nonFoodProduct-item2 mb-4 '>
              <div variant="link" className="product-button">
                <Link to="/product-details">
                    <div className='image-container-out'>
                  <img src={product1.imgSrc} alt={product1.name}/>
                  </div>
                  <h6>{product1.name}</h6>
                </Link>
              </div>
            </div>
            </div>
          ))}
        </div>
        <div  className='non-food-block justify-content-center owl-carousel owl-theme foodPro-carousel pro__hide-list'>
          {nonFood.map(product1 => (
            <div className='text-center'>
            <div key={product1.id}  className='nonFoodProduct-item2 mb-4 '>
              <div variant="link" className="product-button">
                <Link to="/product-details">
                  <div className='image-container-out'>
                  <img src={product1.imgSrc} alt={product1.name}/>
                  </div>
                  <h6>{product1.name}</h6>
                </Link>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NonFoodProduct;