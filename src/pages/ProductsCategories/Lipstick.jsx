import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import LipstickBg from '../../assets/Lipstick/LipstickBg.svg'
import FentyBeautylipstick from '../../assets/Lipstick/FentyBeautylipstick.svg'
import Smachboxlipstick from '../../assets/Lipstick/Smachboxlipstick.svg'
import Naslipstick from '../../assets/Lipstick/Naslipstick .svg'
import GGNudeshadelipstick from '../../assets/Lipstick/GGNudeshadelipstick.svg'
import ChanelNudeshadeLipstick from '../../assets/Lipstick/ChanelNudeshadeLipstick.svg'
import PatrickTaNudeShade from '../../assets/Lipstick/PatrickTaNudeShade.svg'
import GCDarkRedshadelipstick from '../../assets/Lipstick/GCDarkRedshadelipstick.svg'
import Laminalightredshade from '../../assets/Lipstick/Laminalightredshade.svg'
import ChanelRoyaredLipstick from '../../assets/Lipstick/ChanelRoyaredLipstick.svg'

const Lipstick = () => {
    const [products] = useState([
      {
        id: 1,
        name: "FentyBeautylipstick",
        price: "250",
        image: FentyBeautylipstick,
      },
      {
        id: 2,
        name: "Smachboxlipstick",
        price: "250",
        image: Smachboxlipstick,
      },
      {
        id: 3,
        name: "Naslipstick",
        price: "1500",
        image: Naslipstick,
      },
      {
        id: 4,
        name: "GGNudeshadelipstick",
        price: "250",
        image: GGNudeshadelipstick,
      },
      {
        id: 5,
        name: "ChanelNudeshadeLipstick",
        price: "250",
        image: ChanelNudeshadeLipstick,
      },
      {
        id: 6,
        name: "PatrickTaNudeShade",
        price: "1500",
        image: PatrickTaNudeShade,
      },
      {
        id: 7,
        name: "GCDarkRedshadelipstick",
        price: "250",
        image: GCDarkRedshadelipstick,
      },
      {
        id: 8,
        name: "Laminalightredshade",
        price: "250",
        image: Laminalightredshade,
      },
      {
        id: 9,
        name: "ChanelRoyaredLipstick",
        price: "1500",
        image: ChanelRoyaredLipstick,
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
        <img className="w-[100%] h-[800px] object-cover" src={LipstickBg} />

        <div className='absolute bottom-20 ml-30'>
          <div className="w-[549px] ml-20 justify-start text-black text-[70px] font-light font-['Akatab']">Unleash Your Perfect Pout!</div>
          <div className="w-[638px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Bold, beautiful, and made for you! Our lipsticks are designed to deliver rich color, intense hydration, and long-lasting wear in just one swipe. Whether you love a classic matte, creamy satin, or high-shine gloss, we have the perfect shade to match your mood.</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR LIPSTICK PRODUCTS</h1>

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

export default Lipstick