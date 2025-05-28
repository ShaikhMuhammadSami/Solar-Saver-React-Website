import React from 'react'
import houseImg from '../assets/home.svg'
import { motion } from 'framer-motion';


const Card = (props) => {
    
  return (
    <>
        <motion.div id='price' className='mt-5 bg-[black] p-10 w-[90%] sm:w-[45%] sm:h-[480px] md:h-[450px] lg:w-[30%] lg:h-[460px] m-auto rounded-xl will-change-transform'
        initial={{ opacity: 0, y: 100, scale: 0.80 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            <div className='text-white flex flex-col gap-5'>
                <div className='w-fit p-5 rounded-full bg-[#eb7f25]'>
                    <img src={houseImg} alt="House image" />
                </div>
                <div>
                    <h2 className='text-2xl sm:text-3xl text-[#eb7f25] font-bold'>{props.heading1} <span className='text-white'>{props.heading2}</span></h2>
                    <p className='mt-5 font-semibold sm:text-[18px]'>{props.desc}</p>
                    <p className='mt-5 font-semibold'>{props.price}</p>
                </div>
                <button className='active:scale-75 bg-[#eb7f25] w-fit p-2 px-8 rounded-xl text-white hover:bg-white hover:text-[#eb7f25] cursor-pointer transition duration-500 ease-in-out'>
                    Calculate Solar
                </button>
            </div>
        </motion.div>
    </>
  )
}

export default Card
