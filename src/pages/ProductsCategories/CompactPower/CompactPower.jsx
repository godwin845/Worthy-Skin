import React, { useState } from 'react'
import CompactPowerBg from '../../../assets/CompactPower/CompactPowerBg.svg'
import GGCompactPowder from '../../../assets/CompactPower/GGCompactPowder.svg'
import CamelCompactpowder from '../../../assets/CompactPower/CamelCompactpowder.svg'
import ChanelCompactPowder from '../../../assets/CompactPower/ChanelCompactPowder.svg'
import ChanelGlossyCompact from '../../../assets/CompactPower/ChanelGlossyCompact.svg'
import ChanelCompactPowder2 from '../../../assets/CompactPower/ChanelCompactPowder2.svg'
import PatrickTaCompactPowder from '../../../assets/CompactPower/PatrickTaCompactPowder.svg'
import ChanelCompactPowder3 from '../../../assets/CompactPower/ChanelCompactPowder3.svg'
import LamerCompactPowder from '../../../assets/CompactPower/LamerCompactPowder.svg'
import ChanelCompactPowder4 from '../../../assets/CompactPower/ChanelCompactPowder4.svg'
import ProductsList from '../ProductsList';

const CompactPower = () => {
    const [products] = useState([
      {
        id: 1,
        name: "GGCompactPowder",
        price: "250",
        image: GGCompactPowder,
        link: '/GGCompactPowder',
      },
      {
        id: 2,
        name: "CamelCompactpowder",
        price: "250",
        image: CamelCompactpowder,
        link: '/CamelCompactpowder',
      },
      {
        id: 3,
        name: "ChanelCompactPowder",
        price: "1500",
        image: ChanelCompactPowder,
        link: '/ChanelCompactPowder',
      },
      {
        id: 4,
        name: "ChanelGlossyCompact",
        price: "250",
        image: ChanelGlossyCompact,
        link: '/ChanelGlossyCompact',
      },
      {
        id: 5,
        name: "ChanelCompactPowder2",
        price: "250",
        image: ChanelCompactPowder2,
        link: '/ChanelCompactPowder2',
      },
      {
        id: 6,
        name: "PatrickTaCompactPowder",
        price: "1500",
        image: PatrickTaCompactPowder,
        link: '/PatrickTaCompactPowder',
      },
      {
        id: 7,
        name: "ChanelCompactPowder3",
        price: "250",
        image: ChanelCompactPowder3,
        link: '/ChanelCompactPowder3',
      },
      {
        id: 8,
        name: "LamerCompactPowder",
        price: "250",
        image: LamerCompactPowder,
        link: '/LamerCompactPowder',
      },
      {
        id: 9,
        name: "ChanelCompactPowder4",
        price: "1500",
        image: ChanelCompactPowder4,
        link: '/ChanelCompactPowder4',
      },
      ]);

  return (
    <div>
        <img className=" lg:w-[100%] lg:h-[800px] lg:object-cover" src={CompactPowerBg} />

        <div className='absolute bottom-165 lg:bottom-50 pl-10 lg:pl-10'>
          <div className="w-35 lg:w-[623px] lg:h-[276px] justify-start text-black text-sm lg:text-[70px] font-semibold font-['Akatab']">Flawless Coverage, Your Perfect Match</div>
          <div className="mt-2 lg:mt-0 w-33 lg:w-[626px] lg:h-[175px] justify-start text-white text-[7px] lg:text-3xl font-semibold font-['Akatab']">Achieve a seamless, natural-looking complexion with our foundation, designed to enhance your beauty without feeling heavy. Whether you prefer a matte, dewy, or radiant finish, our formulas provide the perfect balance of coverage and breathability</div>
        </div>

        <div className='lg:pl-5 bg-[#f7a672] p-6'>
            <h1 className="lg:mt-5 w-full h-[32.45px] justify-start text-black text-[24px] lg:text-[35px] font-normal font-['Akatab']">OUR FOUNDATION PRODUCTS</h1>

            <ProductsList data={products} />

        </div>
    </div>
  )
}

export default CompactPower