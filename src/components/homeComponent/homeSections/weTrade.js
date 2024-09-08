import React, { useEffect, useRef } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const WeTrade = ({ items }) => {
  const tradeSlider = useRef()
  const $ = window.$;
  useEffect(() => {
    const loadOwlCarousel = () => {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
      script.onload = () => {
        // const $ = window.$;
        const owl = $('.owl-carousel.weTrade-carousel');
        owl.owlCarousel({
          loop: true,
          margin: 10,
          nav: false,  
          dots: false,
          responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 5 }
          }
        });
    
       
      };
      document.body.appendChild(script);
      return script;
    };

    const script = loadOwlCarousel();

    // Cleanup function to remove the script and destroy the carousel
    return () => {
      if (script) {
        document.body.removeChild(script);
      }
      if (window.$ && window.$('.owl-carousel.weTrade-carousel').data('owl.carousel')) {
        window.$('.owl-carousel.weTrade-carousel').owlCarousel('destroy');
      }
    };
  }, []);

  const prevTrade = () => { $(tradeSlider.current).trigger('prev.owl.carousel') }
  const nextTrade = () => {$(tradeSlider.current).trigger('next.owl.carousel');}

  return (
    <div className='container we-trade position-relative'>
      <div className='row'>
        <div className='col'>
          <h3>We Trade</h3>
        </div>
      </div>
      <div className='custom-nav'>
        <button onClick={prevTrade} className='prev-slide prev__click'><GrFormPrevious /></button>
        <button onClick={nextTrade} className='next-slide next__click'><GrFormNext /></button>
      </div>
      <div className="owl-carousel owl-theme weTrade-carousel" ref={tradeSlider}>
        {items.map((item, index) => (
          <div className="item weTrade-carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeTrade;

