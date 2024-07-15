import React from 'react'
import '../styles/ShoppingCart.css'

function ShoppingCart({ isVisible, toggleShoppingCartTab }) {
  return (
    <div className={`shoppingCart ${isVisible ? 'visible' : ''}`} id='shoppingCart'>
      <div className='shoppingCartTab'>
        <div className='shoppingCartTabTitle'>
        <button className='shoppingCartTabTitleCloseBtn' onClick={toggleShoppingCartTab}>x</button>
          <h1>Shopping Cart</h1>
          <div className='cartList'>
            <div className='productCard'>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart