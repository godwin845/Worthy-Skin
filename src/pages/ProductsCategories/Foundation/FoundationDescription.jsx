import React, { useState } from 'react'
import MsAsamLightfoundation from '../../../assets/Foundation/MsAsamLightfoundation.svg'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart';
import { useNavigate } from 'react-router-dom';

const FoundationDescription = () => {
  const [product] = useState([
      {
        id: 1,
        name: "Ms Asam Light foundation",
        price: "300",
        DiscountPrice: "250",
        image: MsAsamLightfoundation,
      },
  ]);
  
  const [table] = useState([
    {
      id: 1,
      name: 'name1',
      desc: 'desc',
    },
    {
      id: 2,
      name: 'name2',
      desc: 'desc',
    },
    {
      id: 3,
      name: 'name3',
      desc: 'desc',
    },
  ]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} added successfully!`);
    navigate('/cart');
  }

  return (
    <div className='bg-[#f7a672] p-1 h-full'>
      <h1 className='mt-26 text-4xl ml-10'>Ms Asam Light foundation</h1>

      <div className='flex'>
       {product.map((product) => (

        <div key={product.id} className='flex-none'>

          <img className='w-[100%] mt-10 ml-10' src={MsAsamLightfoundation} alt="" />

          <div className='flex gap-5 justify-center'>
            <p className='mt-7 text-2xl'>20% offer</p>
            <p className="line-through text-center mt-5 justify-start text-black text-[32px] font-normal font-['Akshar']">₹{product.price}</p>
            <p className="text-center mt-5 justify-start text-black text-[32px] font-normal font-['Akshar']">₹{product.DiscountPrice}</p>
          </div>
            <button onClick={() => handleAddToCart(product)} className="mt-5 ml-5 w-[222px] h-16 bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="left-[43px] top-[11px]  justify-start text-black text-2xl font-bold font-['Akatab']">Add to cart</div>
            </button>

            <button onClick={() => handleAddToCart(product)} className="mt-10 ml-10 w-[200px] h-16 bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="left-[43px] top-[11px] justify-start text-black text-2xl font-bold font-['Akatab']">Buy Now</div>
            </button>
       </div>
       ))}
        <div>
          <div>
            <h1 className='mt-0 text-4xl text-center ml-50'>Product Description</h1>
            <p className='w-[80%] ml-50 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste facilis ipsam fugiat voluptatibus illum quas repellat commodi quibusdam exercitationem velit adipisci porro eius incidunt officia consequatur voluptates inventore at impedit, sed a provident aspernatur hic. Rem aspernatur debitis magnam deserunt eligendi, cumque modi molestiae suscipit. Quas odio fugiat nobis blanditiis vitae voluptate magnam nesciunt amet ex ea obcaecati officia, delectus aliquid at numquam pariatur quidem deleniti atque beatae accusantium quo. Necessitatibus ab veritatis alias. Perferendis vel, vitae nemo quas nostrum, optio accusamus quod dolorum porro tenetur harum, voluptates laudantium maiores illum. At nam ducimus perspiciatis corporis sed voluptatum adipisci?</p>
            
            <h1 className='mt-5 text-3xl ml-50'>Product Details</h1>

              <table className='mt-5 mb-10 ml-50 w-190 h-100 border'>
              <tr>
                <th className='border-r'>S.No</th>
                <th className='border-r'>Name</th>
                <th className='border-r'>Name</th>
              </tr>
              {table.map((table) => (

              <tr key={table.id} className='text-center border-t'>
                <td className='border-r'>{table.id}</td>
                <td className='border-r'>{table.name}</td>
                <td className='border-r'>{table.desc}</td>
              </tr>
              ))}

            </table>
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default FoundationDescription