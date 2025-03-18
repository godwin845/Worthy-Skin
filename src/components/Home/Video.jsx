import React from 'react';
import Ellipse from '../../assets/Ellipse.png';
import Bg2 from '../../assets/Bg-2.mp4';

const Video = () => {
  return (
    <div className='bg-[#864523]'>
        <div className="relative mt-20">
      <div className="relative mt-20">
        <div className="relative mt-20 right-18 lg:right-0">  
            <img src={Ellipse} alt="" className="p-20 lg:p-0 lg:w-[799px] lg:h-[437px] lg:mr-0 lg:ml-20" />
            <div className="absolute top-25 left-26 lg:top-20 lg:left-30 w-[507px] h-[228px] justify-start">
              <span className="text-white text-sm lg:text-[55px] font-normal font-['Alegreya_Sans_SC'] tracking-widest">Your </span>
              <span className="text-black text-sm lg:text-[55px] font-normal font-['Alegreya_Sans_SC'] tracking-widest">Mirror<br/></span>
              <span className="text-white text-sm lg:text-[55px] font-normal font-['Alegreya_Sans_SC'] tracking-widest">Your </span>
              <span className="text-black text-sm lg:text-[55px] font-normal font-['Alegreya_Sans_SC'] tracking-widest">Makeup<br/></span>
              <span className="text-white text-sm lg:text-[55px] font-normal font-['Alegreya_Sans_SC'] tracking-widest">Your </span>
              <span className="text-black text-sm lg:text-[55px] font-normal font-['Alegreya_Sans_SC'] tracking-widest">Perfect Look</span>
            </div>
        </div>
      </div>

      <video 
        className="w-55 h-50 lg:w-[792.89px] lg:h-[446px] flex bottom-45 lg:top-0 ml-40 lg:ml-160 rounded-tr-[20px] lg:rounded-tr-[35px] rounded-bl-[20px] lg:rounded-bl-[35px] absolute" 
        src={Bg2} 
        alt="Video description" 
        controls>
      </video>


      <button className="w-20 h-10 ml-55 bottom-20 lg:w-[294px] lg:h-[60px] lg:ml-230 mt-10 mb-10 font-medium text-sm lg:text-[41px]  relative bg-[#f29d68] rounded-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
          Shop now
      </button>
      </div>
    </div>
  )
}

export default Video