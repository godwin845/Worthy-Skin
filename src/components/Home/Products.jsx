import React, { useState } from 'react';
import './Products.css'
import MineralFoundation from '../../assets/homeImages/MineralFoundation.svg'
import BobbiFoundationHighlighter from '../../assets/homeImages/BobbiFoundation.svg'
import FentyBeautyLipstick from '../../assets/homeImages/FentyBeautyLipstick.svg'

const Products = () => {
  const [products,] = useState([
    {
      id: 1,
      name: "Mineral Foundation",
      price: "₹250",
      image: MineralFoundation,
    },
    {
      id: 2,
      name: "Bobbi Foundation",
      price: "₹250",
      image: BobbiFoundationHighlighter,
    },
    {
      id: 3,
      name: "Fenty Beauty Lipstick",
      price: "₹1500",
      image: FentyBeautyLipstick,
    },
  ]);

  return (
    <div className='bg-[#e99662]'>

      <button className="lg:p-3 p-2 text-white top-50 lg:top-0 w-40 mt-10 ml-50 lg:ml-320 mx-auto relative bg-[#864523] text-xl  rounded-[35px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
        View All
      </button>

      <h1 className="text-center text-black text-[35px] font-normal font-['Akatab'] mt-10">
        SUMMER OFFER PRODUCTS
      </h1>

      <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
        {products.map((product) => (
          <div key={product.id} className='products-card p-5'>
            <img
              className="w-full h-auto rounded-[35px] mb-5"
              src={product.image}
              alt={product.name}
            />
            <div className="text-black text-center mb-5">
              <h1 className="text-[20px] sm:text-[25px] font-normal font-['Akshar']">{product.name}</h1>
              <p className="text-[16px] sm:text-[20px]">{product.price}</p>
            </div>

            <button className="w-full h-[50px] sm:h-16 mt-5 mb-10 relative bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <p className="absolute left-[50%] transform -translate-x-[50%] top-[50%] -translate-y-[50%] text-black text-lg sm:text-3xl font-bold font-['Akatab']">
                Add to cart
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;