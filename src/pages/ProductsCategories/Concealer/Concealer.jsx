import React, { useState } from 'react'
import ConcealerBg from '../../../assets/Concealer/ConcealerBg.svg'
import EsteeLauderConcealer from '../../../assets/Concealer/EsteeLauderConcealer.svg'
import CharlotteTilburyConcealer from '../../../assets/Concealer/CharlotteTilburyConcealer.svg'
import MaybellineConcealer from '../../../assets/Concealer/MaybellineConcealer.svg'
import FentyBeautConcealer from '../../../assets/Concealer/FentyBeautConcealer.svg'
import ShiseidoConcealer from '../../../assets/Concealer/ShiseidoConcealer.svg'
import TarteCocealer from '../../../assets/Concealer/TarteCocealer.svg'
import NYXDoubleStickConcealer from '../../../assets/Concealer/NYXDoubleStickConcealer.svg'
import MaybellineLightConcealer from '../../../assets/Concealer/MaybellineLightConcealer.svg'
import SaieCoceale from '../../../assets/Concealer/SaieCoceale.svg'
import ProductsList from '../ProductsList';

const Concealer = () => {
    const [products] = useState([
      {
        id: 1,
        name: "EsteeLauderConcealer",
        price: "250",
        image: EsteeLauderConcealer,
        link: '/EsteeLauderConcealer'
      },
      {
        id: 2,
        name: "CharlotteTilburyConcealer",
        price: "250",
        image: CharlotteTilburyConcealer,
        link: '/CharlotteTilburyConcealer'
      },
      {
        id: 3,
        name: "MaybellineConcealer",
        price: "1500",
        image: MaybellineConcealer,
        link: '/MaybellineConcealer'
      },
      {
        id: 4,
        name: "FentyBeautConcealer",
        price: "250",
        image: FentyBeautConcealer,
        link: '/FentyBeautConcealer'
      },
      {
        id: 5,
        name: "ShiseidoConcealer",
        price: "250",
        image: ShiseidoConcealer,
        link: '/ShiseidoConcealer'
      },
      {
        id: 6,
        name: "TarteCocealer",
        price: "1500",
        image: TarteCocealer,
        link: '/TarteCocealer'
      },
      {
        id: 7,
        name: "NYXDoubleStickConcealer",
        price: "250",
        image: NYXDoubleStickConcealer,
        link: '/NYXDoubleStickConcealer'
      },
      {
        id: 8,
        name: "MaybellineLightConcealer",
        price: "250",
        image: MaybellineLightConcealer,
        link: '/MaybellineLightConcealer'
      },
      {
        id: 9,
        name: "SaieCoceale",
        price: "1500",
        image: SaieCoceale,
        link: '/SaieCoceale'
      },
      ]);

  return (
    <div>
        <img className="w-[100%] h-[800px] object-cover" src={ConcealerBg} />

        <div className='absolute bottom-20 p-20'>
          <div className="w-[402px] h-[276px] justify-start text-black text-6xl font-light font-['Akatab']">Goodbye Imperfections, Hello Flawless Skin!</div>
          <div className="w-[511px] h-[175px] justify-start text-white text-[25px] font-semibold font-['Akatab']">Say hello to a brighter, smoother complexion with our high-performance concealer. Designed to cover dark circles, blemishes, and redness, it blends effortlessly for a natural, crease-free finish. Whether you need full coverage or a lightweight touch-up, we’ve got you covered!</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR CONCEALER PRODUCTS</h1>

            <ProductsList data={products} />
        </div>
    </div>
  )
}

export default Concealer