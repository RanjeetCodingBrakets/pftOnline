import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productdetails.css';
import images from "../../constants/images";
import ProductSlider from '../commonComponent/productsSlider';

const ProdctDetails = () => {
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);

  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    asNavFor: thumbnailSlider.current,
  };

  const thumbnailSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: mainSlider.current,
    centerMode: true,
    infinite: true,
    arrows: false,
  };

  const products = [
    {
      id: 1,
      name: 'Punjabi gramh Gram Masala Powder',
      price: 299.00,
      weight: '1kg',
      image: images.schinken,
      category: 'Spices'
    },
    {
      id: 2,
      name: 'Punjabi gramh Gram Masala Powder',
      price: 299.00,
      weight: '1kg',
      image: images.sula_wine,
      category: 'Spices'
    },
    {
      id: 3,
      name: 'Punjabi gramh Gram Masala Powder',
      price: 299.00,
      weight: '1kg',
      image: images.kapern,
      category: 'Spices'
    },
    {
      id: 4,
      name: 'Punjabi gramh Gram Masala Powder',
      price: 299.00,
      weight: '1kg',
      image: images.teju,
      category: 'Spices'
    },
    {
      id: 5,
      name: 'Punjabi gramh Gram Masala Powder',
      price: 299.00,
      weight: '1kg',
      image: images.schinken,
      category: 'Spices'
    },
    {
      id: 6,
      name: 'Punjabi gramh Gram Masala Powder',
      price: 299.00,
      weight: '1kg',
      image: images.sula_wine,
      category: 'Spices'
    },
    {
      id: 7,
      name: 'Punjabi gramh Gram Masala Powder',
      price: 299.00,
      weight: '1kg',
      image: images.teju,
      category: 'Spices'
    },

  ];

  return (
    <>
      <section id="product-details">
        <div className='container'>
          <div className='row product-details-img-content'>
            <div className='col-12 col-sm-6'>
              <div className="slider-container prduct-details-page">
                <Slider {...mainSliderSettings} ref={mainSlider}>
                  <div className='product-outer product-outer-c'>
                    <img src={images.teju} alt={images.teju} className="img-fluid" />
                  </div>
                  <div className='product-outer product-outer-c'>
                  <img src={images.teju} alt={images.teju} className="img-fluid" />
                  </div>
                  <div className='product-outer product-outer-c'>
                  <img src={images.teju} alt={images.teju} className="img-fluid" />
                  </div>
                </Slider>
                <Slider {...thumbnailSliderSettings} ref={thumbnailSlider}>
                  <div className='product-outer product-outer-m'>
                  <img src={images.teju} alt={images.teju} className="img-fluid" />
                  </div>
                  <div className='product-outer product-outer-m'>
                  <img src={images.teju} alt={images.teju} className="img-fluid" />
                  </div>
                  <div className='product-outer product-outer-m'>
                  <img src={images.teju} alt={images.teju} className="img-fluid" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className='col-12 col-sm-6'>
              <div className='product-content'>
                <h4>Garam Masala (Premium Big), 1 Kg</h4>
                <small>1 kg</small>
                <div className='p-price'><span>Rs. 60.0</span></div>
                <h4>Product details</h4>
                <ul>
                  <li>Lorem ipsum is placeholder text commonly used in the graphi</li>
                  <li>Lorem ipsum is placeholder text commonly used in the </li>
                  <li>Lorem ipsum is placeholder text commonly used in the graphi</li>
                </ul>
                <p>This product is non-returnable</p>
              </div>
            </div>
          </div>
          <div className='row product-slider'>
            <h2>Similar items</h2>
            <ProductSlider products={products} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProdctDetails;
