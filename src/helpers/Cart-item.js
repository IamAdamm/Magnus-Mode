import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';

export const CartItem = (props) => {
    const {id, type, image, name, description, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

  return (
    <div className='cartItem'>
        <img src={image}/>  
        <div className='description'>
            <h3>{name}</h3>
            <p>{price}$</p>
            <div className='countHandler'>
              <button onClick={() => removeFromCart(id)}> - </button>
              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
              <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>  
    </div>
  )
}
