import React from 'react'
import heroSecImg from '../assets/hero-sec-img.webp';
import { motion } from 'framer-motion';

const HeroSection = () => {

    const fadeInUp ={
        initial : {opacity : 0, scale: 0.90, y: 150},
        animate : {opacity : 1, scale: 1, y: 0}
    }
    
  return (
    <div className='flex flex-col justify-center items-center text-center w-full mt-22 sm:mt-20 lg:mt-32'>
        <motion.div className='w-[90%] text-center m-auto will-change-transform'
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            variants={fadeInUp}>

            <h1 className='text-white text-2xl font-extrabold leading-[25px] md:leading-[35px] xl:leading-[50px]   sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' id='heroId'>
                <span className='text-[#eb7f25]'>DOES YOUR HOME</span> NEEDED QUALITY<br /> SOLAR PANAL INSTALLATION?
            </h1>

            <p className='text-white mt-20 font-semibold text-[18px] w-[80%] m-auto'>
                Trust our experienced solar power experts to customize the perfect solution for your home.
            </p>

            <button className='scale-100 bg-[#eb7f25] mt-10 p-2 px-8 rounded-xl text-white hover:bg-white hover:text-[#eb7f25] cursor-pointer transition duration-500 ease-in-out'>
                Calculate Solar
            </button>
        </motion.div>

        <motion.div className='w-full m-auto will-change-transform'
            initial={{ opacity: 0.3, scale: 0.9, }}
            animate="animate"
            transition={{ duration: 0.7 ,ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}>
            <img className='w-[92%] m-auto md:-mt-10 lg:-mt-20 xl:-mt-28' src={heroSecImg} alt="Solar Plate Image" />
        </motion.div>
    </div>
  )
}

export default HeroSection
