import React from 'react'
import ToolCard from './ToolCard'
import toolImg1 from '../assets/toolsImg1.svg'
import toolImg2 from '../assets/toolsImg2.svg'
import toolImg4 from '../assets/toolsImg4.svg'
import toolImg5 from '../assets/toolsImg5.svg'
import toolImg6 from '../assets/toolsImg6.svg'
import toolImg3 from '../assets/home.svg';

const Tools = () => {
  return (
    <div className='w-[90%] m-auto my-20'>
        <h1 className='text-center text-[#eb7f25] text-[34px] font-bold leading-10 sm:text-5xl lg:text-6xl' id='stretch'>SOLAR <span className='text-white'>SAVER TOOLS</span></h1>
        <p className='text-white w-[80%] m-auto my-10 md:my-16 text-center mb-20'>There are many variations of Solar Saver tools available, but the majority have suffered alteration in some form.</p>
        <div className='grid md:grid-cols-2 sm:gap-5 lg:grid-cols-3'>
            <ToolCard img={toolImg1} para1="Real-time, accurate" para2="production estimates." />    
            <ToolCard img={toolImg2} para1="Minimal training time for" para2="new sales representatives." />    
            <ToolCard img={toolImg3} para1="Homeowner-focused" para2="proposal design for clarity." />    
            <ToolCard img={toolImg4} para1="Customizable solar sales" para2="tools for each representative." />    
            <ToolCard img={toolImg5} para1="Quick and accurate" para2="solar sales proposals." />    
            <ToolCard img={toolImg6} para1="Smart management features for" para2="effective team coordination." />    
        </div>
    </div>
  )
}

export default Tools
