import React, { useState } from 'react'
import MsAsamLightfoundationImage from '../../../assets/Foundation/MsAsamLightfoundation.svg'
import ProductsDescription from '../ProductsDescription';

const FentyBeautylipstick = () => {
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
      name: 'Type',
      description: 'description',
    },
    {
      id: 2,
      name: 'Liquid foundation',
      description: 'description',
    },
    {
      id: 3,
      name: 'Skin Type',
      description: 'All skin type',
    },
    {
      id: 4,
      name: 'Net quantity',
      description: 'All skin type',
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
            <p className='w-[80%] ml-50 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste facilis ipsam fugiat voluptatibus illum quas repellat commodi quibusdam exercitationem velit adipisci porro eius incidunt officia consequatur voluptates inventore at impedit, sed a provident aspernatur hic. Rem aspernatur debitis magnam deserunt eligendi, cumque modi molestiae suscipit. Quas odio fugiat nobis blanditiis vitae voluptate magnam nesciunt amet ex ea obcaecati officia, delectus aliquid at numquam pariatur quidem deleniti atque beatae accusantium quo. Necessitatibus ab veritatis alias. Perferendis vel, vitae nemo quas nostrum, optio accusamus quod dolorum porro tenetur harum, voluptates laudantium maiores illum. At nam ducimus perspiciatis corporis sed voluptatum adipisci?</p>
            
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

export default FentyBeautylipstick