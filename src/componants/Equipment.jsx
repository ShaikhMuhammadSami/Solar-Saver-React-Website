import React from 'react';
import houseImg from '../assets/home.svg';
import { motion } from 'framer-motion';

const Equipment = () => {
  return (
    <motion.div className='mt-10 will-change-transform'
        initial={{ opacity: 0, y: 100, scale: 0.80 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}>

        <div className='my-32 w-[90%] m-auto text-white text-center'>
            <div>
                <h2 className='text-center text-white mb-10 text-[34px] font-bold leading-12 sm:text-5xl lg:text-6xl' id='stretch'><span className='text-[#eb7f25]'>BEST</span> EQUIPMENT IN THE INDUSTRY</h2>
                <p className='sm:w-[80%] m-auto scale-y-110 md:text-[18px] mb-10'>Solar Saver uses the highest quality solar panels and inverters. Trust our cutting-edge
                    technology for superior performance and durability.
                </p>
            </div>
            <div className='grid gap-5 md:grid-cols-3'>
                <div className='flex flex-col bg-black p-5 text-center rounded-xl py-10'>
                    <img className='w-[100px] m-auto' src={houseImg} alt="House Image" />
                    <p className='text-2xl font-bold my-5'>PANELS</p>
                    <p className='scale-y-125'>Solar Saver offers industry-leading solar panels. Experience unparalleled efficiency and durability with our advanced technology.</p>
                </div>
                <div className='flex flex-col bg-black p-5 text-center rounded-xl py-10'>
                    <img className='w-[100px] m-auto' src={houseImg} alt="House Image" />
                    <p className='text-2xl font-bold my-5'>INVERTERS</p>
                    <p className='scale-y-125'>Solar Saver supplies high-performance inverters. Our inverters ensure maximum energy conversion and system reliability.</p>
                </div>
                <div className='flex flex-col bg-black p-5 text-center rounded-xl py-10'>
                    <img className='w-[100px] m-auto' src={houseImg} alt="House Image" />
                    <p className='text-2xl font-bold my-5'>BATTERIES</p>
                    <p className='scale-y-125'>Solar Saver provides state-of-the-art batteries. Enjoy consistent and long lasting energy storage with our premium solutions.</p>
                </div>
            </div>     
        </div>
    </motion.div>
  )
}

export default Equipment
