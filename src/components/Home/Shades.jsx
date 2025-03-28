import React from 'react'
import Ellipse1 from '../../assets/Ellipse1.svg';
import FoundationDetector from '../../assets/Shades/FoundationDetector.svg';
import LipsticksFoundationDetector from '../../assets/Shades/LipsticksFoundationDetector.svg';

const Shades = () => {
  return (
    <div>
         <div className='lg:flex gap-20 mt-25 mb-10 ml-5'>

        <div className="w-[374px] h-[707px] mt-5 relative bg-[#f7a672] rounded-[30px] overflow-hidden">
            <img className="w-[304px] h-[203px] left-[35px] top-[49px] absolute rounded-[26px]" src={FoundationDetector} />
            <div className="w-[337px] left-[30px] top-[266px] absolute justify-start text-black text-3xl font-medium font-['Outfit']">Find Your Perfect Match <br/>            AI-Powered<br/>    Foundation Detector</div>
            <div className="w-[284px] h-[296px] left-[57px] top-[389px] absolute justify-start text-black text-[26px] font-light font-['Outfit']">Say goodbye to shade mismatches! Our AI-powered Foundation Detector analyzes your skin tone to find the perfect match for a flawless, natural look—effortlessly and instantly!</div>
        </div>

        <div className="w-[374px] h-[707px] mt-5 mb-25  relative bg-[#f7a672] rounded-[30px] overflow-hidden">
          <img className="w-[304px] h-[203px] left-[35px] top-[49px] absolute rounded-[26px]" src={LipsticksFoundationDetector} />
          <div className="w-[337px] left-[23px] top-[270px] absolute justify-start text-black text-3xl font-medium font-['Outfit']">Find Your Perfect Shade – Instantly, Effortlessly</div>
          <div className="w-[284px] h-[296px] left-[45px] top-[377px] absolute justify-start text-black text-[26px] font-light font-['Outfit']">Say goodbye to shade mismatches! Our AI-powered Foundation Detector analyzes your skin tone to find the perfect match for a flawless, natural look—effortlessly and instantly!</div>
        </div>

        <img src={Ellipse1} className='lg:mb-40 lg:ml-16' />
      </div>
      <div className="absolute top-845 mt-35 lg:mt-10 ml-25 lg:ml-0 w-60 text-[25px] lg:top-625 lg:left-270 lg:w-[437px] justify-start"><span class="text-[#1e1e1e] text-[40px] lg:text-[61px] font-extrabold font-['Akatab']">Your Shade Your Way!</span><span class="text-[#1e1e1e] lg:text-3xl font-extrabold font-['Akatab']"> <br/><br/></span><span class="text-[#1e1e1e] lg:text-3xl font-bold font-['Akatab']">Discover the perfect match with our smart shade detection technology</span></div>
    </div>
  )
}

export default Shades