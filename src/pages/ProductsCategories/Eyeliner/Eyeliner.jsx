import React, { useState } from 'react'
import EyelinerBg from '../../../assets/Eyeliner/EyelinerBg.svg'
import PrettyEyesEyeliner from '../../../assets/Eyeliner/PrettyEyesEyeliner.svg'
import MarsEyeliner from '../../../assets/Eyeliner/MarsEyeliner.svg'
import MaybellineColossal from '../../../assets/Eyeliner/MaybellineColossal.svg'
import GelEyelinerRedEyelinerBg from '../../../assets/Eyeliner/GelEyelinerRed.svg'
import GelEyelinerSilverEyelinerBg from '../../../assets/Eyeliner/GelEyelinerSilver.svg'
import KikoBlueEyeliner from '../../../assets/Eyeliner/KikoBlueEyeliner.svg'
import PudaierYellowEyeliner from '../../../assets/Eyeliner/PudaierYellowEyeliner.svg'
import PrettyEyeBlackGelEyeliner from '../../../assets/Eyeliner/PrettyEyeBlackGelEyeliner.svg'
import ExtendedGlitterBlackEyeliner from '../../../assets/Eyeliner/ExtendedGlitterBlackEyeliner.svg'
import ProductsList from '../ProductsList';

const Eyeliner = () => {
    const [products] = useState([
      {
        id: 1,
        name: "PrettyEyesEyeliner",
        price: "250",
        image: PrettyEyesEyeliner,
        link: '/PrettyEyesEyeliner',
      },
      {
        id: 2,
        name: "MarsEyeliner",
        price: "250",
        image: MarsEyeliner,
        link: '/MarsEyeliner',
      },
      {
        id: 3,
        name: "MaybellineColossal",
        price: "1500",
        image: MaybellineColossal,
        link: '/MaybellineColossal',
      },
      {
        id: 4,
        name: "GelEyelinerRedEyelinerBg",
        price: "250",
        image: GelEyelinerRedEyelinerBg,
        link: '/GelEyelinerRedEyelinerBg',
      },
      {
        id: 5,
        name: "GelEyelinerSilverEyelinerBg",
        price: "250",
        image: GelEyelinerSilverEyelinerBg,
        link: '/GelEyelinerSilverEyelinerBg',
      },
      {
        id: 6,
        name: "KikoBlueEyeliner",
        price: "1500",
        image: KikoBlueEyeliner,
        link: '/KikoBlueEyeliner',
      },
      {
        id: 7,
        name: "PudaierYellowEyeliner",
        price: "250",
        image: PudaierYellowEyeliner,
        link: '/PudaierYellowEyeliner',
      },
      {
        id: 8,
        name: "PrettyEyeBlackGelEyeliner",
        price: "250",
        image: PrettyEyeBlackGelEyeliner,
        link: '/PrettyEyeBlackGelEyeliner',
      },
      {
        id: 9,
        name: "ExtendedGlitterBlackEyeliner",
        price: "1500",
        image: ExtendedGlitterBlackEyeliner,
        link: '/ExtendedGlitterBlackEyeliner',
      },
      ]);

  return (
    <div>
        <img className="w-[100%] h-[800px] object-cover" src={EyelinerBg} />

        <div className='absolute bottom-25 p-30'>
          <div className="w-[591px] justify-start text-black text-[70px] font-light font-['Akatab']">Define, Wing, Slay!</div>
          <div className="w-[518px] h-[175px] justify-start text-white text-3xl font-semibold font-['Akatab']">Elevate your eye game with our precision-perfect eyeliner! Whether you’re going for a bold cat-eye, a sleek wing, or a soft, smudged look, our eyeliner glides on effortlessly for intense, all-day wear</div>
        </div>

        <div className='pl-5 bg-[#f7a672] p-6'>
            <h1 className="mt-5 w-full h-[32.45px] justify-start text-black text-[35px] font-normal font-['Akatab']">OUR HIGHLIGHTER PRODUCTS</h1>

            <ProductsList data={products} />
        </div>
    </div>
  )
}

export default Eyeliner