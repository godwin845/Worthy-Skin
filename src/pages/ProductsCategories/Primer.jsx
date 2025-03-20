import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import PrimerBg from '../../assets/Primer/PrimerBg.svg'
import FentyBeautyPinkPrimerPrimerBg from '../../assets/Primer/FentyBeautyPinkPrimer.svg'
import IconicMildPrimer from '../../assets/Primer/IconicMildPrimer.svg'
import FentyBeautyMildPrimer from '../../assets/Primer/FentyBeautyMildPrimer.svg'
import ElfRosePrimer from '../../assets/Primer/ElfRosePrimer.svg'
import MarsLightPrimer from '../../assets/Primer/MarsLightPrimer.svg'
import LorealGoldenPrimer from '../../assets/Primer/LorealGoldenPrimer.svg'
import MiikHydroPrimer from '../../assets/Primer/MiikHydroPrimer.svg'
import ElfPinkPrimer from '../../assets/Primer/ElfPinkPrimer.svg'
import FentyBeautyMildPrimer1 from '../../assets/Primer/FentyBeautyMildPrimer1.svg'

const Primer = () => {
    const [products] = useState([
      {
        id: 1,
        name: "FentyBeautyPinkPrimerPrimerBg",
        price: "250",
        image: FentyBeautyPinkPrimerPrimerBg,
      },
      {
        id: 2,
        name: "IconicMildPrimer",
        price: "250",
        image: IconicMildPrimer,
      },
      {
        id: 3,
        name: "FentyBeautyMildPrimer",
        price: "1500",
        image: FentyBeautyMildPrimer,
      },
      {
        id: 4,
        name: "ElfRosePrimer",
        price: "250",
        image: ElfRosePrimer,
      },
      {
        id: 5,
        name: "MarsLightPrimer",
        price: "250",
        image: MarsLightPrimer,
      },
      {
        id: 6,
        name: "LorealGoldenPrimer",
        price: "1500",
        image: LorealGoldenPrimer,
      },
      {
        id: 7,
        name: "MiikHydroPrimer",
        price: "250",
        image: MiikHydroPrimer,
      },
      {
        id: 8,
        name: "ElfPinkPrimer",
        price: "250",
        image: ElfPinkPrimer,
      },
      {
        id: 9,
        name: "FentyBeautyMildPrimer1",
        price: "1500",
        image: FentyBeautyMildPrimer1,
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
        <img className="w-[100%] h-[800px] object-cover" src={PrimerBg} />

        <div className='absolute bottom-10 p-30 ml-40'>
          <div className="w-[437px] justify-start text-black text-6xl font-light font-['Akatab']">The Perfect Base for Flawless Makeup!</div>
          <div className="w-[418px] mt-5 h-[175px] justify-start text-white text-[25px] font-semibold font-['Akatab']">Prep, smooth, and perfect your skin with our must-have primer! Designed to blur imperfections, minimize pores, and extend makeup wear, it creates the ideal canvas for a flawless finish—whether you prefer a matte, dewy, or radiant look.</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR PRIMER PRODUCTS</h1>

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

export default Primer