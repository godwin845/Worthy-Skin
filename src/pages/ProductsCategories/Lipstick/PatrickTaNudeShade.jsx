import React, { useState } from 'react'
import PatrickTaNudeShadeImage from '../../../assets/Lipstick/PatrickTaNudeShade.svg'
import ProductsDescription from '../ProductsDescription';

const PatrickTaNudeShade = () => {
  const [product] = useState([
      {
        id: 1,
        name: "PatrickTa Nude Shade",
        price: "300",
        DiscountPrice: "250",
        image: PatrickTaNudeShadeImage,
      },
  ]);
  
  const [table] = useState([
    {
      id: 1,
      name: 'Texture',
      description: 'Creamy',
    },
    {
      id: 2,
      name: 'Color',
      description: 'Nude',
    },
    {
      id: 3,
      name: 'Finish',
      description: 'Creamy',
    },
    {
      id: 4,
      name: 'Net quantity',
      description: '50gm',
    },
  ]);

  return (
    <div className='bg-[#f7a672] p-1 h-full'>
      <h1 className='mt-35 text-4xl ml-10'>PatrickTa Nude Shade</h1>

      <div className='flex'>
        
       <ProductsDescription productData={product} />

        <div>
          <div className='ml-10'>
            <h1 className='mt-0 text-4xl text-center ml-50'>Product Description</h1>
            <p className='w-[80%] ml-50 mt-10'>Elevate your look with this richly pigmented, long-lasting lipstick that delivers vibrant color and a smooth, velvety finish. Designed for all-day wear, it glides effortlessly onto the lips, providing intense hydration and a comfortable feel without smudging or drying out.

Key Features:

Highly pigmented for bold, rich color

Creamy, lightweight texture for effortless application

Long-lasting, smudge-proof, and non-drying formula

Enriched with moisturizing ingredients to keep lips soft and supple</p>
            
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

export default PatrickTaNudeShade