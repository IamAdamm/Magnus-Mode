import React from 'react'
import '../styles/Footer.css'
import { Link, useLocation } from 'react-router-dom';
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

    const location = useLocation();

    const handleLinkClick = (id, path) => {
      if (location.pathname === path) {
        scrollToSection(id);
      } else {
        window.location.href = path;
      }
    }

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
            <a onClick={() => handleLinkClick('home', '/')}>Home</a>
            <Link to="/categories" className='link'>Categories</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/contact" className='link'>Contact</Link>
            </div>
        <div className='footerLegality'>
            <Link to="/terms-of-use" className='legalLink'>Terms of use</Link>
            <Link to="/privacy-notice" className='legalLink'>Privacy notice</Link>
            <Link to="/cookies" className='legalLink'>Cookies</Link>
            <Link to="/impressum" className='legalLink'>Impressum</Link>
        </div>
        <div className='copyright'>
            <h4>Copyright © 2024. All rights are reserved</h4>
        </div>
    </div>
  )
}

export default Footer