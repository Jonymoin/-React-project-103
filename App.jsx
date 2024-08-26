import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { BrowserRouter, Routes , Route } from "react-router-dom";



import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Photoslider from './Components/Photoslider'
import Pricing from './Components/Pricing'
import Video from './Components/Video'

import Mapf from './Components/Mapf'
import Footer from './Components/Footer'



const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      
      
      
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Photoslider />
      <Pricing />
      <Video />
      <Mapf />
      <Footer />
      
    </BrowserRouter>
  )
}

export default App