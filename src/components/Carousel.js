import React, { useState } from 'react';
import '../styles/Carousel.css';
import s from '../assets/s.jpeg';



function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the second image in the center

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 8); // Loop around 3 items
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 8); // Loop around 3 items
  };

  return (
    <div className='carousel'>
      <button className='arrowLeft' onClick={handlePrev}>{"<"}</button>
      <div className='imageSlider'>
        <div className='slider' style={{ '--quantity': 8, '--current-index': currentIndex }}>
          <div className='item' style={{ '--position': 1 }}>
            <img src={s} layout="fill" objectFit="contain" alt="Image 1" />
          </div>
          <div className='item' style={{ '--position': 2 }}>
            <img src={s} alt="Image 2" layout="fill" objectFit="contain"/>
          </div>
          <div className='item' style={{ '--position': 3 }}>
            <img src={s} alt="Image 3" layout="fill" objectFit="contain"/>
          </div>
          <div className='item' style={{ '--position': 3 }}>
            <img src={s} alt="img 3" layout="fill" objectFit="contain"/>
          </div>
          <div className='item' style={{ '--position': 4 }}>
            <img src={s} alt="img 3" layout="fill" objectFit="contain"/>
          </div>
          <div className='item' style={{ '--position': 5 }}>
            <img src={s} alt="img 3" layout="fill" objectFit="contain"/>
          </div>
          <div className='item' style={{ '--position': 6 }}>
            <img src={s} alt="img 3" layout="fill" objectFit="contain"/>
          </div>
          <div className='item' style={{ '--position': 7 }}>
            <img src={s} alt="img 3" layout="fill" objectFit="contain"/>
          </div>
          <div className='item' style={{ '--position': 8 }}>
            <img src={s} alt="img 3" layout="fill" objectFit="contain"/>
          </div>
        </div>
      </div>
      <button className='arrowRight' onClick={handleNext}>{">"}</button>
    </div>
  );
}

export default Carousel;
