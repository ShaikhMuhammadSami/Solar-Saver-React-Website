import React from 'react'
import logo from '../assets/logo.png';
import insta from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import { motion } from 'framer-motion';



const Footer = () => {
  return (
    <motion.div className='mt-20'
    initial={{ opacity: 0, y: 100, scale: 0.80 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className='m-auto w-[90%]'>
        <img className='h-20 m-auto mb-5 lg:h-40' src={logo} alt="Website Logo" />
        <ul className='flex flex-wrap gap-5 lg:gap-10 justify-center items-center pb-8 border-b-2 border-gray-500'>
            <li><a className='text-white sm:text-xl lg:text-2xl' href="#">Pricing</a></li>
            <li><a className='text-white sm:text-xl lg:text-2xl' href="#">About</a></li>
            <li><a className='text-white sm:text-xl lg:text-2xl' href="#">Tool</a></li>
            <li><a className='text-white sm:text-xl lg:text-2xl' href="#">How it Works</a></li>
            <li><a className='text-white sm:text-xl lg:text-2xl' href="#">Testimonials</a></li>
            <li><a className='text-white sm:text-xl lg:text-2xl' href="#">FAQ</a></li>
        </ul>
      </div>
      <div className='w-[90%] m-auto my-8 flex justify-center flex-col gap-8 items-center'>
        <p className='text-white sm:text-xl md:text-2xl'>© 2024 Solar Saver. All rights reserved.</p>
        <div className='flex items-center gap-5'>
            <img className='sm:h-10 md:h-16' src={insta} alt="Insta Img" />
            <img className='sm:h-10 md:h-16' src={twitter} alt="Twitter Img" />
            <img className='sm:h-10 md:h-16' src={facebook} alt="FaceBook Img" />
        </div>
      </div>
        <p className='text-center text-white sm:text-xl md:text-2xl mb-10'>Developed by <span className='text-[#eb7f25]'>MUHAMMAD SAMI</span></p>
    </motion.div>
  )
}

export default Footer
