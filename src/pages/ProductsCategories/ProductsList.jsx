import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart';

const ProductsList = ({ data }) => {

      const dispatch = useDispatch();
  
      const navigate = useNavigate();
  
      const handleAddToCart = (product) => {
          dispatch(addToCart(product));
          alert(`${product.name} added successfully!`);
          navigate('/cart')
      };

  return (
    <div className='lg:mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
       {data.map((product) => (
                
                <div key={product.id} className='p-5 hover:shadow-2xl hover:rounded-4xl text-center'>
    
                   <Link to={product.link} >
                    <img className="mt-5 lg:mt-15 lg:object-cover w-full h-[350px] rounded-[35px]" src={product.image} alt={product.name} />
                   </Link>
    
                    <h1 className="mt-5 w-full h-[78.29px] justify-start text-black text-2xl lg:text-[32px] font-normal font-['Akshar']">{product.name}</h1>
    
                    <div className='flex'>

                      <p className='ml-7 mt-2 text-xl lg:text-2xl'>20% offer</p>
                      <p className="line-through text-center ml-5 justify-start text-black text-[25px] lg:text-[32px] font-normal font-['Akshar']">₹{product.price}</p>
                      <p className="h-[78.29px] ml-5 justify-start text-black text-[25px] lg:text-[32px] font-normal font-['Akshar']">₹{product.DiscountPrice}</p>
                    </div>


                  <button onClick={() => handleAddToCart(product)} className="w-[222px] h-16 relative bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                      <div className="left-[43px] top-[11px] absolute justify-start text-black text-3xl font-bold font-['Akatab']">Add to cart</div>
                  </button>

                </div>
                ))}
                   
    </div>
  )
}

export default ProductsList