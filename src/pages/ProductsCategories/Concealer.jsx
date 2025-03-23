import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import ConcealerBg from '../../assets/Concealer/ConcealerBg.svg'
import EsteeLauderConcealer from '../../assets/Concealer/EsteeLauderConcealer.svg'
import CharlotteTilburyConcealer from '../../assets/Concealer/CharlotteTilburyConcealer.svg'
import MaybellineConcealer from '../../assets/Concealer/MaybellineConcealer.svg'
import FentyBeautConcealer from '../../assets/Concealer/FentyBeautConcealer.svg'
import ShiseidoConcealer from '../../assets/Concealer/ShiseidoConcealer.svg'
import TarteCocealer from '../../assets/Concealer/TarteCocealer.svg'
import NYXDoubleStickConcealer from '../../assets/Concealer/NYXDoubleStickConcealer.svg'
import MaybellineLightConcealer from '../../assets/Concealer/MaybellineLightConcealer.svg'
import SaieCoceale from '../../assets/Concealer/SaieCoceale.svg'

const Concealer = () => {
    const [products] = useState([
      {
        id: 1,
        name: "EsteeLauderConcealer",
        price: "250",
        image: EsteeLauderConcealer,
        link: '/'
      },
      {
        id: 2,
        name: "CharlotteTilburyConcealer",
        price: "250",
        image: CharlotteTilburyConcealer,
      },
      {
        id: 3,
        name: "MaybellineConcealer",
        price: "1500",
        image: MaybellineConcealer,
      },
      {
        id: 4,
        name: "FentyBeautConcealer",
        price: "250",
        image: FentyBeautConcealer,
      },
      {
        id: 5,
        name: "ShiseidoConcealer",
        price: "250",
        image: ShiseidoConcealer,
      },
      {
        id: 6,
        name: "TarteCocealer",
        price: "1500",
        image: TarteCocealer,
      },
      {
        id: 7,
        name: "NYXDoubleStickConcealer",
        price: "250",
        image: NYXDoubleStickConcealer,
      },
      {
        id: 8,
        name: "MaybellineLightConcealer",
        price: "250",
        image: MaybellineLightConcealer,
      },
      {
        id: 9,
        name: "SaieCoceale",
        price: "1500",
        image: SaieCoceale,
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
        <img className="w-[100%] h-[800px] object-cover" src={ConcealerBg} />

        <div className='absolute bottom-20 p-20'>
          <div className="w-[402px] h-[276px] justify-start text-black text-6xl font-light font-['Akatab']">Goodbye Imperfections, Hello Flawless Skin!</div>
          <div className="w-[511px] h-[175px] justify-start text-white text-[25px] font-semibold font-['Akatab']">Say hello to a brighter, smoother complexion with our high-performance concealer. Designed to cover dark circles, blemishes, and redness, it blends effortlessly for a natural, crease-free finish. Whether you need full coverage or a lightweight touch-up, we’ve got you covered!</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR CONCEALER PRODUCTS</h1>

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

export default Concealer