import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import HighlighterBg from '../../assets/Highlighter/HighlighterBg.svg'
import GucciHighlighter from '../../assets/Highlighter/GucciHighlighter.svg'
import RevolutionHighlighter from '../../assets/Highlighter/RevolutionHighlighter.svg'
import RareBeautyHighlighter from '../../assets/Highlighter/RareBeautyHighlighter.svg'
import MarsHighlighter from '../../assets/Highlighter/MarsHighlighter.svg'
import MacHighlighter from '../../assets/Highlighter/MacHighlighter.svg'
import ElfHighlighter from '../../assets/Highlighter/ElfHighlighter.svg'
import GGSilverShineHighlighter from '../../assets/Highlighter/GGSilverShineHighlighter.svg'
import ChanelRoseHighlighter from '../../assets/Highlighter/ChanelRoseHighlighter.svg'
import RevolutionSilverHighlighter from '../../assets/Highlighter/RevolutionSilverHighlighter.svg'

const Highlighter = () => {
    const [products] = useState([
      {
        id: 1,
        name: "GucciHighlighter",
        price: "250",
        image: GucciHighlighter,
        link: '/',
      },
      {
        id: 2,
        name: "RevolutionHighlighter",
        price: "250",
        image: RevolutionHighlighter,
      },
      {
        id: 3,
        name: "RareBeautyHighlighter",
        price: "1500",
        image: RareBeautyHighlighter,
      },
      {
        id: 4,
        name: "MarsHighlighter",
        price: "250",
        image: MarsHighlighter,
      },
      {
        id: 5,
        name: "MacHighlighter",
        price: "250",
        image: MacHighlighter,
      },
      {
        id: 6,
        name: "ElfHighlighter",
        price: "1500",
        image: ElfHighlighter,
      },
      {
        id: 7,
        name: "GGSilverShineHighlighter",
        price: "250",
        image: GGSilverShineHighlighter,
      },
      {
        id: 8,
        name: "ChanelRoseHighlighter",
        price: "250",
        image: ChanelRoseHighlighter,
      },
      {
        id: 9,
        name: "RevolutionSilverHighlighter",
        price: "1500",
        image: RevolutionSilverHighlighter,
      },
      ]);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        alert(`${product.name} added successfully!`);
        navigate('/cart')
    };

  return (
    <div>
        <img className="w-[100%] h-[800px] object-cover" src={HighlighterBg} />

        <div className='absolute bottom-40 p-30'>
            <div className="w-[492px] pl-7 justify-start text-black text-[70px] font-semibold font-['Akatab']">Glow Like Never Before!</div>
            <div className="absolute w-[518px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Elevate your beauty with a luminous touch! Our highlighters are designed to enhance your natural radiance, giving you that perfect glow from day to night. Whether you prefer a subtle shimmer or a bold, dewy finish, we have the perfect formula for you</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR HIGHLIGHTER PRODUCTS</h1>

            <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
            {products.map((product) => (
                
                <div key={product.id} className='p-5 hover:shadow-2xl hover:rounded-4xl text-center'>
    
                    <Link to={product.link}>
                      <img className="mt-15 object-cover w-full h-[350px] rounded-[35px]" src={product.image} alt={product.name} />
                    </Link>
    
                    <h1 className="mt-5 w-full h-[78.29px] justify-start text-black text-[32px] font-normal font-['Akshar']">{product.name}</h1>
    
                    <p className="h-[78.29px] justify-start text-black text-[32px] font-normal font-['Akshar']">₹{product.price}</p>
    
                    <button onClick={() => handleAddToCart(product)} className="w-[222px] h-16 relative bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                        <div className="left-[43px] top-[11px] absolute justify-start text-black text-3xl font-bold font-['Akatab']">Add to cart</div>
                    </button>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Highlighter