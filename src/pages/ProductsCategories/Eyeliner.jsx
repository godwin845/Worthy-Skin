import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import EyelinerBg from '../../assets/Eyeliner/EyelinerBg.svg'
import PrettyEyesEyeliner from '../../assets/Eyeliner/PrettyEyesEyeliner.svg'
import MarsEyeliner from '../../assets/Eyeliner/MarsEyeliner.svg'
import MaybellineColossal from '../../assets/Eyeliner/MaybellineColossal.svg'
import GelEyelinerRedEyelinerBg from '../../assets/Eyeliner/GelEyelinerRed.svg'
import GelEyelinerSilverEyelinerBg from '../../assets/Eyeliner/GelEyelinerSilver.svg'
import KikoBlueEyeliner from '../../assets/Eyeliner/KikoBlueEyeliner.svg'
import PudaierYellowEyeliner from '../../assets/Eyeliner/PudaierYellowEyeliner.svg'
import PrettyEyeBlackGelEyeliner from '../../assets/Eyeliner/PrettyEyeBlackGelEyeliner.svg'
import ExtendedGlitterBlackEyeliner from '../../assets/Eyeliner/ExtendedGlitterBlackEyeliner.svg'

const Eyeliner = () => {
    const [products] = useState([
      {
        id: 1,
        name: "PrettyEyesEyeliner",
        price: "250",
        image: PrettyEyesEyeliner,
      },
      {
        id: 2,
        name: "MarsEyeliner",
        price: "250",
        image: MarsEyeliner,
      },
      {
        id: 3,
        name: "MaybellineColossal",
        price: "1500",
        image: MaybellineColossal,
      },
      {
        id: 4,
        name: "GelEyelinerRedEyelinerBg",
        price: "250",
        image: GelEyelinerRedEyelinerBg,
      },
      {
        id: 5,
        name: "GelEyelinerSilverEyelinerBg",
        price: "250",
        image: GelEyelinerSilverEyelinerBg,
      },
      {
        id: 6,
        name: "KikoBlueEyeliner",
        price: "1500",
        image: KikoBlueEyeliner,
      },
      {
        id: 7,
        name: "PudaierYellowEyeliner",
        price: "250",
        image: PudaierYellowEyeliner,
      },
      {
        id: 8,
        name: "PrettyEyeBlackGelEyeliner",
        price: "250",
        image: PrettyEyeBlackGelEyeliner,
      },
      {
        id: 9,
        name: "ExtendedGlitterBlackEyeliner",
        price: "1500",
        image: ExtendedGlitterBlackEyeliner,
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
        <img className="w-[100%] h-[800px] object-cover" src={EyelinerBg} />

        <div className='absolute bottom-25 p-30'>
          <div className="w-[591px] justify-start text-black text-[70px] font-light font-['Akatab']">Define, Wing, Slay!</div>
          <div className="w-[518px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Elevate your eye game with our precision-perfect eyeliner! Whether you’re going for a bold cat-eye, a sleek wing, or a soft, smudged look, our eyeliner glides on effortlessly for intense, all-day wear</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR HIGHLIGHTER PRODUCTS</h1>

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

export default Eyeliner