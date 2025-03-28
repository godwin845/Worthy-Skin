import React, { useState } from 'react'
import CamelCompactpowderImage from '../../../assets/CompactPower/CamelCompactpowder.svg'
import ProductsDescription from '../ProductsDescription';

const CamelCompactpowder = () => {
  const [product] = useState([
      {
        id: 1,
        name: "Camel Compact Powder",
        price: "300",
        DiscountPrice: "250",
        image: CamelCompactpowderImage,
      },
  ]);
  
  const [table] = useState([
    {
      id: 1,
      name: 'Texture',
      description: 'Light weight',
    },
    {
      id: 2,
      name: 'Finish',
      description: 'Nude Matte',
    },
    {
      id: 3,
      name: 'Skin Type',
      description: 'All skin type',
    },
    {
      id: 4,
      name: 'Net quantity',
      description: '50gm',
    },
  ]);

  return (
    <div className='bg-[#f7a672] p-1 h-full'>
      <h1 className='mt-35 text-4xl ml-10'>Camel Compact Powder</h1>

      <div className='flex'>
        
       <ProductsDescription productData={product} />

        <div>
          <div className='ml-10'>
            <h1 className='mt-0 text-4xl text-center ml-50'>Product Description</h1>
            <p className='w-[80%] ml-50 mt-10'>Achieve a smooth, shine-free, and even-toned complexion with Camel Compact Powder. Designed for everyday wear, this lightweight formula blends effortlessly, controls excess oil, and sets your makeup for a long-lasting, natural look.

✨ Key Features & Benefits:
✔ Matte Finish: Controls shine and gives a soft, airbrushed look.
✔ Lightweight Formula: Feels comfortable on the skin without clogging pores.
✔ Buildable Coverage: Provides sheer to medium coverage for a flawless appearance.
✔ Oil-Control & Sweat-Resistant: Keeps skin fresh and oil-free for hours.
✔ Smooth Texture: Glides on seamlessly for a velvety soft touch.</p>
            
            <h1 className='mt-5 text-3xl ml-50'>Product Details</h1>

              <table className='mt-5 mb-10 ml-50 w-150 h-100 border'>
              <tr>
                <th className='border-r'>S.No</th>
                <th className='border-r'>Features</th>
                <th className='border-r'>Details</th>
              </tr>
              {table.map((table) => (

              <tr key={table.id} className='text-center border-t'>
                <td className='border-r'>{table.id}</td>
                <td className='border-r'>{table.name}</td>
                <td className='border-r'>{table.description}</td>
              </tr>
              ))}

            </table>
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default CamelCompactpowder