
import React from 'react';
import Cart from '../components/Cart'; 

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page">
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;


