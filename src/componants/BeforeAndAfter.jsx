import beforeImg from '../assets/before-after.webp';
import afterImg from '../assets/after-slider.webp';
import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const BeforeAndAfter = () => {


  return (
    <motion.div className='my-32 w-[90%] m-auto text-white text-center will-change-transform' id='beforeAndAfter'
        initial={{ opacity: 0, y: 100, scale: 0.80 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}>
        <div>
            <h2 className='text-center text-white mb-10 text-[34px] font-bold leading-10 sm:text-5xl lg:text-6xl' id='stretch'><span className='text-[#eb7f25]'>BEFORE</span> & AFTER</h2>
            <p className='sm:w-[70%] m-auto'>There are countless success stories of Solar Saver transformations,
                but the majority showcase significant improvements in energy efficiency and cost savings.
            </p>
        </div>  
        <div className='mt-20 lg:w-[70%] m-auto'>
            <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={beforeImg} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={afterImg} alt="Image two" />}
            />  
        </div>      
    </motion.div>
    )
}

export default BeforeAndAfter