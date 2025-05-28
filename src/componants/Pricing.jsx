import React from 'react'
import houseImg from '../assets/home.svg'
import Card from './PricingCard'


const Pricing = () => {
    
  return (
    <div className='mt-20 mb-24 sm:mt-10 xl:w-[95%] m-auto'>
        <p className='text-white text-center text-2xl font-bold sm:text-4xl mb-24'>TRANSPARENT PRICING</p>
        <div className='sm:flex sm:flex-wrap lg:flex-nowrap'>
            <Card heading1="STANDARD" heading2="PLAN" desc="Efficient and affordable solar solutions for every Household. Perfect for Residential use." price="$1.50/watt"/>
            <Card heading1="PREMIUM" heading2="PLAN" desc="Advanced solar technology designed for maximum energy savings. Ideal for larger Homes and Estates." price="$1.75/watt"/>
            <Card  heading1="COMMERCIAL" heading2="PLAN" desc="High-capacity solar systems tailored for Businesses and Enterprises. Reliable and Robust solutions." price="$2.00/watt" />
        </div>
    </div>
  )
}

export default Pricing
