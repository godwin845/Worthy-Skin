import React, { useState } from 'react'
import PrettyEyesEyelinerImage from '../../../assets/Eyeliner/PrettyEyesEyeliner.svg'
import ProductsDescription from '../ProductsDescription';

const PrettyEyesEyeliner = () => {
  const [product] = useState([
      {
        id: 1,
        name: "Pretty Eyes Eyeliner",
        price: "300",
        DiscountPrice: "250",
        image: PrettyEyesEyelinerImage,
      },
  ]);
  
  const [table] = useState([
    {
      id: 1,
      name: 'Type',
      description: 'Gel',
    },
    {
      id: 2,
      name: 'Finish',
      description: 'Matte',
    },
    {
      id: 3,
      name: 'Skin Type',
      description: 'All skin type',
    },
    {
      id: 4,
      name: 'Net quantity',
      description: '80ml',
    },
  ]);

  return (
    <div className='bg-[#f7a672] p-1 h-full'>
      <h1 className='mt-35 text-4xl ml-10'>Pretty Eyes Eyeliner</h1>

      <div className='flex'>
        
       <ProductsDescription productData={product} />

        <div>
          <div className='ml-10'>
            <h1 className='mt-0 text-4xl text-center ml-50'>Product Description</h1>
            <p className='w-[80%] ml-50 mt-10'>Enhance your eyes with a high-definition, long-lasting eyeliner that delivers intense pigmentation and effortless application. Designed for precision, this formula glides smoothly to create sharp, defined lines or a sultry, smoky effect. Whether you prefer a classic wing or a bold, dramatic look, this eyeliner offers the perfect balance of control and creativity.

🌟 Key Features:
✔ Richly Pigmented: Delivers deep, intense color in just one stroke.
✔ Smooth & Precise: Ultra-fine tip ensures effortless application.
✔ Long-Lasting & Smudge-Proof: Stays flawless for hours without fading.
✔ Waterproof Formula: Resists sweat, humidity, and tears.</p>
            
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

export default PrettyEyesEyeliner