import { useState } from 'react'
import Navbar from './componants/Navbar'
import HeroSection from './componants/HeroSection'
import Pricing from './componants/Pricing'
import AboutUs from './componants/AboutUs'
import Utilization from './componants/Utilization'
import Tools from './componants/Tools'
import BeforeAndAfter from './componants/BeforeAndAfter'
import Equipment from './componants/Equipment'
import MapAndLocation from './componants/MapAndLocation'
import Steps from './componants/Steps'
import Testimonials from './componants/TestimonialsSec'
import FaqSec from './componants/FaqSec'
import ReadyToStart from './componants/ReadyToStart'
import Footer from './componants/Footer'


function App() {

  return (
    <div className='bg-[#231f1b]'>
      <Navbar />
      <HeroSection />
      <Pricing />
      <AboutUs />
      <Utilization />
      <Tools />
      <BeforeAndAfter />
      <Equipment />
      <MapAndLocation />
      <Steps />
      <Testimonials />
      <FaqSec />
      <ReadyToStart /> 
      <Footer />
    </div>
  )
}

export default App
