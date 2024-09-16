import React, { useState } from 'react';
import '../styles/Home.css';
import Carousel from '../components/Carousel';
import ProductShowcase from '../components/ProductShowcase';
import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const [activePage, setActivePage] = useState('home'); 
    
    const handleShopClick = () => {
      setActivePage('shop');
      navigate('/shop');
    };

  return (
    <div className='home' id='home'>
        <div className='homeTitle'>
            <div className='homeTitleannouncement'>
                <h5>New spring collection 2024</h5>
            </div>
            <div className='homeh1'>
                <h1>Where style speaks, trends resonate, fashion flourishes</h1>
            </div>
            <div className='homep'>
                <p>
                    Unveiling a fashion destination where trends blend seamlessly 
                    with your individual style aspirations. Discover today!
                </p>
            </div>
            <button className='homeTitleBtn' onClick={handleShopClick}>New collection<img src={next} layout="fill" objectFit="contain"/></button>
        </div>
        <Carousel/>
        <ProductShowcase/>
    </div>    
  )
}

export default Home