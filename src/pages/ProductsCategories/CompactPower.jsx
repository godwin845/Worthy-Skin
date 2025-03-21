import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import CompactPowerBg from '../../assets/CompactPower/CompactPowerBg.svg'
import GGCompactPowder from '../../assets/CompactPower/GGCompactPowder.svg'
import CamelCompactpowder from '../../assets/CompactPower/CamelCompactpowder.svg'
import ChanelCompactPowder from '../../assets/CompactPower/ChanelCompactPowder.svg'
import ChanelGlossyCompact from '../../assets/CompactPower/ChanelGlossyCompact.svg'
import ChanelCompactPowder2 from '../../assets/CompactPower/ChanelCompactPowder2.svg'
import PatrickTaCompactPowder from '../../assets/CompactPower/PatrickTaCompactPowder.svg'
import ChanelCompactPowder3 from '../../assets/CompactPower/ChanelCompactPowder3.svg'
import LamerCompactPowder from '../../assets/CompactPower/LamerCompactPowder.svg'
import ChanelCompactPowder4 from '../../assets/CompactPower/ChanelCompactPowder4.svg'

const CompactPower = () => {
    const [products] = useState([
      {
        id: 1,
        name: "GGCompactPowder",
        price: "250",
        image: GGCompactPowder,
      },
      {
        id: 2,
        name: "CamelCompactpowder",
        price: "250",
        image: CamelCompactpowder,
      },
      {
        id: 3,
        name: "ChanelCompactPowder",
        price: "1500",
        image: ChanelCompactPowder,
      },
      {
        id: 4,
        name: "ChanelGlossyCompact",
        price: "250",
        image: ChanelGlossyCompact,
      },
      {
        id: 5,
        name: "ChanelCompactPowder2",
        price: "250",
        image: ChanelCompactPowder2,
      },
      {
        id: 6,
        name: "PatrickTaCompactPowder",
        price: "1500",
        image: PatrickTaCompactPowder,
      },
      {
        id: 7,
        name: "ChanelCompactPowder3",
        price: "250",
        image: ChanelCompactPowder3,
      },
      {
        id: 8,
        name: "LamerCompactPowder",
        price: "250",
        image: LamerCompactPowder,
      },
      {
        id: 9,
        name: "ChanelCompactPowder4",
        price: "1500",
        image: ChanelCompactPowder4,
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
        <img className="w-[100%] h-[800px] object-cover" src={CompactPowerBg} />

        <div className='absolute bottom-10 ml-215'>
          <div className="ml-20 w-[513px] justify-start text-black text-[70px] font-light font-['Akatab']">Flawless Matte Perfection!</div>
          <div className="w-[630px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Set, smooth, and stay shine-free all day! Our compact powder is designed to give you a natural, airbrushed finish while controlling oil and keeping your makeup fresh. Whether you need a light touch-up or full coverage, it’s your go-to for a flawless look</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR COMPACT POWDER PRODUCTS</h1>

            <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
            {products.map((product) => (
                
                <div key={product.id} className='p-5 hover:shadow-2xl hover:rounded-4xl text-center'>
    
                    <img className="mt-15 object-cover w-full h-[350px] rounded-[35px]" src={product.image} alt={product.name} />
    
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

export default CompactPower