import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './pages/Cart/Cart';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import User from './pages/Auth/User';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import About from './components/About/About';
import Products from './pages/Products/Products';
import Foundation from './pages/ProductsCategories/Foundation/Foundation';
import CompactPower from './pages/ProductsCategories/CompactPower/CompactPower';
import GGCompactPowder from './pages/ProductsCategories/CompactPower/GGCompactPowder';
import MsAsamLightfoundation from './pages/ProductsCategories/Foundation/MsAsamLightfoundation';
import N7LightFoundation from './pages/ProductsCategories/Foundation/N7LightFoundation';
import ICanLightFoundation from './pages/ProductsCategories/Foundation/ICanLightFoundation';
import HudabeautyMediumFoundation from './pages/ProductsCategories/Foundation/HudabeautyMediumFoundation';
import RareBeautyMediumFoundation from './pages/ProductsCategories/Foundation/RareBeautyMediumFoundation';
import MarsMediumFoundation from './pages/ProductsCategories/Foundation/MarsMediumFoundation';
import BaimsDarkFoundation from './pages/ProductsCategories/Foundation/BaimsDarkFoundation';
import MarsDarkFoundation from './pages/ProductsCategories/Foundation/MarsDarkFoundation';
import GodSDarkFoundation from './pages/ProductsCategories/Foundation/GodSDarkFoundation';
import CamelCompactpowder from './pages/ProductsCategories/CompactPower/CamelCompactpowder';
import ChanelCompactPowder from './pages/ProductsCategories/CompactPower/ChanelCompactPowder';
import ChanelGlossyCompact from './pages/ProductsCategories/CompactPower/ChanelGlossyCompact';
import ChanelCompactPowder2 from './pages/ProductsCategories/CompactPower/ChanelCompactPowder2';
import PatrickTaCompactPowder from './pages/ProductsCategories/CompactPower/PatrickTaCompactPowder';
import ChanelCompactPowder3 from './pages/ProductsCategories/CompactPower/ChanelCompactPowder3';
import LamerCompactPowder from './pages/ProductsCategories/CompactPower/LamerCompactPowder';
import ChanelCompactPowder4 from './pages/ProductsCategories/CompactPower/ChanelCompactPowder4';
import FentyBeautylipstick from './pages/ProductsCategories/Lipstick/FentyBeautylipstick';
import Lipstick from './pages/ProductsCategories/Lipstick/Lipstick';
import Smachboxlipstick from './pages/ProductsCategories/Lipstick/Smachboxlipstick';
import Naslipstick from './pages/ProductsCategories/Lipstick/Naslipstick';
import GGNudeshadelipstick from './pages/ProductsCategories/Lipstick/GGNudeshadelipstick';
import ChanelNudeshadeLipstick from './pages/ProductsCategories/Lipstick/ChanelNudeshadeLipstick';
import PatrickTaNudeShade from './pages/ProductsCategories/Lipstick/PatrickTaNudeShade';
import GCDarkRedshadelipstick from './pages/ProductsCategories/Lipstick/GCDarkRedshadelipstick';
import Laminalightredshade from './pages/ProductsCategories/Lipstick/Laminalightredshade';
import ChanelRoyaredLipstick from './pages/ProductsCategories/Lipstick/ChanelRoyaredLipstick';
import Mascara from './pages/ProductsCategories/Mascara/Mascara';
import MaybellineSkyHighMascara from './pages/ProductsCategories/Mascara/MaybellineSkyHighMascara';
import MaybellineLashSensaMascara from './pages/ProductsCategories/Mascara/MaybellineLashSensaMascara';
import GucciMascara from './pages/ProductsCategories/Mascara/GucciMascara';
import ClearToneMascara from './pages/ProductsCategories/Mascara/ClearToneMascara';
import RareBeautMascara from './pages/ProductsCategories/Mascara/RareBeautMascara';
import GucciMascara2 from './pages/ProductsCategories/Mascara/GucciMascara2';
import MarsMascara from './pages/ProductsCategories/Mascara/MarsMascara';
import DiorMascara from './pages/ProductsCategories/Mascara/DiorMascara';
import IliaMascara from './pages/ProductsCategories/Mascara/IliaMascara';
import Concealer from './pages/ProductsCategories/Concealer/Concealer';
import EsteeLauderConcealer from './pages/ProductsCategories/Concealer/EsteeLauderConcealer';
import CharlotteTilburyConcealer from './pages/ProductsCategories/Concealer/CharlotteTilburyConcealer';
import MaybellineConcealer from './pages/ProductsCategories/Concealer/MaybellineConcealer';
import FentyBeautConcealer from './pages/ProductsCategories/Concealer/FentyBeautConcealer';
import ShiseidoConcealer from './pages/ProductsCategories/Concealer/ShiseidoConcealer';
import TarteCocealer from './pages/ProductsCategories/Concealer/TarteCocealer';
import NYXDoubleStickConcealer from './pages/ProductsCategories/Concealer/NYXDoubleStickConcealer';
import MaybellineLightConcealer from './pages/ProductsCategories/Concealer/MaybellineLightConcealer';
import SaieCoceale from './pages/ProductsCategories/Concealer/SaieCoceale';
import Eyeliner from './pages/ProductsCategories/Eyeliner/Eyeliner';
import PrettyEyesEyeliner from './pages/ProductsCategories/Eyeliner/PrettyEyesEyeliner';
import MarsEyeliner from './pages/ProductsCategories/Eyeliner/MarsEyeliner';
import MaybellineColossal from './pages/ProductsCategories/Eyeliner/MaybellineColossal';
import GelEyelinerRedEyelinerBg from './pages/ProductsCategories/Eyeliner/GelEyelinerRedEyelinerBg';
import GelEyelinerSilverEyelinerBg from './pages/ProductsCategories/Eyeliner/GelEyelinerSilverEyelinerBg';
import KikoBlueEyeliner from './pages/ProductsCategories/Eyeliner/KikoBlueEyeliner';
import PudaierYellowEyeliner from './pages/ProductsCategories/Eyeliner/PudaierYellowEyeliner';
import PrettyEyeBlackGelEyeliner from './pages/ProductsCategories/Eyeliner/PrettyEyeBlackGelEyeliner';
import ExtendedGlitterBlackEyeliner from './pages/ProductsCategories/Eyeliner/ExtendedGlitterBlackEyeliner';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />


          <Route path="/foundation" element={<Foundation />} /> 
          
          <Route path="/MsAsamLightfoundation" element={<MsAsamLightfoundation />} />
          <Route path="/N7LightFoundation" element={<N7LightFoundation />} />
          <Route path="/ICanLightFoundation" element={<ICanLightFoundation />} />
          <Route path="/HudabeautyMediumFoundation" element={<HudabeautyMediumFoundation />} />
          <Route path="/RareBeautyMediumFoundation" element={<RareBeautyMediumFoundation />} />
          <Route path="/MarsMediumFoundation" element={<MarsMediumFoundation />} />
          <Route path="/BaimsDarkFoundation" element={<BaimsDarkFoundation />} />
          <Route path="/MarsDarkFoundation" element={<MarsDarkFoundation />} />
          <Route path="/GodSDarkFoundation" element={<GodSDarkFoundation />} />


        <Route path="/compactpower" element={<CompactPower />} />

        <Route path="/GGCompactPowder" element={<GGCompactPowder />} />
        <Route path="/CamelCompactpowder" element={<CamelCompactpowder />} />
        <Route path="/ChanelCompactPowder" element={<ChanelCompactPowder />} />
        <Route path="/ChanelGlossyCompact" element={<ChanelGlossyCompact />} />
        <Route path="/ChanelCompactPowder2" element={<ChanelCompactPowder2 />} />
        <Route path="/PatrickTaCompactPowder" element={<PatrickTaCompactPowder />} />
        <Route path="/ChanelCompactPowder3" element={<ChanelCompactPowder3 />} />
        <Route path="/LamerCompactPowder" element={<LamerCompactPowder />} />
        <Route path="/ChanelCompactPowder4" element={<ChanelCompactPowder4 />} />


        <Route path="/lipstick" element={<Lipstick />} />

        <Route path="/FentyBeautylipstick" element={<FentyBeautylipstick />} />
        <Route path="/Smachboxlipstick" element={<Smachboxlipstick />} />
        <Route path="/Naslipstick" element={<Naslipstick />} />
        <Route path="/GGNudeshadelipstick" element={<GGNudeshadelipstick />} />
        <Route path="/ChanelNudeshadeLipstick" element={<ChanelNudeshadeLipstick />} />
        <Route path="/PatrickTaNudeShade" element={<PatrickTaNudeShade />} />
        <Route path="/GCDarkRedshadelipstick" element={<GCDarkRedshadelipstick />} />
        <Route path="/Laminalightredshade" element={<Laminalightredshade />} />
        <Route path="/ChanelRoyaredLipstick" element={<ChanelRoyaredLipstick />} />


        <Route path="/mascara" element={<Mascara />} />

        <Route path="/MaybellineSkyHighMascara" element={<MaybellineSkyHighMascara />} />
        <Route path="/MaybellineLashSensaMascara" element={<MaybellineLashSensaMascara />} />
        <Route path="/GucciMascara" element={<GucciMascara />} />
        <Route path="/ClearToneMascara" element={<ClearToneMascara />} />
        <Route path="/RareBeautMascara" element={<RareBeautMascara />} />
        <Route path="/GucciMascara2" element={<GucciMascara2 />} />
        <Route path="/MarsMascara" element={<MarsMascara />} />
        <Route path="/DiorMascara" element={<DiorMascara />} />
        <Route path="/IliaMascara" element={<IliaMascara />} />


        <Route path="/concealer" element={<Concealer />} />

        <Route path="/EsteeLauderConcealer" element={<EsteeLauderConcealer />} />
        <Route path="/CharlotteTilburyConcealer" element={<CharlotteTilburyConcealer />} />
        <Route path="/MaybellineConcealer" element={<MaybellineConcealer />} />
        <Route path="/FentyBeautConcealer" element={<FentyBeautConcealer />} />
        <Route path="/ShiseidoConcealer" element={<ShiseidoConcealer />} />
        <Route path="/TarteCocealer" element={<TarteCocealer />} />
        <Route path="/NYXDoubleStickConcealer" element={<NYXDoubleStickConcealer />} />
        <Route path="/MaybellineLightConcealer" element={<MaybellineLightConcealer />} />
        <Route path="/SaieCoceale" element={<SaieCoceale />} />


        <Route path="/eyeliner" element={<Eyeliner />} />

        <Route path="/PrettyEyesEyeliner" element={<PrettyEyesEyeliner />} />
        <Route path="/MarsEyeliner" element={<MarsEyeliner />} />
        <Route path="/MaybellineColossal" element={<MaybellineColossal />} />
        <Route path="/GelEyelinerRedEyelinerBg" element={<GelEyelinerRedEyelinerBg />} />
        <Route path="/GelEyelinerSilverEyelinerBg" element={<GelEyelinerSilverEyelinerBg />} />
        <Route path="/KikoBlueEyeliner" element={<KikoBlueEyeliner />} />
        <Route path="/PudaierYellowEyeliner" element={<PudaierYellowEyeliner />} />
        <Route path="/PrettyEyeBlackGelEyeliner" element={<PrettyEyeBlackGelEyeliner />} />
        <Route path="/ExtendedGlitterBlackEyeliner" element={<ExtendedGlitterBlackEyeliner />} />
        

        <Route path="/cart" element={<CartPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;