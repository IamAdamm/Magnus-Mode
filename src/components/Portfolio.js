import React from 'react';
import '../styles/Portfolio.css';
import test from '../assets/test.png';
import useIntersectionObserver from '../helpers/IntersectionObserver';

function Portfolio() {

    useIntersectionObserver('.portfolioTitle', 'portfolioPhaseInFromRight');
    useIntersectionObserver('.projectBox', 'portfolioPhaseInFromRight');
    useIntersectionObserver('.projectBoxReverse', 'portfolioPhaseInFromLeft');

  return (
    <div className='portfolio' id='portfolio'>
        <div className='portfolioTitle'>
            <h5>OUR STORY</h5>
            <h2>Each Product made with passion</h2>
        </div>
        <div className='projectBox'>
            <img src={test}/>
            <div className='projectText'>
                <h3>Hand Made</h3>
                <p>
                    A Weight Tracker App that allows 
                    users to set their goal weight and 
                    monitor their progress accurately. 
                    It accounts for daily weight 
                    fluctuations and provides valuable 
                    insights, including daily 
                    maintenance calorie recommendations.                </p>
            </div>
        </div>
        <div className='projectBoxReverse'>
            <img className='WeightTrackerImage' src={test}/>
            <div className='projectText'>
                <h3>Quality Inspection</h3>
                <p>
                    A Weight Tracker App that allows 
                    users to set their goal weight and 
                    monitor their progress accurately. 
                    It accounts for daily weight 
                    fluctuations and provides valuable 
                    insights, including daily 
                    maintenance calorie recommendations.
                </p>
            </div>
        </div>
        <div className='projectBox'>
            <img src={test}/>
            <div className='projectText'>
                <h3>Made with care</h3>
                <p>
                    As a Junior Front-End Developer, 
                    I possess an impressive arsenal of skills in 
                    HTML, CSS, JavaScript, React, Tailwind, 
                    and SCSS. I excel in designing and 
                    maintaining responsive websites that 
                    offer a smooth user experience.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Portfolio