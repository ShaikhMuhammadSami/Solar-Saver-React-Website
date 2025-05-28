import testimonialsImg1 from '../assets/testimonials1.webp'
import testimonialsImg2 from '../assets/testimonials2.webp'
import quoteImg from '../assets/quote.svg'
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState} from 'react';
import rightArrow from '../assets/rightArrow.svg';
import leftArrow from '../assets/leftArrow.svg';


const TestimonialsSec = () => {

  const [text, updatedText] = useState('John Doe');
  const backArr = useRef(null);
  const forwardArr = useRef(null);
  const para1 = useRef(null)
  const para2 = useRef(null)
  const image1 = useRef(null)
  const image2 = useRef(null)
  const image3 = useRef(null)
  const image4 = useRef(null)

  useEffect(() => {
    function changeImage(e){
      if(e.target === forwardArr.current){
        para1.current.classList.add('hidden');
        para2.current.classList.remove('hidden');
        image1.current.classList.add('hidden');
        image3.current.classList.add('hidden');
        image2.current.classList.remove('hidden');
        image4.current.classList.remove('hidden');
        updatedText('Tom Davis')

      }else if(e.target === backArr.current){
        para1.current.classList.remove('hidden');
        para2.current.classList.add('hidden');
        image1.current.classList.remove('hidden');
        image3.current.classList.remove('hidden');
        image2.current.classList.add('hidden');
        image4.current.classList.add('hidden');
        updatedText('John Doe')
      }
    }

    backArr.current.addEventListener('click', changeImage)
    forwardArr.current.addEventListener('click', changeImage)
  },[])
  
  
  return (
    <motion.div className='w-[90%] xl:w-[80%] m-auto md:flex md:gap-10 lg:gap-32' id="testimonialsSec"
    initial={{ opacity: 0, y: 100, scale: 0.80 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className='w-[90%] lg:w-[50%] m-auto'>
        <img className='w-full lg:w-[90%]' src={testimonialsImg1} alt="Man Image" ref={image1} />
        {/* Hidden Image */}
        <img className='hidden rounded-xl w-full lg:w-[80%]' src={testimonialsImg2} alt="Man Image" ref={image2} />
        {/* Hidden Image */}
      </div>
      <div className='mt-10 w-[90%] m-auto lg:w-[60%]'>
        <div className='text-white'>
          <img className='mb-10' src={quoteImg} alt="Quots Image" />
          <h2 className='text-xl font-bold scale-y-125 md:text-2xl' ref={para1}>SOLAR SAVER EXCEEDED MY EXPECTATIONS IN EVERY WAY. FROM THE INITIAL CONSULTATION TO THE FINAL INSTALLATION, 
            THEIR TEAM WAS PROFESSIONAL AND EFFICIENT. THE WHOLE PROCESS WAS SEAMLESS. HIGHLY RECOMMEND!
          </h2>
          {/* Hidden Text */}
          <h2 className='hidden text-xl font-bold scale-y-125 md:text-2xl' ref={para2}>CHOOSING SOLAR SAVER WAS ONE OF THE BEST DECISIONS.
             THE INSTALLATION WAS QUICK AND HASSLE-FREE, AND THEIR CUSTOMER SERVICE WAS TOP-NOTCH. I APPRECIATE THE TRANSPARENCY AND THE SIGNIFICANT SAVINGS ON MY ENERGY COSTS. FANTASTIC EXPERIENCE!
          </h2>
          {/* Hidden Text */}

          <div className='flex gap-5 items-center mt-10'>
            <img className='h-16 w-16 xl:h-20 xl:w-20 rounded-full' id='profilePic' src={testimonialsImg1} alt="Man Image" ref={image3} />
            {/* Hidden Image */}
            <img className='hidden h-16 w-16 xl:h-20 xl:w-20 rounded-full' id='profilePic' src={testimonialsImg2} alt="Man Image" ref={image4} />
            {/* Hidden Image */}
            <p className=' text-xl'><span className='text-[#eb7f25]'>@</span> {text}</p>
          </div>
          <div className='flex gap-20 items-center mt-10 justify-center md:justify-start md:gap-10'>
            <img className='w-[50px]' src={rightArrow} ref={backArr} alt="rightArrow" />
            <img className='w-[50px]' src={leftArrow} ref={forwardArr} alt="leftArrow" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialsSec


