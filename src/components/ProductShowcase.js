import React from 'react';
import '../styles/ProductShowcase.css';
import Test from '../assets/Test.png';

function ProductShowcase() {
  return (
    <div className='productShowcase'>
        <div className='productShowcaseLeftSide'>
            <h1>Men's Casual Jacket</h1>
            <h5 className='productShowcaseLeftSideDesc'>100% Cotton, Model is 6'1 and Wears Size M</h5>
            <h5 className='productShowcaseLeftSideColors'>COLORS: <button className='green'/><button className='red'/><button className='yellow'/></h5>
            <button className='productShowcaseBtn'>+ Add To Cart</button>
        </div>
        <div className='productShowcaseRightSide'>
            <img src={Test}/>
            <div className='productShowcaseRightSideBackground'>
                <h2>25,00$</h2>
            </div>
        </div>
    </div>
  )
}

export default ProductShowcase