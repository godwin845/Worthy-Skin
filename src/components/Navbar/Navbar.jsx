import React, { useState } from 'react';
import { FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector(state => state.cart.cartItems);

  const getTotalItemsAdded = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const totalItemsAdded = getTotalItemsAdded();

  return (
    <div className="w-full absolute top-0 left-0 z-50">

        <div className='flex mt-5 lg:mt-0'>
          <div className="lg:hidden text-2xl font-bold text-black">
          <h1>
            <span className="text-black lg:text-[73px] font-bold font-['Advent_Pro'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">WORTHY</span>
            <span className="text-white lg:text-[73px] font-normal font-['Advent_Pro'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">SKIN</span>
          </h1>
        </div>

       <div className="lg:hidden ml-40" onClick={() => setMenuOpen(true)}>
            <FiMenu size={32} />
        </div>
        
        </div>

      <div className="flex justify-between items-center ml-45">

        <div className="hidden lg:flex items-center gap-5">
          <Link to="/login">
            <FiUser size={32} />
          </Link>

          <Link to="/cart" className="relative">
            <FiShoppingCart size={32} />
            {totalItemsAdded > 0 && (
              <span className="absolute bottom-6 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {totalItemsAdded}
              </span>
            )}
          </Link>

          <Link to="/" className="w-[107px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">
            Home
          </Link>
          <Link to="/products" className="w-[118px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">
            Products
          </Link>

          <div className="text-2xl font-bold text-black">
          <h1>
            <span className="text-black lg:text-[73px] font-bold font-['Advent_Pro'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">WORTHY</span>
            <span className="text-white lg:text-[73px] font-normal font-['Advent_Pro'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">SKIN</span>
          </h1>
        </div>
          <Link to="/about" className="w-[131px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">
            About Us
          </Link>
          <Link to="/contact" className="w-[156px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`absolute top-0 w-full lg:hidden ${menuOpen ? 'block animate__animated animate__fadeInDownBig' : 'hidden'} bg-[#e99662] text-black p-4`}
      >
        <ul className="space-y-4 text-center">
        <FiX className='ml-80' onClick={() => setMenuOpen(false)} size={32} />
          <li>
            <Link to="/login" className="text-xl" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-xl" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-xl" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-[90%] ml-20 lg:outline lg:outline-offset-[-0.50px] outline-black" />

    </div>
  );
};

export default Navbar;