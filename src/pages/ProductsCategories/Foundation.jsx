import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import FoundationBg from '../../assets/Foundation/FoundationBg.svg'
import MsAsamLightfoundation from '../../assets/Foundation/MsAsamLightfoundation.svg'
import N7LightFoundation from '../../assets/Foundation/N7LightFoundation.svg'
import ICanLightFoundation from '../../assets/Foundation/ICanLightFoundation.svg'
import HudabeautyMediumFoundation from '../../assets/Foundation/HudabeautyMediumFoundation.svg'
import RareBeautyMediumFoundation from '../../assets/Foundation/RareBeautyMediumFoundation.svg'
import MarsMediumFoundation from '../../assets/Foundation/MarsMediumFoundation.svg'
import BaimsDarkFoundation from '../../assets/Foundation/BaimsDarkFoundation.svg'
import MarsDarkFoundation from '../../assets/Foundation/MarsDarkFoundation.svg'
import GodSDarkFoundation from '../../assets/Foundation/GodSDarkFoundation.svg'

const Foundation = () => {
    const [products] = useState([
      {
        id: 1,
        name: "Ms Asam Light foundation",
        price: "250",
        image: MsAsamLightfoundation,
        link: '/foundationDescription'
      },
      {
        id: 2,
        name: "N7 Light Foundation",
        price: "250",
        image: N7LightFoundation,
      },
      {
        id: 3,
        name: "ICan Light Foundation",
        price: "1500",
        image: ICanLightFoundation,
      },
      {
        id: 4,
        name: "HudabeautyMediumFoundation",
        price: "250",
        image: HudabeautyMediumFoundation,
      },
      {
        id: 5,
        name: "RareBeautyMediumFoundation",
        price: "250",
        image: RareBeautyMediumFoundation,
      },
      {
        id: 6,
        name: "MarsMediumFoundation",
        price: "1500",
        image: MarsMediumFoundation,
      },
      {
        id: 7,
        name: "BaimsDarkFoundation",
        price: "250",
        image: BaimsDarkFoundation,
      },
      {
        id: 8,
        name: "MarsDarkFoundation",
        price: "250",
        image: MarsDarkFoundation,
      },
      {
        id: 9,
        name: "GodSDarkFoundation",
        price: "1500",
        image: GodSDarkFoundation,
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
        <img className="w-[100%] h-[800px] object-cover" src={FoundationBg} />

        <div className='absolute bottom-50 pl-10'>
          <div className="w-[623px] h-[276px] justify-start text-black text-[70px] font-semibold font-['Akatab']">Flawless Coverage, Your Perfect Match</div>
          <div className="w-[626px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Achieve a seamless, natural-looking complexion with our foundation, designed to enhance your beauty without feeling heavy. Whether you prefer a matte, dewy, or radiant finish, our formulas provide the perfect balance of coverage and breathability</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR FOUNDATION PRODUCTS</h1>

            <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
            {products.map((product) => (
                
                <div key={product.id} className='p-5 hover:shadow-2xl hover:rounded-4xl text-center'>
    
                   <Link to={product.link} >
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

export default Foundation