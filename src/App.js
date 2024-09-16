import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cookies from './pages/Cookies';
import TermsOfUse from './pages/TermsOfUse';
import Impressum from './pages/Impressum';
import PrivacyNotice from './pages/PrivacyNotice';
import { ShopContextProvider } from './context/shop-context';

function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-notice" element={<PrivacyNotice />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
