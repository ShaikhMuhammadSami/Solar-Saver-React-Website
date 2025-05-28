import { useRef, useState } from 'react';
import worldMap from '../assets/map-img1.webp';
import myLocation from '../assets/my-location.png';
import { motion } from 'framer-motion';

const MapAndLocation = () => {
  const image = useRef(null);
  const [initialImg, changedImg] = useState(worldMap);
  const [activeBtn, setActiveBtn] = useState('worldMap'); // NEW STATE

  function changeImg(e) {
    const buttonType = e.target.getAttribute('data-btn');
    setActiveBtn(buttonType); // update active button state

    if (buttonType === 'myLocation') {
      changedImg(myLocation);
      image.current.classList.add(
        'w-[90%]',
        'sm:w-[80%]',
        'h-[35vh]',
        'sm:h-[45vh]',
        'lg:min-h-[60vh]',
        'rounded-xl'
      );
    } else if (buttonType === 'worldMap') {
      changedImg(worldMap);
      image.current.classList.remove(
        'w-[90%]',
        'sm:w-[80%]',
        'h-[35vh]',
        'sm:h-[45vh]',
        'lg:min-h-[60vh]',
        'rounded-xl'
      );
    }
  }

  return (
    <motion.div
      className='my-20 will-change-transform'
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div>
        <h2 className='text-center text-white mb-10 text-[34px] font-bold leading-12 sm:text-5xl lg:text-6xl' id='stretch'>
          <span className='text-[#eb7f25]'>WE'VE</span> GOT YOU COVERED
        </h2>
        <p className='w-[90%] sm:w-[80%] m-auto scale-y-110 md:text-[18px] mb-10 text-white text-center'>
          Explore solar potential in your area. See how Solar Saver can help you.
        </p>
      </div>

      <div className='text-center text-white'>
        <div className='w-fit m-auto border border-[#eb7f25] p-2 flex gap-2 px-3 sm:px-6 rounded-xl mb-20'>
          <button
            className={`p-2 rounded-xl px-3 active:scale-90 transition duration-200 ${activeBtn === 'worldMap' ? 'bg-[#eb7f25]' : ''}`}
            data-btn="worldMap"
            onClick={changeImg}
          >
            FULL INSTALL
          </button>
          <button
            className={`p-2 rounded-xl px-5 active:scale-90 transition duration-200 ${activeBtn === 'myLocation' ? 'bg-[#eb7f25]' : ''}`}
            data-btn="myLocation"
            onClick={changeImg}
          >
            MAP
          </button>
        </div>

        <div className='flex justify-center items-center'>
          <img ref={image} src={initialImg} alt="World Map" />
        </div>
      </div>
    </motion.div>
  );
};

export default MapAndLocation;

