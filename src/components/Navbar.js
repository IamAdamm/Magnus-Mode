import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const scrollToSection = (id) => {
  const yOffset = -230;
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

let shoppingCartList= []

function Navbar({ toggleShoppingCartTab, cartCount}) {
  const location = useLocation();

  const handleLinkClick = (id, path) => {
    if (location.pathname === path) {
      scrollToSection(id);
    } else {
      window.location.href = path;
    }
  }

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img className='logo' alt='Logo' src={Logo} onClick={() => handleLinkClick('home', '/')}/>
      </div>
      <div className='rightSide'>
        <a onClick={() => handleLinkClick('home', '/')}>Home</a>
        <Link to="/categories" className='link'>Categories</Link>
        <a onClick={() => handleLinkClick('about', '/')}>About</a>
        <a onClick={() => handleLinkClick('contact', '/contact')}>Contact</a>
        <ShoppingCartIcon className='cartIcon' onClick={toggleShoppingCartTab} />
        <span>{shoppingCartList.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
