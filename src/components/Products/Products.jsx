import React from 'react';
import Foundation from '../../assets/products/Foundation.svg'
import CompactPower from '../../assets/products/CompactPower.svg'
import Lipstick from '../../assets/products/Lipstick.svg'
import Mascara from '../../assets/products/Mascara.svg'
import Concealer from '../../assets/products/Concealer.svg'
import Eyeliner from '../../assets/products/Eyeliner.svg'
import Primer from '../../assets/products/Primer.svg'
import Blush from '../../assets/products/Blush.svg'
import Highlighter from '../../assets/products/Highlighter.svg'
import '../Home/Products.css'

const Products = () => {

  const products = [
    {
      id: 1,
      name: 'Foundation',
      image: Foundation,
    },
    {
      id: 2,
      name: 'Compact Power',
      image: CompactPower,
    },
    {
      id: 3,
      name: 'Lipstick',
      image: Lipstick,
    },
    {
      id: 4,
      name: 'Mascara',
      image: Mascara,
    },
    {
      id: 5,
      name: 'Concealer',
      image: Concealer,
    },
    {
      id: 6,
      name: 'Eyeliner',
      image: Eyeliner,
    },
    {
      id: 7,
      name: 'Primer',
      image: Primer,
    },
    {
      id: 8,
      name: 'Blush',
      image: Blush,
    },
    {
      id: 9,
      name: 'Highlighter',
      image: Highlighter,
    },
  ];

  return (
    <div className="bg-[#e5974d]">
      <div>

        <button className="mt-40 pl-15 h-[32.45px] justify-start text-black text-[50px] font-normal font-['Akatab']">
          OUR SKIN PRODUCTS
        </button>

        <div className="mt-20 ml-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="products-card text-center">
              <img
                className="w-[350px] h-[350px] rounded-[35px]"
                src={product.image}
                alt={product.name}
              />
              <h1 className="mt-10 mb-40 w-[300px] h-[50.55px] justify-start text-black text-[45px] font-normal font-['Akatab']">
                {product.name}
                <br />
                <br />
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;