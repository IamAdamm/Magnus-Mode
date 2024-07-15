import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Portfolio from './components/Portfolio';
import Bestsellers from './components/Bestsellers';
import Categories from './pages/Categories';

function App() {
  const [isShoppingCartVisible, setShoppingCartVisible] = useState(false);

  const toggleShoppingCartTab = () => {
    console.log('Toggle shopping cart tab');  // Add this line
    setShoppingCartVisible(!isShoppingCartVisible);
    console.log(isShoppingCartVisible);  // Add this line
  };

  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount(prevCartCount => prevCartCount + 1);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar toggleShoppingCartTab={toggleShoppingCartTab} cartCount={cartCount} />
        <ShoppingCart isVisible={isShoppingCartVisible} toggleShoppingCartTab={toggleShoppingCartTab} />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Bestsellers />
              <Portfolio />
              <About />
            </>
          } />
          <Route path="/categories" element={<Categories addToCart={addToCart}/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
