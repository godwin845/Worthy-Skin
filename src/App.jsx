import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import CartPage from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import Foundation from './pages/ProductsCategories/Foundation';
import CompactPower from './pages/ProductsCategories/CompactPower';
import Lipstick from './pages/ProductsCategories/Lipstick';
import Mascara from './pages/ProductsCategories/Mascara';
import Concealer from './pages/ProductsCategories/Concealer';
import Eyeliner from './pages/ProductsCategories/Eyeliner';
// import Primer from './pages/ProductsCategories/Primer';
// import Blush from './pages/ProductsCategories/Blush';
// import Highlighter from './pages/ProductsCategories/Highlighter';
import User from './pages/Auth/User';
import FoundationDescription from './pages/ProductsCategories/Foundation/FoundationDescription';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/foundation" element={<Foundation />} />
        <Route path="/foundationDescription" element={<FoundationDescription />} />

        <Route path="/compactpower" element={<CompactPower />} />
        <Route path="/lipstick" element={<Lipstick />} />

        <Route path="/mascara" element={<Mascara />} />
        <Route path="/concealer" element={<Concealer />} />
        <Route path="/eyeliner" element={<Eyeliner />} />

        {/* <Route path="/primer" element={<Primer />} />
        <Route path="/blush" element={<Blush />} />
        <Route path="/highlighter" element={<Highlighter />} /> */}

        <Route path="/cart" element={<CartPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;