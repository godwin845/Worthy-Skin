import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import BlushBg from '../../assets/Blush/BlushBg.svg'
import SheGlamPinkBlush from '../../assets/Blush/SheGlamPinkBlush.svg'
import BobbiNudeBlush from '../../assets/Blush/BobbiNudeBlush.svg'
import RareBeautyPinkBlush from '../../assets/Blush/RareBeautyPinkBlush.svg'
import SheGlamNudeBlush from '../../assets/Blush/SheGlamNudeBlush.svg'
import HudaBeautyPinkBlush from '../../assets/Blush/HudaBeautyPinkBlush.svg'
import ChantecaillePinkBlush from '../../assets/Blush/ChantecaillePinkBlush.svg'
import GGBabyPinkBlush from '../../assets/Blush/GGBabyPinkBlush.svg'
import ShimmerBlush from '../../assets/Blush/ShimmerBlush.svg'
import RhodeBlush from '../../assets/Blush/RhodeBlush.svg'

const Blush = () => {
    const [products] = useState([
        {
          id: 1,
          name: "SheGlamPinkBlush",
          price: "250",
          image: SheGlamPinkBlush,
        },
        {
          id: 2,
          name: "BobbiNudeBlush",
          price: "250",
          image: BobbiNudeBlush,
        },
        {
          id: 3,
          name: "RareBeautyPinkBlush",
          price: "1500",
          image: RareBeautyPinkBlush,
        },
        {
          id: 4,
          name: "SheGlamNudeBlush",
          price: "250",
          image: SheGlamNudeBlush,
        },
        {
          id: 5,
          name: "HudaBeautyPinkBlush",
          price: "250",
          image: HudaBeautyPinkBlush,
        },
        {
          id: 6,
          name: "ChantecaillePinkBlush",
          price: "1500",
          image: ChantecaillePinkBlush,
        },
        {
          id: 7,
          name: "GGBabyPinkBlush",
          price: "250",
          image: GGBabyPinkBlush,
        },
        {
          id: 8,
          name: "ShimmerBlush",
          price: "250",
          image: ShimmerBlush,
        },
        {
          id: 9,
          name: "RhodeBlush",
          price: "1500",
          image: RhodeBlush,
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
        <img className="w-[100%] h-[800px] object-cover" src={BlushBg} />

        <div className='absolute bottom-35'>
          <div className="p-10 ml-40 w-[359px] justify-start text-black text-6xl font-light font-['Akatab']">A Natural Flush of Radiance!</div>
          <div className="mt-10 ml-240 w-[462px] h-[175px] justify-start text-[#383232] text-[25px] font-semibold font-['Akatab']">Bring your cheeks to life with our silky, blendable blush! Whether you love a soft, natural glow or a bold pop of color, our formula delivers a long-lasting, fresh-faced look that complements every skin tone.</div>
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

export default Blush