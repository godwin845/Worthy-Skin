import React from 'react'
import { FiShoppingCart, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='relative bottom-225'>
      <ul className='flex items-center gap-5 ml-40'>
        
        <li><FiUser size={32} /></li>
        <li><FiShoppingCart size={32} /></li>

        <li><Link to='/' className="w-[107px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">Home</Link></li>
        <li><Link className="w-[118px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">Products</Link></li>
        
        <h1 className="justify-start"><span class="text-black text-[73px] font-bold font-['Advent_Pro'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">WORTHY</span><span class="text-white text-[73px] font-normal font-['Advent_Pro'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]"> SKIN</span></h1>
        
        <li><Link className="w-[131px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">About Us</Link></li>
        <li><Link className="w-[156px] h-[50px] justify-start text-black text-3xl font-light font-['Outfit']">Contact</Link></li>
      </ul>
      <div className="w-full h-1 outline outline-1 outline-offset-[-0.50px] outline-black" />
    </div>
  )
}

export default Navbar