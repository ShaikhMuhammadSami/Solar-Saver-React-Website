import { useEffect, useRef } from 'react';
import worldMap from '../assets/map-img1.webp' 
import myLocation from '../assets/my-location.png';
import { motion } from 'framer-motion';


const MapAndLocation = () => {

    const worldMapImg = useRef(null);
    const myCurrLocaton = useRef(null);
    const fullInstallBtn = useRef(null);
    const mapBtn = useRef(null);

    useEffect(() => {

        function changeImg(e){
            let mapButton = mapBtn.current;

            if(e.target === mapButton){
                myCurrLocaton.current.classList.remove('hidden');           
                worldMapImg.current.classList.add('hidden');
                fullInstallBtn.current.classList.remove('bg-[#eb7f25]')
                mapBtn.current.classList.add('bg-[#eb7f25]');
            }
            else if(e.target === fullInstallBtn.current){
                myCurrLocaton.current.classList.add('hidden');           
                worldMapImg.current.classList.remove('hidden');
                fullInstallBtn.current.classList.add('bg-[#eb7f25]')
                mapBtn.current.classList.remove('bg-[#eb7f25]');
            }
        }

        mapBtn.current.addEventListener("click", changeImg);
        fullInstallBtn.current.addEventListener("click", changeImg);


    },[]);

  return (
    <motion.div className='my-20 will-change-transform '
        initial={{ opacity: 0, y: 100, scale: 0.80 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
        <div>
            <h2 className='text-center text-white mb-10 text-[34px] font-bold leading-12 sm:text-5xl lg:text-6xl' id='stretch'><span className='text-[#eb7f25]'>WE'VE</span> GOT YOU COVERED</h2>
            <p className='w-[90%] sm:w-[80%] m-auto scale-y-110 md:text-[18px] mb-10 text-white text-center'>Explore solar potential in your area. See how Solar Saver can help you.</p>
        </div>
        <div className='text-center text-white'>
            <div className='w-fit m-auto border border-[#eb7f25] p-2 flex gap-2 px-3 sm:px-6 rounded-xl mb-20'>
                <button className='bg-[#eb7f25] p-2 rounded-xl px-3 active:scale-90 transition duration-200' ref={fullInstallBtn}>FULL INSTALL</button>
                <button className='p-2 rounded-xl px-5 active:scale-90 transition duration-200' ref={mapBtn}>MAP</button>
            </div>
            <div className='flex justify-center items-center'>
                <img className='' src={worldMap} alt="World Map" ref={worldMapImg} />
                <img className='w-[90%] sm:w-[80%] h-[35vh] sm:h-[45vh] lg:min-h-[60vh] rounded-xl hidden' src={myLocation} alt="World Map" ref={myCurrLocaton} />
            </div>
        </div>
    </motion.div>
  )
}

export default MapAndLocation
