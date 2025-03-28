import React, { useState } from 'react'
import ChanelGlossyCompactImage from '../../../assets/CompactPower/ChanelGlossyCompact.svg'
import ProductsDescription from '../ProductsDescription';

const ChanelGlossyCompact = () => {
  const [product] = useState([
      {
        id: 1,
        name: "Chanel Glossy Compact Powder",
        price: "300",
        DiscountPrice: "250",
        image: ChanelGlossyCompactImage,
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
      description: 'Matte Glossy',
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
      <h1 className='mt-35 text-4xl ml-10'>Chanel Glossy Compact</h1>

      <div className='flex'>
        
       <ProductsDescription productData={product} />

        <div>
          <div className='ml-10'>
            <h1 className='mt-0 text-4xl text-center ml-50'>Product Description</h1>
            <p className='w-[80%] ml-50 mt-10'>Experience luxury with the Chanel Rose Compact Powder, a finely milled pressed powder designed to enhance your natural radiance with a soft, rosy glow. Infused with skin-loving ingredients, this compact powder provides a smooth, flawless finish while keeping your complexion fresh and luminous throughout the day.

✨ Key Features & Benefits:
✔ Soft Rosy Glow: Enhances skin with a delicate, radiant finish.
✔ Feather-Light Texture: Ultra-fine powder blends seamlessly for a second-skin feel.
✔ Buildable Coverage: Can be used alone for a sheer, natural look or over foundation for a perfected finish.
✔ Oil Control & Hydration Balance: Absorbs excess shine while keeping skin hydrated.</p>
            
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

export default ChanelGlossyCompact