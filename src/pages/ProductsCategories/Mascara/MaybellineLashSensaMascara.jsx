import React, { useState } from 'react'
import MaybellineLashSensaMascaraImage from '../../../assets/Mascara/MaybellineLashSensaMascara.svg'
import ProductsDescription from '../ProductsDescription';

const MaybellineLashSensaMascara = () => {
  const [product] = useState([
      {
        id: 1,
        name: "Maybelline Lash Sensa Mascara",
        price: "300",
        DiscountPrice: "250",
        image: MaybellineLashSensaMascaraImage,
      },
  ]);
  
  const [table] = useState([
    {
      id: 1,
      name: 'Type',
      description: 'Water Proof',
    },
    {
      id: 2,
      name: 'Color',
      description: 'Black',
    },
    {
      id: 3,
      name: 'Brush',
      description: 'Curve',
    },
    {
      id: 4,
      name: 'Net quantity',
      description: '80gm',
    },
  ]);

  return (
    <div className='bg-[#f7a672] p-1 h-full'>
      <h1 className='mt-35 text-4xl ml-10'>Maybelline Lash Sensa Mascara1`</h1>

      <div className='flex'>
        
       <ProductsDescription productData={product} />

        <div>
          <div className='ml-10'>
            <h1 className='mt-0 text-4xl text-center ml-50'>Product Description</h1>
            <p className='w-[80%] ml-50 mt-10'>Enhance your lashes with our high-performance mascara, designed to deliver intense volume, dramatic length, and long-lasting curl. The lightweight, clump-free formula glides smoothly onto your lashes, coating each strand evenly for a fuller, more defined look. Infused with nourishing ingredients like Vitamin E and natural oils, it helps keep your lashes soft and conditioned while preventing flaking or smudging throughout the day.Key Benefits:
✔ Long-lasting, smudge-proof formula
✔ Adds volume, length, and curl
✔ Clump-free, lightweight texture
✔ Easy to apply and remove</p>
            
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

export default MaybellineLashSensaMascara