import React from 'react';
import '../styles/About.css';
import Test from '../assets/test.png';
import Test1 from '../assets/test2.png';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

function About() {
  return (
    <div className='about' id='about'>
        <h1>About The Brand</h1>
        <div className='aboutContainer'>
            <div className='aboutImage'>
                <Slide>
                    <img src={Test}/>
                    <img src={Test1}/>
                </Slide>
            </div>
            <div className='aboutText'>
                <h3>A dedicated Brand Brand Brand Brand Brand Brand Brand Brand</h3>
                <p>
                    As a Junior Front-End Developer, 
                    I bring an impressive skill set 
                    in HTML, CSS, JavaScript, React, 
                    and Shopify. <br/><br/> I specialize in 
                    designing, building, and maintaining 
                    responsive websites that provide 
                    seamless user experiences. My 
                    proficiency includes crafting 
                    dynamic, engaging interfaces 
                    through clean, optimized code 
                    and the use of the latest development 
                    tools and techniques. <br/><br/> I excel in 
                    collaborative environments, working 
                    with cross-functional teams to create 
                    outstanding web applications.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
