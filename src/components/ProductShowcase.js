import React, { useState } from 'react';
import '../styles/ProductShowcase.css';
import Test from '../assets/Test.png';
import arrow from '../assets/arrow.svg';
import { colors } from '@mui/material';

function ProductShowcase() {

  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      title: "Men's Casual Jacket",
      description: "100% Cotton, Model is 6'1 and Wears Size M",
      price: "$25.00",
      image: Test,
    },
    {
      title: "Men's Casual T-Shirt",
      description: "100% Cotton, Regular Fit",
      price: "$20.00",
      image: Test,
    }
  ];

  return (
    <div className='productShowcase'>
      <div className='productShowcaseCarousel'>
        {/* Arrows */}
        <div className='productShowcaseArrows'>
          <img
            className='productShowcaseArrowLeft'
            src={arrow}
            alt="left arrow"
            onClick={() => setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))}
          />
          <img
            className='productShowcaseArrowRight'
            src={arrow}
            alt="right arrow"
            onClick={() => setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))}
          />
        </div>

        {/* Product Items */}
        {products.map((product, index) => (
          <div
            key={index}
            className={`productShowcaseCarouselItem ${index === activeIndex ? 'active' : 'inactive'}`}
          >
            <div className='productShowcaseLeftSide'>
              <h1>{product.title}</h1>
              <h5 className='productShowcaseLeftSideDesc'>{product.description}</h5>
              <h5 className='productShowcaseLeftSideColors'>
                COLORS: 
                <button className='green' />
                <button className='red' />
                <button className='yellow' />
              </h5>
              <button className='productShowcaseBtn'>+ Add To Cart</button>
            </div>
            
            <div className='productShowcaseRightSide'>
              <img src={product.image} alt={product.title} />
              <div className='productShowcaseRightSideBackground'>
                <h2>{product.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase;
