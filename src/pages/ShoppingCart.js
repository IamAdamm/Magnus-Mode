import React, {useContext} from 'react'
import '../styles/ShoppingCart.css'
import { Products } from '../helpers/Products';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../helpers/Cart-item';

const linkToShop = () => {
  window.location.href = '/categories';
}

function ShoppingCart() {

  const {cartItems,getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='shoppingCart' id='cart'>
      <div className='cartTitle'>
      {totalAmount > 0 ? 
        <h1>Your Cart Items</h1>
      : <h1>Your Cart is Empty</h1>}
      </div>
      <div className='cartItems'>
        {Products.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? 

        <div className='checkout'>
          <h4>Subtotal: {totalAmount}$</h4>
          <div className='checkoutBtns'>
            <button onClick={linkToShop}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </div>

      : null}

    </div>
  );
}

export default ShoppingCart