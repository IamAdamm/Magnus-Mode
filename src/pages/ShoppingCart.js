import React, {useContext} from 'react'
import '../styles/ShoppingCart.css'
import { Products } from '../helpers/Products';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../helpers/Cart-item';

function ShoppingCart() {

  const {cartItems} = useContext(ShopContext);

  return (
    <div className='shoppingCart' id='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {Products.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />;
          }
        })}

      </div>
    </div>
  );
}

export default ShoppingCart