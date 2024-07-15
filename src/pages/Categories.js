import React from 'react';
import '../styles/Categories.css';
import dragon from '../assets/dragon_1.jpg';

function Categories({ addToCart }) {

  return (
    <div className='categories'>
        <div className='productCardRow'>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
        <div className='productCardRow'>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
        <div className='productCardRow'>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Categories