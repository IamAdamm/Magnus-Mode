import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ShoppingCart from './pages/ShoppingCart';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Portfolio from './components/Portfolio';
import Bestsellers from './components/Bestsellers';
import Categories from './pages/Categories';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Bestsellers />
              <Portfolio />
            </>
          } />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
