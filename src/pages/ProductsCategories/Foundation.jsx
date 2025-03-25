import React, { useState } from 'react'
import FoundationBg from '../../assets/Foundation/FoundationBg.svg'
import MsAsamLightfoundation from '../../assets/Foundation/MsAsamLightfoundation.svg'
import N7LightFoundation from '../../assets/Foundation/N7LightFoundation.svg'
import ICanLightFoundation from '../../assets/Foundation/ICanLightFoundation.svg'
import HudabeautyMediumFoundation from '../../assets/Foundation/HudabeautyMediumFoundation.svg'
import RareBeautyMediumFoundation from '../../assets/Foundation/RareBeautyMediumFoundation.svg'
import MarsMediumFoundation from '../../assets/Foundation/MarsMediumFoundation.svg'
import BaimsDarkFoundation from '../../assets/Foundation/BaimsDarkFoundation.svg'
import MarsDarkFoundation from '../../assets/Foundation/MarsDarkFoundation.svg'
import GodSDarkFoundation from '../../assets/Foundation/GodSDarkFoundation.svg'
import ProductsList from './ProductsList';

const Foundation = () => {

    const [products] = useState([
      {
        id: 1,
        name: "Ms Asam Light foundation",
        price: "300",
        DiscountPrice: "250",
        image: MsAsamLightfoundation,
        link: '/foundationDescription'
      },
      {
        id: 2,
        name: "N7 Light Foundation",
        price: "300",
        DiscountPrice: "250",
        image: N7LightFoundation,
      },
      {
        id: 3,
        name: "ICan Light Foundation",
        price: "300",
        DiscountPrice: "250",
        image: ICanLightFoundation,
      },
      {
        id: 4,
        name: "HudabeautyMediumFoundation",
        price: "300",
        DiscountPrice: "250",
        image: HudabeautyMediumFoundation,
      },
      {
        id: 5,
        name: "RareBeautyMediumFoundation",
        price: "300",
        DiscountPrice: "250",
        image: RareBeautyMediumFoundation,
      },
      {
        id: 6,
        name: "MarsMediumFoundation",
        price: "300",
        DiscountPrice: "250",
        image: MarsMediumFoundation,
      },
      {
        id: 7,
        name: "BaimsDarkFoundation",
        price: "300",
        DiscountPrice: "250",
        image: BaimsDarkFoundation,
      },
      {
        id: 8,
        name: "MarsDarkFoundation",
        price: "300",
        DiscountPrice: "250",
        image: MarsDarkFoundation,
      },
      {
        id: 9,
        name: "GodSDarkFoundation",
        price: "300",
        DiscountPrice: "250",
        image: GodSDarkFoundation,
      },
      ]);

  return (
    <div>
        <img className=" lg:w-[100%] lg:h-[800px] lg:object-cover" src={FoundationBg} />

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

export default Foundation