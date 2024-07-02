import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h1>eCommerce App</h1>
      <div>
        <Link to="/" className="cart-link">Sign Up</Link>
        <Link to="/home" className="cart-link">Products</Link>
        <Link to="/cart" className="cart-link">Cart ({cartCount})</Link>
        <Link to="/profile" className="cart-link">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
