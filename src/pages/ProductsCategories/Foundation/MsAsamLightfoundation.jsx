import React, { useState } from 'react'
import MsAsamLightfoundationImage from '../../../assets/Foundation/MsAsamLightfoundation.svg'
import ProductsDescription from '../ProductsDescription';

const MsAsamLightfoundation = () => {
  const [product] = useState([
      {
        id: 1,
        name: "Ms Asam Light foundation",
        price: "300",
        DiscountPrice: "250",
        image: MsAsamLightfoundationImage,
      },
  ]);
  
  const [table] = useState([
    {
      id: 1,
      name: 'Texture',
      description: 'Light',
    },
    {
      id: 2,
      name: 'Type ',
      description: 'Liquid',
    },
    {
      id: 3,
      name: 'Skin Type',
      description: 'All skin type',
    },
    {
      id: 4,
      name: 'Net quantity',
      description: '50ml',
    },
  ]);

  return (
    <div className='bg-[#f7a672] p-1 h-full'>
      <h1 className='mt-35 text-4xl ml-10'>Ms Asam Light foundation</h1>

      <div className='flex'>
        
       <ProductsDescription productData={product} />

        <div>
          <div className='ml-10'>
            <h1 className='mt-0 text-4xl text-center ml-50'>Product Description</h1>
            <p className='w-[80%] ml-50 mt-10'>Achieve a flawless, natural-looking complexion with this lightweight and buildable foundation. Designed to provide a smooth, even finish, it blends seamlessly into the skin, covering imperfections while maintaining a breathable feel. Infused with hydrating ingredients, it ensures long-lasting comfort and a radiant glow throughout the day.

Key Features:

Lightweight, breathable formula

Buildable coverage (sheer to full)

Hydrates and nourishes the skin

Long-lasting, sweat-proof, and transfer-resistant</p>
            
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

export default MsAsamLightfoundation