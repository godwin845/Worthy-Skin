import React from 'react';
import bgImage from '../../assets/bg.png';
import Rabbit from '../../assets/Rabbit.svg';
import Lotus from '../../assets/Lotus.svg';
import Leaf from '../../assets/Leaf.svg';
import Piggybank from '../../assets/Piggy bank.svg';
import Video from './Video';
import Img1 from '../../assets/Frame/img1.svg';
import Img2 from '../../assets/Frame/img2.svg';
import Img3 from '../../assets/Frame/img3.svg';
import Products from './Products';
import Shades from './Shades';
import WorthySkinChatBot from '../../pages/Products/ChatBot';

const Home = () => {
  return (
    <div className='bg-[#864523]'>
      
      <WorthySkinChatBot />

      <img className="lg:w-[100%] lg:h-[886px] object-cover" src={bgImage} />
      
      <div className="w-[100%] h-[150px] lg:w-[100%] lg:h-[220px] relative bg-[#e99662] lg:overflow-hidden">

          <img className="h-10 lg:w-[71px] lg:h-[68px] left-10 lg:left-[233px] top-[52px] absolute" src={Piggybank} />
          <img className="h-10 lg:w-[71px] lg:h-[68px] left-30 lg:left-[536px] top-[52px] absolute" src={Leaf} />
          <img className="h-10 lg:w-[71px] lg:h-[68px] left-55 lg:left-[839px] top-[54px] absolute" src={Lotus} />
          <img className="h-10 lg:w-[71px] lg:h-[71px] left-80 lg:left-[1142px] top-[52px] absolute" src={Rabbit} />

          <div className="lg:left-[207px] left-5 top-30 lg:top-[150px] absolute justify-start text-black lg:text-[32px] font-normal font-['Akshar']">Affordable</div>
          <div className="lg:left-[1120px] left-25 top-30 lg:top-[150px] absolute justify-start text-black lg:text-[32px] font-normal font-['Akshar']">Cruelty Free</div>
          <div className="lg:left-[807px] left-50 top-30 lg:top-[150px] absolute justify-start text-black lg:text-[32px] font-normal font-['Akshar']">All Skin Type</div>
          <div className="lg:left-[499px] left-75 top-30 lg:top-[150px] absolute justify-start text-black lg:text-[32px] font-normal font-['Akshar']">Sustainable</div>
      </div>
      
      <Video />

      <div>
        
      <div className='lg:flex'>
        <img className="w-[80%] mt-5 lg:w-[570px] lg:h-[400px]" src={Img1} />
        <img className="w-[80%] mt-5 lg:w-[550px] lg:h-[400px]" src={Img2} />
        <img className="w-[80%] mt-5 lg:w-[550px] lg:h-[400px]" src={Img3} />
      </div>

      <h1 className="absolute top-275 ml-7 lg:absolute lg:top-475 lg:left-140 text-white text-[44px] lg:text-[54px] font-normal font-['Baloo_2']">Summer is Calling!</h1>
      <p className="absolute top-300 ml-7 lg:absolute lg:top-500 lg:left-50 lg:w-[80%] h-[215px] justify-start text-white text-[24px] lg:text-4xl font-normal font-['Alegreya_Sans_SC']">The hottest beauty deals of the season! ☀️ It’s time to refresh your look with our exclusive Summer Starts Sale, featuring stunning discounts on must-have cosmetics, skincare essentials, and more! Whether you're looking for the perfect lightweight foundation for a sun-kissed glow, bold lip shades to match your summer vibe, or hydrating skincare to beat the heat, we’ve got you covered!</p>
      </div>

      <Shades />
      <Products />
    </div>
  )
}

export default Home;