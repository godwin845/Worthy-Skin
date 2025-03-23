import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';
import MascaraBg from '../../assets/Mascara/MascaraBg.svg'
import MaybellineSkyHighMascara from '../../assets/Mascara/MaybellineSkyHighMascara.svg'
import MaybellineLashSensaMascara from '../../assets/Mascara/MaybellineLashSensaMascara.svg'
import GucciMascara from '../../assets/Mascara/GucciMascara.svg'
import ClearToneMascara from '../../assets/Mascara/ClearToneMascara.svg'
import RareBeautMascara from '../../assets/Mascara/RareBeautMascara.svg'
import GucciMascara2 from '../../assets/Mascara/GucciMascara2.svg'
import MarsMascara from '../../assets/Mascara/MarsMascara.svg'
import DiorMascara from '../../assets/Mascara/DiorMascara.svg'
import IliaMascara from '../../assets/Mascara/IliaMascara.svg'

const Mascara = () => {
    const [products] = useState([
      {
        id: 1,
        name: "MaybellineSkyHighMascara",
        price: "250",
        image: MaybellineSkyHighMascara,
        link: '/',
      },
      {
        id: 2,
        name: "MaybellineLashSensaMascara",
        price: "250",
        image: MaybellineLashSensaMascara,
      },
      {
        id: 3,
        name: "GucciMascara",
        price: "1500",
        image: GucciMascara,
      },
      {
        id: 4,
        name: "ClearToneMascara",
        price: "250",
        image: ClearToneMascara,
      },
      {
        id: 5,
        name: "RareBeautMascara",
        price: "250",
        image: RareBeautMascara,
      },
      {
        id: 6,
        name: "GucciMascara2",
        price: "1500",
        image: GucciMascara2,
      },
      {
        id: 7,
        name: "MarsMascara",
        price: "250",
        image: MarsMascara,
      },
      {
        id: 8,
        name: "DiorMascara",
        price: "250",
        image: DiorMascara,
      },
      {
        id: 9,
        name: "IliaMascara",
        price: "1500",
        image: IliaMascara,
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
        <img className="w-[100%] h-[800px] object-cover" src={MascaraBg} />

        <div className='absolute bottom-10 ml-200'>
          <div className="w-[391px] ml-50 justify-start"><span class="text-black text-6xl font-normal font-['Akatab']">Lash Perfection, Redefined!<br/></span><span class="text-black text-3xl font-normal font-['Akatab']"><br/></span></div>
          <div className="w-[657px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Your lashes deserve the best! Our advanced mascara formulas are designed to lengthen, volumize, and define with every stroke. Whether you're going for a natural flutter or bold drama, we have the perfect mascara for you</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR MASCARA PRODUCTS</h1>

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

export default Mascara