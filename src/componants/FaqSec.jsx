import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';


const FaqSec = () => {

    const plus1 = useRef(null);
    const plus2 = useRef(null);
    const plus3 = useRef(null);
    const plus4 = useRef(null);
    const para1 = useRef(null);
    const para2 = useRef(null);
    const para3 = useRef(null);
    const para4 = useRef(null);
    const minus1 = useRef(null);
    const minus2 = useRef(null);
    const minus3 = useRef(null);
    const minus4 = useRef(null);

    useEffect(() => {

        function showPara(e){
            if(e.target === plus1.current){
                para1.current.classList.remove('hidden');
                plus1.current.setAttribute('id','minus');
                minus1.current.removeAttribute("id");
            }else if(e.target === plus2.current){
                para2.current.classList.remove('hidden');
                plus2.current.setAttribute('id','minus');
                minus2.current.removeAttribute("id");
            }else if(e.target === plus3.current){
                para3.current.classList.remove('hidden');
                plus3.current.setAttribute('id','minus');
                minus3.current.removeAttribute("id");
            }else if(e.target === plus4.current){
                para4.current.classList.remove('hidden');
                plus4.current.setAttribute('id','minus');
                minus4.current.removeAttribute("id");          
            }
        }

        function removePara(e){
            if(e.target === minus1.current){
                para1.current.classList.add('hidden');
                plus1.current.removeAttribute('id');
                minus1.current.setAttribute("id","minus");            
            }else if(e.target === minus2.current){
                para2.current.classList.add('hidden');
                plus2.current.removeAttribute('id');
                minus2.current.setAttribute("id","minus");            
            }else if(e.target === minus3.current){
                para3.current.classList.add('hidden');
                plus3.current.removeAttribute('id');
                minus3.current.setAttribute("id","minus");            
            }else if(e.target === minus4.current){
                para4.current.classList.add('hidden');
                plus4.current.removeAttribute('id');
                minus4.current.setAttribute("id","minus");
            }
        }

        plus1.current.addEventListener('click', showPara) 
        plus2.current.addEventListener('click', showPara) 
        plus3.current.addEventListener('click', showPara) 
        plus4.current.addEventListener('click', showPara) 
        minus1.current.addEventListener('click', removePara)
        minus2.current.addEventListener('click', removePara)
        minus3.current.addEventListener('click', removePara)
        minus4.current.addEventListener('click', removePara)

    },[])


  return (
    <motion.div className='mt-40' id='faq'
        initial={{ opacity: 0, y: 100, scale: 0.80 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className='w-[90%] sm:w-[80%] m-auto'>
        <div className='min-h-[100px] sm:min-h-[180px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[#4f4c49] font-bold scale-y-125 text-[18px] sm:text-xl md:text-2xl'>WHAT IS SOLAR ENERGY?</h2>
                < i className='bx  bx-plus text-[#eb7f25] text-3xl' ref={plus1} ></i> 
                < i className='bx  bx-minus text-[#eb7f25] text-3xl' id="minus" ref={minus1} ></i> 
            </div>
            <p className='hidden text-white text-[20px] my-10' ref={para1}>Solar panels work by capturing sunlight through photovoltaic cells, which convert the sunlight into direct 
            current (DC) electricity. An inverter then converts the DC electricity into alternating current 
            (AC) electricity for use in homes and businesses.</p>
        </div>
        <div className='min-h-[100px] sm:h-[180px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[#4f4c49] font-bold scale-y-125 text-[18px] sm:text-xl md:text-2xl'>WHAT ARE THE BENIFITS OF USING SOLAR PANELS</h2>
                < i className='bx  bx-plus text-[#eb7f25] text-3xl'  ref={plus2} ></i> 
                < i className='bx  bx-minus text-[#eb7f25] text-3xl' id="minus" ref={minus2} ></i> 
            </div>
            <p className='hidden text-white text-[20px] my-10' ref={para2}>Solar panels offer several benefits, including reducing electricity bills, decreasing carbon footprint, and providing a renewable source of energy. 
            They also have low maintenance costs and can increase property value.</p>
        </div>
        <div className='min-h-[100px] sm:h-[180px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[#4f4c49] font-bold scale-y-125 text-[18px] sm:text-xl md:text-2xl'>HOW LONG DO SOLAR PANEL LAST?</h2>
                < i className='bx  bx-plus text-[#eb7f25] text-3xl' ref={plus3}  ></i> 
                < i className='bx  bx-minus text-[#eb7f25] text-3xl' id="minus" ref={minus3}  ></i> 
            </div>
            <p className='hidden text-white text-[20px] my-10' ref={para3}>Solar panels typically have a lifespan of 25 to 30 years. However, their efficiency may decrease slightly over time.
                 Most manufacturers offer warranties that guarantee performance for 20-25 years.</p>
        </div>
        <div className='min-h-[100px] sm:h-[180px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[#4f4c49] font-bold scale-y-125 text-[18px] sm:text-xl md:text-2xl'>WHAT MAINTENANCE DO SOLAR PANELS REQUIRE?</h2>
                < i className='bx  bx-plus text-[#eb7f25] text-3xl'  ref={plus4} ></i> 
                < i className='bx  bx-minus text-[#eb7f25] text-3xl ' id="minus" ref={minus4} ></i> 
            </div>
            <p className='hidden text-white text-[20px] my-10' ref={para4}>Solar panels require minimal maintenance. It is recommended to clean them a few times a year to ensure they are free of debris and dust.
             Regular inspections can help identify and address any potential issues early.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default FaqSec
