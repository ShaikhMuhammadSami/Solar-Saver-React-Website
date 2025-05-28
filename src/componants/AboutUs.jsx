import React from 'react'
import aboutUsImage from '../assets/aboutImg.webp';
import { motion } from 'framer-motion';


const AboutUs = () => {
  return (
    <div className='w-[90%] m-auto relative mb-32' id='aboutUs'>
        <div className='lg:flex lg:justify-center lg:items-center'>
            <motion.div className='text-white flex flex-col gap-5 lg:w-[40%] will-change-transform overflow-x-auto'
            initial={{ opacity: 0, y: 100, scale: 0.80 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <p className='text-[#eb7f25] text-2xl'>About Us</p>
                <h2 className='text-4xl font-bold scale-y-150 mb-5 lg:text-6xl'>SOLAR SAVER</h2>
                <p className='text-[#918f8d]'>Solar Saver is revolutionizing the solar industry by offering the most cost-effective solar solutions in America.
                    We specialize in providing transparent, instant pricing for solar installations. With an innovative AI quoting engine,
                    they ensure personalized and accurate estimates for each customer.
                </p>
                <p className='text-[#eb7f25]'>Solar Saver also offers innovative battery solutions and flexible financing options, making solar energy more accessible and affordable.</p>
            </motion.div>
            <motion.div className='w-[90%] mt-10 m-auto lg:w-[60%] will-change-transform'
            initial={{ opacity: 0, y: 100, scale: 0.70 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <img className=' m-auto md:w-[100%] lg:w-[90%]' src={aboutUsImage} alt="Solar Image" />
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUs
