import React from 'react'
import MsAsamLightfoundation from '../../../assets/Foundation/MsAsamLightfoundation.svg'

const FoundationDescription = () => {
  return (
    <div className='bg-[#f7a672] p-1 h-screen'>
      <h1 className='mt-30 text-4xl ml-10'>Ms Asam Light foundation</h1>

      <div className='mt-10'>
        <img className='w-[30%] ml-10' src={MsAsamLightfoundation} alt="" />
        
        <button className="mt-10  ml-5 w-[222px] h-16 relative bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="left-[43px] top-[11px] absolute justify-start text-black text-2xl font-bold font-['Akatab']">Add to cart</div>
        </button>

        <button className="mt-10 ml-10 w-[200px] h-16 relative bg-[#f7a672] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="left-[43px] top-[11px] absolute justify-start text-black text-2xl font-bold font-['Akatab']">Buy Now</div>
        </button>
        <div>
          <div className='absolute top-30'>
            <h1 className='mt-0 text-4xl text-center ml-180'>Product Description</h1>
            <p className='w-[50%] ml-180 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste facilis ipsam fugiat voluptatibus illum quas repellat commodi quibusdam exercitationem velit adipisci porro eius incidunt officia consequatur voluptates inventore at impedit, sed a provident aspernatur hic. Rem aspernatur debitis magnam deserunt eligendi, cumque modi molestiae suscipit. Quas odio fugiat nobis blanditiis vitae voluptate magnam nesciunt amet ex ea obcaecati officia, delectus aliquid at numquam pariatur quidem deleniti atque beatae accusantium quo. Necessitatibus ab veritatis alias. Perferendis vel, vitae nemo quas nostrum, optio accusamus quod dolorum porro tenetur harum, voluptates laudantium maiores illum. At nam ducimus perspiciatis corporis sed voluptatum adipisci?</p>
            
            <h1 className='mt-5 text-3xl ml-180'>Product Details</h1>

            <table className='mt-5 ml-180 w-190 h-70 border'>
              <tr>
                <th className='border-r'>S.No</th>
                <th className='border-r'>Name</th>
                <th className='border-r'>Name</th>
              </tr>
              <tr className='text-center border-t'>
                <td className='border-r'>1.</td>
                <td className='border-r'>Product Name</td>
                <td className='border-r'>Product Name</td>
              </tr>
              <tr className='text-center border-t'>
                <td className='border-r'>1.</td>
                <td className='border-r'>Product Name</td>
                <td className='border-r'>Product Name</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default FoundationDescription