import React, {useContext, useState} from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logoo.png';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ShopContext } from '../context/shop-context';

const scrollToSection = (id) => {
  const yOffset = -230;
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function Navbar() {

  const {getTotalNumberOfItems, cartItems} = useContext(ShopContext)
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const navigate = useNavigate();

  const handleLinkClick = (id, path) => {
    if (path === '/cart') {
      setActiveLink('');
      setActiveLink(path);
      if (location.pathname === path) {
        scrollToSection(id);
      } else {
        window.location.href = path;
      }
    } else {
      setActiveLink(path);
      if (location.pathname === path) {
        scrollToSection(id);
      } else {
        navigate(path)
      }
    }
  };

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img
          className={`logo ${activeLink === '/' ? 'active' : ''}`}
          alt='Logo'
          src={Logo}
          onClick={() => handleLinkClick('home', '/')}
        />      
      </div>
      <div className='middle'>
        <a
          className={`link ${activeLink === '/' ? 'active' : ''}`}
          onClick={() => handleLinkClick('home', '/')}
        >
          Home
        </a>
        <Link
          to="/shop"
          className={`link ${activeLink === '/shop' ? 'active' : ''}`}
          onClick={() => handleLinkClick('shop', '/shop')}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className={`link ${activeLink === '/about' ? 'active' : ''}`}
          onClick={() => handleLinkClick('about', '/about')}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`link ${activeLink === '/contact' ? 'active' : ''}`}
          onClick={() => handleLinkClick('contact', '/contact')}
        >
          Contact
        </Link>
      </div>
      <div className='rightSide'>
        <span
          className={`cartIcon ${activeLink === '/cart' ? 'active' : ''}`}
          onClick={() => handleLinkClick('cart', '/cart')}
        >
          <ShoppingCartIcon className='cartIcon' />
          {getTotalNumberOfItems() > 0 ?
          <span className='shoppingCartNumber'>{getTotalNumberOfItems()}</span>
          : null
          }
        </span>
      </div>
    </div>
  );
}

export default Navbar;
