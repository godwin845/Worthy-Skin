import React from 'react'
import ContactBg from '../../assets/ContactBg.svg'

const Contact = () => {
  return (
    <div>
        <img className="lg:w-[100%] lg:h-[791px] object-cover" src={ContactBg} />

        <div className='absolute bottom-0'>
            <div className='relative bottom-0 ml-130'>
                <h1 className="w-[506px] h-[91px] justify-start text-[#1e1e1e] text-[50px] font-light font-['Outfit']">Get in Touch with Us!<br/></h1>
                
                <p className="w-[914px] justify-start text-black text-xl font-light font-['Outfit'] tracking-widest">We’d love to hear from you! Whether you have questions about our products, need personalized beauty advice, or just want to say hello, our team is here to help.</p>

                <div className="mt-5 w-[477px] h-[57px] relative bg-white rounded-[20px] overflow-hidden">
                    <input
                        type="text"
                        className="w-full h-full pl-[154px] pt-[16px] text-xl font-light font-['Outfit'] text-black/50 bg-white border-none"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mt-5 w-[477px] h-[57px] relative bg-white rounded-[20px] overflow-hidden">
                    <input
                        type="text"
                        className="w-full h-full pl-[159px] pt-[16px] text-xl font-light font-['Outfit'] text-black/50 bg-white border-none"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mt-5 w-[477px] h-[228px] relative bg-white rounded-[20px] overflow-hidden">
                    <textarea
                        className="w-full h-full pl-[151px] pt-[94px] text-xl font-light font-['Outfit'] text-black/50 bg-white border-none resize-none"
                        placeholder="Enter your message"
                    ></textarea>
                </div>

                <button className="mt-5 ml-40 w-[134px] h-[38px] relative bg-[#e4a060] rounded-[20px] overflow-hidden">
                    <div className="left-10 top-0 absolute justify-start text-black text-[25px] font-light font-['Outfit']">Send</div>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Contact