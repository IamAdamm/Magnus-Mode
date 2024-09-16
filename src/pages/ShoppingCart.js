import React, {useContext} from 'react'
import '../styles/ShoppingCart.css'
import { Products } from '../helpers/Products';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../helpers/Cart-item';
import { loadStripe } from '@stripe/stripe-js';

const linkToShop = () => {
  window.location.href = '/shop';
}

function ShoppingCart() {

  const {cartItems,getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const makePayment = () => {
    console.log('clicked')

    fetch("http://localhost:3001/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
    .then(res => {
      if(res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      console.log('redirection works?');
      window.location = url;
    })
    .catch(e => console.error(e.error));
    console.log('clicked')

  }
  

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
            <button onClick={makePayment}>Checkout</button>
          </div>
        </div>

      : null}

    </div>
  );
}

export default ShoppingCart