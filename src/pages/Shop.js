import React from 'react';
import '../styles/Shop.css';
import { Products } from '../helpers/Products';
import { Product } from '../helpers/Product'; 
import dragon from '../assets/dragon_1.jpg';
import tshirt from '../assets/Tshirt.png';


function Shop() {
    
  return (
    <div className='shop'>
        <div className='productCardRow'>
            <div className='productCard'>
                <img id='shirt' src={tshirt}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn'>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn'>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img id='shirt' src={tshirt}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn'>Add to Cart</button>
            </div>
            <div className='productCard'>
                <img src={dragon}/>
                <h2 className='productCardName'>NAME PRODUCT</h2>
                <h3 className='productCardPrice'>PRICE</h3>
                <button className='productCardBtn'>Add to Cart</button>
            </div>
        </div>
        <div className='productCardRow'>
            <div className="productCardRow">
                {Products.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Shop