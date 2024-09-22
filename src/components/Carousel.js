import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Carousel.css';
import s from '../assets/s.jpeg';
import a from '../assets/a.webp';
import b from '../assets/b.jpeg';


function Carousel() {

    const navigate = useNavigate();

    const goToShop = () => {
        navigate('/shop');
    };
  return (
    <div className='carousel'>
      <div className='imageSlider'>
          <div className='slider' style={{ '--quantity': 10 }}>
              <div className='item' style={{ '--position': 1 }} onClick= {goToShop}>
                <img src={s} alt=" 1" />
                <div className='carouselPriceTag'>
                  Price
                </div>
              </div>
              <div className='item' style={{ '--position': 2 }} onClick= {goToShop}><img src={b} alt=" 4" /></div>
              <div className='item' style={{ '--position': 3 }} onClick= {goToShop}>
                <img src={a} alt=" 2" />
                <div className='carouselPriceTag'>
                  <h3>Price</h3>
                </div>
              </div>
              <div className='item' style={{ '--position': 4 }} onClick= {goToShop}><img src={b} alt=" 8" /></div>
              <div className='item' style={{ '--position': 5 }} onClick= {goToShop}><img src={s} alt=" 3" /></div>
          </div>
      </div>
    </div>
  );
}

export default Carousel;
