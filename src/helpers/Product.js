import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';
import image from '../assets/Tshirt.png'

export const Product = (props) => {
    const {id, type, image, name, description, price} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return (
        <div className="productCard">
            <div className='productCardProduct'>
                <img src={image} id='shirt' alt={name} />
                <h2 className="productCardName">{name}</h2>
                <h3 className="productCardPrice">{price}$</h3>
            </div>
            <div className='productCardBtnContainer'>            
                <button className="productCardBtn" onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
            </div>
        </div>
    );
};