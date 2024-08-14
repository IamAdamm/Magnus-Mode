import React from 'react'

export const CartItem = (props) => {
    const {id, type, image, name, description, price} = props.data;

  return (
    <div className='cartItem'>
        <img src={image}/>  
        <div className='description'>
            <p>
             {description}
             <p>{name}</p>
            </p>
            <p>{price}$</p>

        </div>  
    </div>
  )
}
