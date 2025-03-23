import React from 'react';
import Foundation from '../../assets/products/Foundation.svg';
import CompactPower from '../../assets/products/CompactPower.svg';
import Lipstick from '../../assets/products/Lipstick.svg';
import Mascara from '../../assets/products/Mascara.svg';
import Concealer from '../../assets/products/Concealer.svg';
import Eyeliner from '../../assets/products/Eyeliner.svg';
// import Primer from '../../assets/products/Primer.svg';
// import Blush from '../../assets/products/Blush.svg';
// import Highlighter from '../../assets/products/Highlighter.svg';
import '../../components/Home/Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Foundation',
      image: Foundation,
      link: '/foundation',  // Fixed 'Link' to 'link' and added valid route
    },
    {
      id: 2,
      name: 'Compact Power',
      image: CompactPower,
      link: '/compactpower',  // Example route
    },
    {
      id: 3,
      name: 'Lipstick',
      image: Lipstick,
      link: '/lipstick',  // Example route
    },
    {
      id: 4,
      name: 'Mascara',
      image: Mascara,
      link: '/mascara',  // Example route
    },
    {
      id: 5,
      name: 'Concealer',
      image: Concealer,
      link: '/concealer',  // Example route
    },
    {
      id: 6,
      name: 'Eyeliner',
      image: Eyeliner,
      link: '/eyeliner',  // Example route
    },
  ];

  return (
    <div className="bg-[#e99662] p-6 max-[h-full]">
      <div>
        <h1 className="mt-20 lg:mt-40 pl-15 h-[32.45px] justify-start text-black text-[28px] lg:text-[45px] font-normal font-['Akatab']">
          OUR SKIN PRODUCTS
        </h1>

        <div className="mt-5 lg:mt-20 w-[80%] ml-10 lg:ml-40 grid grid-cols-1 md:grid-cols-3 lg:gap-30">
          {products.map((product) => (
            <div key={product.id} className="products-card text-center">

              <Link to={product.link} >
                <img
                  className="w-[350px] h-[350px] rounded-[35px]"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <h1 className="lg:mt-10 mb-10 w-[300px] h-[50.55px] justify-start text-black text-3xl lg:text-[45px] font-normal font-['Akatab']">
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