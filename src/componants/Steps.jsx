import React, { useEffect, useRef, useState } from 'react';
import step1 from '../assets/step1.webp';
import step2 from '../assets/step2.webp';
import step3 from '../assets/step3.webp';
import rightArrow from '../assets/rightArrow.svg';
import leftArrow from '../assets/leftArrow.svg';
import { motion } from 'framer-motion';



const Steps = () => {

    const [initialNum , updatedNum] = useState(1)
    const backArr = useRef(null);
    const forwardArr = useRef(null);
    const para1 = useRef(null)
    const para2 = useRef(null)
    const para3 = useRef(null)
    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)
    const line = useRef(null)


    useEffect(() => {
        function makeCarousel(e){
            if(e.target ===forwardArr.current){
                updatedNum(prev => {
                    const plusNum = prev === 3 ? 1 : prev + 1;
                    renderItems(plusNum)
                    return plusNum
                })
            }else if(e.target === backArr.current){
                updatedNum(prev => {
                    const minusNum = prev > 1 ? prev - 1 : 3;
                    renderItems(minusNum)
                    return minusNum 
                })
            }
        }
        forwardArr.current.addEventListener('click', makeCarousel)
        backArr.current.addEventListener('click', makeCarousel)

    },[]);

    function renderItems(num){
        console.log(num);
        if(num === 1){
            // Para
            para1.current.classList.remove('hidden')
            para2.current.classList.add('hidden')
            para3.current.classList.add('hidden')
            // Images
            image1.current.classList.remove('hidden')
            image2.current.classList.add('hidden')
            image3.current.classList.add('hidden')
            // Line
            line.current.classList.remove('w-[100%]')
            line.current.classList.remove('w-[50%]')

        }else if(num === 2){
            // Para
            para1.current.classList.add('hidden')
            para2.current.classList.remove('hidden')
            para3.current.classList.add('hidden')
            // Images
            image1.current.classList.add('hidden')
            image2.current.classList.remove('hidden')
            image3.current.classList.add('hidden')
            // Line
            line.current.classList.add('w-[50%]')
            line.current.classList.remove('w-[100%]')

        }else if(num === 3){
            // Para
            para1.current.classList.add('hidden')
            para2.current.classList.add('hidden')
            para3.current.classList.remove('hidden')
            // Images
            image1.current.classList.add('hidden')
            image2.current.classList.add('hidden')
            image3.current.classList.remove('hidden')
            // Line
            line.current.classList.add('w-[100%]')
        }
    }



  return (
    <motion.div className='mt-44 mb-36 will-change-transform '
    initial={{ opacity: 0, y: 100, scale: 0.80 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
        {/* Steps Ui Started */}
        <div className="w-[90%] m-auto md:w-[80%] bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-0 py-1" ref={line}></div>
        </div>
        {/* Steps Ui Finished */}

        {/* Work Started */}

        <div className='mt-10 w-[90%] md:w-[70%] m-auto lg:flex lg:w-[80%] lg:items-center lg:justify-between lg:gap-10'>
            <div className='lg:w-[90%] xl:w-[60%]'>
                <h2 className='text-white text-3xl font-bold scale-y-150 mb-5 lg:text-4xl'>STEP<span className='text-6xl text-[#eb7f25]'>0{initialNum}</span></h2>
                <p className='text-white lg:text-xl' ref={para1}>
                    Our team will conduct a comprehensive site assessment to evaluate your roof's condition, orientation, and shading. We use this
                    data to create a customized solar panel layout that maximizes energy production.
                </p>
                {/* Initialy Hidden para will word on click */}
                <p className='text-white lg:text-xl hidden' ref={para2}>
                    We handle all necessary permits and approvals required for your solar installation. This includes coordinating with local
                    authorities and your utility company to ensure everything is in compliance with regulations.
                </p>
                <p className='text-white lg:text-xl hidden' ref={para3}>
                    Our certified installers will set up your solar system efficiently and safely.Once installed, we conduct thorough testing
                    to ensure optimal performance. After final inspection and approval, your system is activated, and you start generating clean energy.
                </p>
                {/* Initialy Hidden para will word on click */}
            </div>

            <div>
                <div className='w-[90%] m-auto'>
                    <img className='rounded-2xl mt-16' src={step1} alt="Step 1 Image" ref={image1} />
                    {/* Initialy Hidden Images will word on click */}
                    <img className='rounded-2xl mt-16 hidden' src={step2} alt="Step 2 Image" ref={image2} />
                    <img className='rounded-2xl mt-16 hidden' src={step3} alt="Step 3 Image" ref={image3} />
                    {/* Initialy Hidden Images will word on click */}
                </div>
                <div className='flex justify-center items-center gap-10 mt-10'>
                    <img className='w-[35px] sm:w-[40px] cursor-pointer' ref={backArr} src={rightArrow} alt="Right Arrow" />
                    <img className='w-[35px] sm:w-[40px] cursor-pointer' ref={forwardArr} src={leftArrow} alt="Left Arrow" />
                </div>
            </div>

        </div>

        {/* Work End */}
    </motion.div>
  )
}

export default Steps
