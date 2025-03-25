import React, { useState } from 'react'
import PrimerBg from '../../assets/Primer/PrimerBg.svg'
import FentyBeautyPinkPrimerPrimerBg from '../../assets/Primer/FentyBeautyPinkPrimer.svg'
import IconicMildPrimer from '../../assets/Primer/IconicMildPrimer.svg'
import FentyBeautyMildPrimer from '../../assets/Primer/FentyBeautyMildPrimer.svg'
import ElfRosePrimer from '../../assets/Primer/ElfRosePrimer.svg'
import MarsLightPrimer from '../../assets/Primer/MarsLightPrimer.svg'
import LorealGoldenPrimer from '../../assets/Primer/LorealGoldenPrimer.svg'
import MiikHydroPrimer from '../../assets/Primer/MiikHydroPrimer.svg'
import ElfPinkPrimer from '../../assets/Primer/ElfPinkPrimer.svg'
import FentyBeautyMildPrimer1 from '../../assets/Primer/FentyBeautyMildPrimer1.svg'
import ProductsList from './ProductsList';

const Primer = () => {
    const [products] = useState([
      {
        id: 1,
        name: "FentyBeautyPinkPrimerPrimerBg",
        price: "250",
        image: FentyBeautyPinkPrimerPrimerBg,
        link: '/',
      },
      {
        id: 2,
        name: "IconicMildPrimer",
        price: "250",
        image: IconicMildPrimer,
      },
      {
        id: 3,
        name: "FentyBeautyMildPrimer",
        price: "1500",
        image: FentyBeautyMildPrimer,
      },
      {
        id: 4,
        name: "ElfRosePrimer",
        price: "250",
        image: ElfRosePrimer,
      },
      {
        id: 5,
        name: "MarsLightPrimer",
        price: "250",
        image: MarsLightPrimer,
      },
      {
        id: 6,
        name: "LorealGoldenPrimer",
        price: "1500",
        image: LorealGoldenPrimer,
      },
      {
        id: 7,
        name: "MiikHydroPrimer",
        price: "250",
        image: MiikHydroPrimer,
      },
      {
        id: 8,
        name: "ElfPinkPrimer",
        price: "250",
        image: ElfPinkPrimer,
      },
      {
        id: 9,
        name: "FentyBeautyMildPrimer1",
        price: "1500",
        image: FentyBeautyMildPrimer1,
      },
      ]);

  return (
    <div>
        <img className="w-[100%] h-[800px] object-cover" src={PrimerBg} />

        <div className='absolute bottom-10 p-30 ml-40'>
          <div className="w-[437px] justify-start text-black text-6xl font-light font-['Akatab']">The Perfect Base for Flawless Makeup!</div>
          <div className="w-[418px] mt-5 h-[175px] justify-start text-white text-[25px] font-semibold font-['Akatab']">Prep, smooth, and perfect your skin with our must-have primer! Designed to blur imperfections, minimize pores, and extend makeup wear, it creates the ideal canvas for a flawless finish—whether you prefer a matte, dewy, or radiant look.</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR PRIMER PRODUCTS</h1>

            <ProductsList data={products} />
        </div>
    </div>
  )
}

export default Primer