import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='home' id='home'>
        <div className='homeLeftSide'>
            <h3>Designs to live by</h3>
            <h1>STRIFE FOR PEACE</h1>
            <p>Neon letters and shop and pictures and white Neon letters and shop and pictures and white Neon letters and shop and pictures and  antters a.</p>
            <div className='homeBtns'>
            <Link to='/categories'>
                <button>Products</button>
            </Link>
                <button>Contact Us</button>
            </div>
        </div>
        <div className='homeRightSide'>
            <h1>SfP</h1>
        </div>
    </div>
  )
}

export default Home