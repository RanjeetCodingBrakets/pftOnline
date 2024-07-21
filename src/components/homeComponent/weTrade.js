import React, { useEffect } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import './weTrade.css';

const WeTrade = ({ items }) => {
  useEffect(() => {
    const loadOwlCarousel = () => {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
      script.onload = () => {
        const $ = window.$;
        const owl = $('.owl-carousel');
        owl.owlCarousel({
          loop: true,
          margin: 10,
          nav: false,  
          dots: false,
          responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 5 }
          }
        });

    
        $('.prev-slide').click(function() {
          owl.trigger('prev.owl.carousel');
        });
        $('.next-slide').click(function() {
          owl.trigger('next.owl.carousel');
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
      if (window.$ && window.$('.owl-carousel').data('owl.carousel')) {
        window.$('.owl-carousel').owlCarousel('destroy');
      }
    };
  }, []);

  return (
    <div className='container we-trade position-relative'>
      <div className='row'>
        <div className='col'>
          <h3>We Trade</h3>
        </div>
      </div>
      <div className='custom-nav'>
        <button className='prev-slide'><GrFormPrevious /></button>
        <button className='next-slide'><GrFormNext /></button>
      </div>
      <div className="owl-carousel owl-theme">
        {items.map((item, index) => (
          <div className="item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeTrade;

