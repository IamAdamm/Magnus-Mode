import React from 'react'
import '../styles/Footer.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

const scrollToSection = (id) => {
    const yOffset = -230;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

function Footer() {
  return (
    <div className='footer'>
        <div className='footerSocials'>
            <a href='https://github.com/IamAdamm' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='Instagram' className='instagramIcon'>
                    <InstagramIcon style={{fontSize: 30}}/>
                </span>
            </a>
            <a href='https://www.linkedin.com/in/astamir/' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='Youtube' className='youtubeIcon'>
                    <YouTubeIcon style={{fontSize: 30, margin:'0 5px' }}/>
                </span>
            </a>
            <a href='https://www.linkedin.com/in/astamir/' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='Twitter' className='twitterIcon'>
                    <XIcon style={{fontSize: 30, margin:'0 5px' }}/>
                </span>
            </a>
            <a href='https://www.linkedin.com/in/astamir/' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='Facebook' className='facebookIcon'>
                    <FacebookIcon style={{fontSize: 30, margin:'0 5px' }}/>
                </span>

            </a>
            <a href='https://www.linkedin.com/in/astamir/' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='Pinterest' className='pinterestIcon'>
                    <PinterestIcon style={{fontSize: 30, margin:'0 5px' }}/>
                </span>

            </a>
        </div>
        <div className='footerLinks'>
        <a onClick ={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('categories')}>Categories</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div className='copyright'>
            <h4>Copyright © 2024. All rights are reserved</h4>
        </div>
    </div>
  )
}

export default Footer