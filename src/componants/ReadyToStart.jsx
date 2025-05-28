import React from 'react'
import { motion } from 'framer-motion';

const ReadyToStart = () => {
  return (
    <motion.div className='mt-16' id="readyToStart"
    initial={{ opacity: 0, y: 100, scale: 0.80 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className='flex justify-center items-center flex-col h-full'>
        <h2 className='text-3xl scale-y-150 font-bold mb-3 md:text-6xl'>READY TO START?</h2>
        <p className='w-[70%] text-white text-center md:w-[50%] md:text-xl font-bold md:mt-4'>Our solar power experts will help you find the perfect solution for your home.</p>
        <button className='scale-100 bg-[#eb7f25] mt-10 p-2 px-8 rounded-xl text-white hover:bg-white hover:text-[#eb7f25] cursor-pointer transition duration-500 ease-in-out'>
            Calculate Solar
        </button>
      </div>
    </motion.div>
  )
}

export default ReadyToStart
