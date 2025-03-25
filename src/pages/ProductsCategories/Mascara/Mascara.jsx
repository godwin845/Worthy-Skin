import React, { useState } from 'react'
import MascaraBg from '../../../assets/Mascara/MascaraBg.svg'
import MaybellineSkyHighMascara from '../../../assets/Mascara/MaybellineSkyHighMascara.svg'
import MaybellineLashSensaMascara from '../../../assets/Mascara/MaybellineLashSensaMascara.svg'
import GucciMascara from '../../../assets/Mascara/GucciMascara.svg'
import ClearToneMascara from '../../../assets/Mascara/ClearToneMascara.svg'
import RareBeautMascara from '../../../assets/Mascara/RareBeautMascara.svg'
import GucciMascara2 from '../../../assets/Mascara/GucciMascara2.svg'
import MarsMascara from '../../../assets/Mascara/MarsMascara.svg'
import DiorMascara from '../../../assets/Mascara/DiorMascara.svg'
import IliaMascara from '../../../assets/Mascara/IliaMascara.svg'
import ProductsList from '../ProductsList';

const Mascara = () => {
    const [products] = useState([
      {
        id: 1,
        name: "MaybellineSkyHighMascara",
        price: "250",
        image: MaybellineSkyHighMascara,
        link: '/MaybellineSkyHighMascara',
      },
      {
        id: 2,
        name: "MaybellineLashSensaMascara",
        price: "250",
        image: MaybellineLashSensaMascara,
        link: '/MaybellineLashSensaMascara',
      },
      {
        id: 3,
        name: "GucciMascara",
        price: "1500",
        image: GucciMascara,
        link: '/GucciMascara',
      },
      {
        id: 4,
        name: "ClearToneMascara",
        price: "250",
        image: ClearToneMascara,
        link: '/ClearToneMascara',
      },
      {
        id: 5,
        name: "RareBeautMascara",
        price: "250",
        image: RareBeautMascara,
        link: '/RareBeautMascara',
      },
      {
        id: 6,
        name: "GucciMascara2",
        price: "1500",
        image: GucciMascara2,
        link: '/GucciMascara2',
      },
      {
        id: 7,
        name: "MarsMascara",
        price: "250",
        image: MarsMascara,
        link: '/MarsMascara',
      },
      {
        id: 8,
        name: "DiorMascara",
        price: "250",
        image: DiorMascara,
        link: '/DiorMascara',
      },
      {
        id: 9,
        name: "IliaMascara",
        price: "1500",
        image: IliaMascara,
        link: '/IliaMascara',
      },
      ]);

  return (
    <div>
        <img className="w-[100%] h-[800px] object-cover" src={MascaraBg} />

        <div className='absolute bottom-10 ml-200'>
          <div className="w-[391px] ml-50 justify-start"><span class="text-black text-6xl font-normal font-['Akatab']">Lash Perfection, Redefined!<br/></span><span class="text-black text-3xl font-normal font-['Akatab']"><br/></span></div>
          <div className="w-[657px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Your lashes deserve the best! Our advanced mascara formulas are designed to lengthen, volumize, and define with every stroke. Whether you're going for a natural flutter or bold drama, we have the perfect mascara for you</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR MASCARA PRODUCTS</h1>

            <ProductsList data={products} />
        </div>
    </div>
  )
}

export default Mascara