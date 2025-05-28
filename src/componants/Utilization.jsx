import React from 'react'
import { motion } from 'framer-motion';


const Utilization = () => {
  return (
    <div className='mt-[120px] text-white flex flex-col gap-10 xl:flex-row xl:mb-44' id='ai-utilization'>
      <motion.div className='pt-16 w-[95%] flex flex-col gap-10 xl:gap-32 xl:w-[50%] will-change-transform'
        initial={{ opacity: 0, y: 150, scale: 0.80 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeInOut' }}>
        <div className='w-[100%] h-[80px] md:h-[120px] xl:h-[130px] flex flex-col items-end pr-5 justify-center gap-2.5' id="ai-sec-box">
          <p className='text-[16px] font-bold md:font-extrabold' id='ai-heading'>SYSTEM SIZE</p>
          <p className='text-[16px] md:font-semibold'>9.5 - 14.13 kWh*</p>
        </div>
        <div className='w-[80%] h-[80px] md:h-[120px] xl:h-[130px]  flex flex-col items-end pr-5 justify-center gap-2.5' id="ai-sec-box">
          <p className='text-[16px] font-bold md:font-extrabold' id='ai-heading'>SOLAR PANELS</p>
          <p className='text-[16px] md:font-semibold'>34 - 43*</p>
        </div>
        <div className='w-[60%] h-[80px] md:h-[120px] xl:h-[130px]  flex flex-col items-end pr-5 justify-center gap-2.5' id="ai-sec-box">
          <p className='text-[16px] font-bold md:font-extrabold' id='ai-heading' >CO2 Offset</p>
          <p className='text-[16px] md:font-semibold'>7.65 - 9.07*</p>
        </div>
      </motion.div>
      <motion.div className='w-[90%] m-auto flex flex-col xl:items-start xl:justify-end xl:w-[35%] xl:m-0 xl:gap-10 will-change-transform'
        initial={{ opacity: 0, x: 10, scale: 0.80 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeInOut' }}>

        <h2 className='text-[#eb7f25] my-10 text-[34px] font-bold md:text-5xl md:font-extrabold xl:text-[50px]' id='stretch'>AI <span className='text-white'>UTILIZATION</span></h2>
        <p className='text-[#fff] opacity-[.5]'>Solar Saver utilizes an AI quoting engine to estimate the ideal solar system size for a customer's specific needs.
          This system calculates the number of solar panels required, the potential CO2 offset, and the new, likely reduced monthly power bill. 
          <br />
          <br />
          By analyzing various factors such as roof size, local sun exposure, and current electricity usage, the AI provides atailored solution.
        </p>
        <p className='text-[#eb7f25] mt-10 mb-[120px] xl:mb-0'>This approach ensures customers get a system that maximizes energy efficiency and cost savings while contributing to environmental sustainability.</p>
      </motion.div>
    </div>
  )
}

export default Utilization
