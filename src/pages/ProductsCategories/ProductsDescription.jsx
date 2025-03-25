import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';

const ProductsDescription = ({ productData }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} added successfully!`);
    navigate('/cart');
  }

  return (
    <div>
        {productData.map((product) => (

        <div key={product.id} className='flex-none'>

        <img className='w-[100%] mt-10 ml-10' src={product.image} alt="" />

        <div className='flex gap-5 justify-center'>
            <p className='mt-7 text-2xl'>20% offer</p>
            <p className="line-through text-center mt-5 justify-start text-black text-[32px] font-normal font-['Akshar']">₹{product.price}</p>
            <p className="text-center mt-5 justify-start text-black text-[32px] font-normal font-['Akshar']">₹{product.DiscountPrice}</p>
        </div>
            <div className='flex'>
              <button onClick={() => handleAddToCart(product)} className="mt-10 ml-10 w-[200px] h-16 bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                  <div className="left-[43px] top-[11px] justify-start text-black text-2xl font-bold font-['Akatab']">Add to cart</div>
              </button>
              <button onClick={() => handleAddToCart(product)} className="mt-10 ml-10 w-[200px] h-16 bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                  <div className="left-[43px] top-[11px] justify-start text-black text-2xl font-bold font-['Akatab']">Buy Now</div>
              </button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ProductsDescription