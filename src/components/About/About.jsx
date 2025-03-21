import React from 'react'
import AboutBg from '../../assets/AboutBg.svg'
import AboutBg1 from '../../assets/AboutBg1.svg'

const About = () => {
  return (
    <div>
      <img className="lg:w-[100%] lg:h-[800px] object-cover" src={AboutBg} />

      <img className="w-[100%] h-[2289px] object-cover backdrop-blur-[2px]" src={AboutBg1} />

      <div className='absolute bottom-0 top-220 text-center'>

        <div className="ml-20 w-[1308px] h-[82px] justify-start text-white text-[42px] font-semibold font-['Akshar']">Welcome to Worthy Skin – Beauty That Loves You Back!<br/><br/></div>

        <div className="pl-10 w-[1331px] justify-start text-white text-[25px] font-semibold font-['Akatab']">At Worthy Skin, we believe that every skin is unique, every tone is beautiful, and every individual is worthy of self-love. Our mission is to empower you with high-quality, skin-friendly cosmetics that enhance your natural beauty while nourishing your skin.</div>

        <br />

        <div className="ml-70  w-[886px] h-[82px] justify-start text-white text-[42px] font-semibold font-['Akshar']">Our Philosophy: Beauty with Purpose 💖</div>

        <div className="pl-10 w-[1331px] justify-start text-white text-[25px] font-semibold font-['Akatab']">We are more than just a cosmetic brand—we are a movement that celebrates inclusivity, confidence, and self-expression. Whether you love a bold, glamorous look or a fresh, natural glow, our products designed to bring out the best in you.</div>

        <br />

        <div className="ml-100 w-[633px] h-[82px] justify-start text-white text-[42px] font-semibold font-['Akshar']">What Makes Us Different? ✨</div>

        <div className="pl-10 w-[1331px] justify-start text-white text-[25px] font-semibold font-['Akatab']">🌿 Skin-Loving Formulas: Our products are infused with nourishing ingredients that care for your skin while making you look stunning. No harsh chemicals—just pure goodness.<br/><br/>🧑‍🔬 Innovation Meets Beauty: From virtual lipstick shade matching to AI-powered foundation selection, we blend technology and beauty to give you a personalized experience like never before.<br/><br/>🌍 Cruelty-Free & Ethical: Beauty should be kind—to you and the planet. Our products are cruelty-free, vegan-friendly, and made with sustainable ingredients.<br/><br/>🎨 For Every Shade, Every Skin Type: Our diverse range of products is designed to complement all skin tones and textures, because beauty is for everyone.</div>


        <br />

        <div className="ml-80 w-[776px] h-[82px] justify-start text-white text-[42px] font-semibold font-['Akshar']">Join the Worthy Skin Revolution! 🚀</div>

        <div className="pl-10 w-[1331px] justify-start text-white text-[25px] font-semibold font-['Akatab']">We are here to redefine beauty—one product at a time. With high-performance formulas, inclusive shades, and skin-loving ingredients, Worthy Skin is more than makeup—it’s self-care, confidence, and empowerment in a bottle.<br/></div>


        <br />


        <div className="ml-80 w-[776px] h-[82px] justify-start text-white text-[54px] font-bold font-['Akatab']">Because You Are Worthy💖</div>
        
      </div>

    </div>
  )
}

export default About