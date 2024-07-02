import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import './App.css';

const App = () => {
  const [profile, setProfile] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<SignupPage setProfile={setProfile} />} />
          <Route path="/home" element={<HomePage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/profile" element={<ProfilePage profile={profile} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
