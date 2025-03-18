// src/components/Navbar.js
import React from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const Navbar = () => {
  // Get the cart items from Redux state
  const cartItems = useSelector(state => state.cart.cartItems);

  // Calculate the total quantity of items in the cart
  const getTotalItemsAdded = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className='absolute bottom-167 w-full'>
      <ul className='flex items-center gap-5 ml-40'>
        
        <li><Link to='/user'><FiUser size={32} /></Link></li>
        
        {/* Cart link with quantity */}
        <li>
          <Link to='/cart' className="relative">
            <FiShoppingCart size={32} />
            
            {/* Display the total quantity of items in the cart */}
            {getTotalItemsAdded() > 0 && (
              <span className="absolute bottom-6 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {getTotalItemsAdded()}
              </span>
            )}
          </Link>
        </li>

        <li><Link to='/' className="w-[107px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">Home</Link></li>
        <li><Link to='/products' className="w-[118px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">Products</Link></li>
        
        <h1 className="justify-start">
          <span className="text-black text-[73px] font-bold font-['Advent_Pro'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
            WORTHY
          </span>
          <span className="text-white text-[73px] font-normal font-['Advent_Pro'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
            SKIN
          </span>
        </h1>
        
        <li><Link to='/about' className="w-[131px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">About Us</Link></li>
        <li><Link to='/contact' className="w-[156px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">Contact</Link></li>
      </ul>
      <div className="w-full h-1 outline outline-offset-[-0.50px] outline-black" />
    </div>
  );
};

export default Navbar;