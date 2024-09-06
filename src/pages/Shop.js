import React from 'react';
import '../styles/Shop.css';
import { Products } from '../helpers/Products';
import { Product } from '../helpers/Product'; 

function Shop() {
    
  return (
    <div className='shop'>
        <div className="productCardRow">
            {Products.map((product) => (
                <Product key={product.id} data={product} />
            ))}
        </div>
    </div>
  )
}

export default Shop