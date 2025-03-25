import React, { useState } from 'react'
import LipstickBg from '../../../assets/Lipstick/LipstickBg.svg'
import FentyBeautylipstick from '../../../assets/Lipstick/FentyBeautylipstick.svg'
import Smachboxlipstick from '../../../assets/Lipstick/Smachboxlipstick.svg'
import Naslipstick from '../../../assets/Lipstick/Naslipstick .svg'
import GGNudeshadelipstick from '../../../assets/Lipstick/GGNudeshadelipstick.svg'
import ChanelNudeshadeLipstick from '../../../assets/Lipstick/ChanelNudeshadeLipstick.svg'
import PatrickTaNudeShade from '../../../assets/Lipstick/PatrickTaNudeShade.svg'
import GCDarkRedshadelipstick from '../../../assets/Lipstick/GCDarkRedshadelipstick.svg'
import Laminalightredshade from '../../../assets/Lipstick/Laminalightredshade.svg'
import ChanelRoyaredLipstick from '../../../assets/Lipstick/ChanelRoyaredLipstick.svg'
import ProductsList from '../ProductsList';

const Lipstick = () => {
    const [products] = useState([
      {
        id: 1,
        name: "FentyBeautylipstick",
        price: "250",
        image: FentyBeautylipstick,
        link: '/FentyBeautylipstick',
      },
      {
        id: 2,
        name: "Smachboxlipstick",
        price: "250",
        image: Smachboxlipstick,
        link: '/Smachboxlipstick',
      },
      {
        id: 3,
        name: "Naslipstick",
        price: "1500",
        image: Naslipstick,
        link: '/Naslipstick',
      },
      {
        id: 4,
        name: "GGNudeshadelipstick",
        price: "250",
        image: GGNudeshadelipstick,
        link: '/GGNudeshadelipstick',
      },
      {
        id: 5,
        name: "ChanelNudeshadeLipstick",
        price: "250",
        image: ChanelNudeshadeLipstick,
        link: '/ChanelNudeshadeLipstick',
      },
      {
        id: 6,
        name: "PatrickTaNudeShade",
        price: "1500",
        image: PatrickTaNudeShade,
        link: '/PatrickTaNudeShade',
      },
      {
        id: 7,
        name: "GCDarkRedshadelipstick",
        price: "250",
        image: GCDarkRedshadelipstick,
        link: '/GCDarkRedshadelipstick',
      },
      {
        id: 8,
        name: "Laminalightredshade",
        price: "250",
        image: Laminalightredshade,
        link: '/Laminalightredshade',
      },
      {
        id: 9,
        name: "ChanelRoyaredLipstick",
        price: "1500",
        image: ChanelRoyaredLipstick,
        link: '/ChanelRoyaredLipstick',
      },
      ]);

  return (
    <div>
        <img className="w-[100%] h-[800px] object-cover" src={LipstickBg} />

        <div className='absolute bottom-20 ml-30'>
          <div className="w-[549px] ml-20 justify-start text-black text-[70px] font-light font-['Akatab']">Unleash Your Perfect Pout!</div>
          <div className="w-[638px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Bold, beautiful, and made for you! Our lipsticks are designed to deliver rich color, intense hydration, and long-lasting wear in just one swipe. Whether you love a classic matte, creamy satin, or high-shine gloss, we have the perfect shade to match your mood.</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR LIPSTICK PRODUCTS</h1>

            <ProductsList data={products} />
        </div>
    </div>
  )
}

export default Lipstick