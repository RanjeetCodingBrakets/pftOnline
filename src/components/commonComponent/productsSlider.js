import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ products }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings} className='p-slider'>
                {products.map(product => (
                    <div>
                        <Link to="" className="product-card-link">
                            <div className="product-card mb-4">
                                <div className='product-outer mx-auto'>
                                <img src={product.image} alt={product.name} className="img-fluid" />
                                </div>
                                <h3>{product.name}</h3>
                                <hr className="divide" />
                                <div className='product-rate'>
                                    <p className='p-2'>₹{product.price.toFixed(2)} <span className='float-end product-price'>{product.weight}</span></p>

                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

            </Slider>
        </>
    );
};

export default ProductSlider;
