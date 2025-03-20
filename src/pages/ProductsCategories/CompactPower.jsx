import React, { useState } from 'react'
import HighlighterBg from '../../assets/Foundation/HighlighterBg.svg'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';

const CompactPower = () => {
    const [products] = useState([
      {
        id: 1,
        name: "Mineral Foundation",
        price: "250",
        image: "https://placehold.co/350x350",
      },
      {
        id: 2,
        name: "Bobbi Foundation",
        price: "250",
        image: "https://placehold.co/350x350",
      },
      {
        id: 3,
        name: "Fenty Beauty Lipstick",
        price: "1500",
        image: "https://placehold.co/350x350",
      },
      {
        id: 4,
        name: "Mineral Foundation",
        price: "250",
        image: "https://placehold.co/350x350",
      },
      {
        id: 5,
        name: "Bobbi Foundation",
        price: "250",
        image: "https://placehold.co/350x350",
      },
      {
        id: 6,
        name: "Fenty Beauty Lipstick",
        price: "1500",
        image: "https://placehold.co/350x350",
      },
      {
        id: 7,
        name: "Mineral Foundation",
        price: "250",
        image: "https://placehold.co/350x350",
      },
      {
        id: 8,
        name: "Bobbi Foundation",
        price: "250",
        image: "https://placehold.co/350x350",
      },
      {
        id: 9,
        name: "Fenty Beauty Lipstick",
        price: "1500",
        image: "https://placehold.co/350x350",
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

        <div className='absolute bottom-70'>
            <div className=" pl-2 w-[492px] h-[276px] justify-start text-black text-[70px] font-semibold font-['Akatab']">Glow Like Never Before!</div>
            <div className="absolute w-[518px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Elevate your beauty with a luminous touch! Our highlighters are designed to enhance your natural radiance, giving you that perfect glow from day to night. Whether you prefer a subtle shimmer or a bold, dewy finish, we have the perfect formula for you</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR HIGHLIGHTER PRODUCTS</h1>

            <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
            {products.map((product) => (
                
                <div key={product.id}>
    
                    <img className="mt-15 w-[350px] h-[350px] rounded-[35px]" src={product.image} alt={product.name} />
    
                    <h1 className="mt-5 w-full h-[78.29px] justify-start text-black text-[32px] font-normal font-['Akshar']">{product.name}</h1>
    
                    <p className="w-[247.75px] h-[78.29px] justify-start text-black text-[32px] font-normal font-['Akshar']">₹{product.price}</p>
    
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