import React from 'react';
import '../styles/Bestsellers.css';
import flowerWomanSmall from '../assets/FlowerWomanSmall.png';
import goldRoseSmall from '../assets/GoldRoseSmall.png';
import SkullSmall from '../assets/SkullSmall.png';
import galaxySmall from '../assets/GalaxySmall.png';
import angelSmall from '../assets/AngelSmall.png';
import leafWomanSmall from '../assets/LeafWomanSmall.png';
import manikoSmall from '../assets/ManikoSmall.png';
import manikoGirlSmall from '../assets/ManikoGirlSmall.png'
import swordWomanSmall from '../assets/SwordWomanSmall.png'
import robotGirlSmall from '../assets/RobotGirlSmall.png'
import useIntersectionObserver from '../helpers/IntersectionObserver';

function loadToCategories() {
  window.location.href = '/categories';
}

function Bestsellers() {

  useIntersectionObserver('.bestsellersTitle', 'bestsellersTitlePhaseInFromRight');
  useIntersectionObserver('.bestsellersTitleh5', 'bestsellersTitlePhaseInFromRighth5');

  return (
    <div className='bestsellers'>
      <div className='bestsellersTitleContainer'>
        <div className='bestsellersTitle'>
          <h5 className='bestsellersTitleh5'>OUR BESTSELLERS</h5>
          <h1>Designed with Passion</h1>
        </div>
      </div>
      <div className='imageSlider'>
          <div className='slider' style={{ '--quantity': 10 }}  onClick={() => loadToCategories()}>
              <div className='item' style={{ '--position': 1 }}><img src={flowerWomanSmall} id='flowerWomanSmall' alt="dragon 1" /></div>
              <div className='item' style={{ '--position': 2 }}><img src={galaxySmall} id='galaxySmall' alt="dragon 4" /></div>
              <div className='item' style={{ '--position': 3 }}><img src={goldRoseSmall} id='goldRoseSmall' alt="dragon 2" /></div>
              <div className='item' style={{ '--position': 4 }}><img src={robotGirlSmall} id='robotGirlSmall' alt="dragon 8" /></div>
              <div className='item' style={{ '--position': 5 }}><img src={SkullSmall} id='SkullSmall' alt="dragon 3" /></div>
              <div className='item' style={{ '--position': 6 }}><img src={leafWomanSmall} id='leafWomanSmall' alt="dragon 6" /></div>
              <div className='item' style={{ '--position': 7 }}><img src={manikoSmall} id='manikoSmall' alt="dragon 7" /></div>
              <div className='item' style={{ '--position': 8 }}><img src={manikoGirlSmall} id='manikoGirlSmall' alt="dragon 8" /></div>
              <div className='item' style={{ '--position': 9 }}><img src={swordWomanSmall} id='swordWomanSmall' alt="dragon 7" /></div>
              <div className='item' style={{ '--position': 10 }}><img src={angelSmall} id='angelSmall' alt="dragon 5" /></div>
          </div>
      </div>
    </div>
  )
}

export default Bestsellers