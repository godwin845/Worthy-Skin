import React, { useState } from 'react'
import ShiseidoConcealerImage from '../../../assets/Concealer/ShiseidoConcealer.svg'
import ProductsDescription from '../ProductsDescription';

const ShiseidoConcealer = () => {
  const [product] = useState([
      {
        id: 1,
        name: "Shiseido Concealer",
        price: "300",
        DiscountPrice: "250",
        image: ShiseidoConcealerImage,
      },
  ]);
  
  const [table] = useState([
    {
      id: 1,
      name: 'Type',
      description: 'Cream',
    },
    {
      id: 2,
      name: 'Finish',
      description: 'Coverage',
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
      <h1 className='mt-35 text-4xl ml-10'>Shiseido Concealer</h1>

      <div className='flex'>
        
       <ProductsDescription productData={product} />

        <div>
          <div className='ml-10'>
            <h1 className='mt-0 text-4xl text-center ml-50'>Product Description</h1>
            <p className='w-[80%] ml-50 mt-10'>Unveil a radiant, even-toned complexion with the Shiseido Radiance Concealer, a lightweight yet high-coverage formula designed to camouflage imperfections while nourishing your skin. This luxurious concealer blends effortlessly, brightening under-eyes, covering blemishes, and smoothing skin texture for a naturally flawless finish.

✨ Key Features & Benefits:
✔ Full Yet Breathable Coverage: Hides dark circles, redness, and blemishes without feeling heavy.
✔ Hydrating Formula: Keeps skin fresh and crease-free all day.
✔ Long-Lasting Wear: Sweat and humidity-resistant, ensuring a flawless look for hours.
✔ Smooth & Blendable: Ultra-creamy texture melts seamlessly into the skin.</p>
            
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

export default ShiseidoConcealer