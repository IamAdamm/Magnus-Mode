import React from 'react'
import '../styles/Bestsellers.css'
import dragon from '../assets/dragon_1.jpg'
import dragon1 from '../assets/dragon_2.jpg'
import useIntersectionObserver from '../helpers/IntersectionObserver'

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
              <div className='item' style={{ '--position': 1 }}><img src={dragon} alt="dragon 1" /></div>
              <div className='item' style={{ '--position': 2 }}><img src={dragon1} alt="dragon 2" /></div>
              <div className='item' style={{ '--position': 3 }}><img src={dragon1} alt="dragon 3" /></div>
              <div className='item' style={{ '--position': 4 }}><img src={dragon1} alt="dragon 4" /></div>
              <div className='item' style={{ '--position': 5 }}><img src={dragon1} alt="dragon 5" /></div>
              <div className='item' style={{ '--position': 6 }}><img src={dragon1} alt="dragon 6" /></div>
              <div className='item' style={{ '--position': 7 }}><img src={dragon1} alt="dragon 7" /></div>
              <div className='item' style={{ '--position': 8 }}><img src={dragon1} alt="dragon 8" /></div>
              <div className='item' style={{ '--position': 9 }}><img src={dragon1} alt="dragon 9" /></div>
              <div className='item' style={{ '--position': 10 }}><img src={dragon1} alt="dragon 10" /></div>
          </div>
      </div>
    </div>
  )
}

export default Bestsellers