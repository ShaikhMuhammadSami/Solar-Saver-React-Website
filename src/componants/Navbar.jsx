import { useState } from 'react';
import logoImage from '../assets/logo.png';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    
  return (
    <div>
        <div className='w-[90%] h-[80px] m-auto flex justify-between items-center text-white lg:hidden'>
            <img className='h-16 cursor-pointer z-50' src={logoImage} alt="Logo" />
            <i className='bx bx-menu text-white text-5xl' onClick={() => setMenuOpen(true)}></i> 
            <nav className={`absolute top-[-100%] left-0 w-full h-[60vh] z-10 bg-[#231f1b] transition-all duration-500 ease-in-out ${menuOpen ? 'top-[0%]' : 'top-[-100%]'}`}>
                <div className='w-[100%] flex justify-end pr-5 my-5 '>
                    <i className='bx  bx-x text-white text-5xl' onClick={() => setMenuOpen(false)}></i> 
                </div>
                <ul className='flex flex-col gap-6 text-center'>
                    <li><a className='text-[18px]' href="#price">Pricing</a></li>
                    <li><a className='text-[18px]' href="#aboutUs">About</a></li>
                    <li><a className='text-[18px]' href="#tools">Tool</a></li>
                    <li><a className='text-[18px]' href="#beforeAndAfter">How it Works</a></li>
                    <li><a className='text-[18px]' href="#TestimonialsSec">Testimonials</a></li>
                    <li><a className='text-[18px]' href="#faq">FAQ</a></li>
                    <li><a className='text-[18px] bg-[#eb7f25] p-2 px-8 rounded-2xl' href="#">Calculate Solar</a></li>
                </ul>
            </nav>
        </div>

        {/* For larger Screens */}

        <div className='hidden lg:block'>
            <div className='w-[95%] h-[80px] m-auto flex justify-between items-center text-white'>
                <img className='h-20 cursor-pointer z-10' src={logoImage} alt="Logo" />
                <nav> 
                    <ul className='flex gap-12'>
                        <li><a className='hover:text-[#eb7f25] transition duration-300' href="#price">Pricing</a></li>
                        <li><a className='hover:text-[#eb7f25] transition duration-300' href="#aboutUs">About</a></li>
                        <li><a className='hover:text-[#eb7f25] transition duration-300' href="#tools">Tool</a></li>
                        <li><a className='hover:text-[#eb7f25] transition duration-300' href="#beforeAndAfter">How it Works</a></li>
                        <li><a className='hover:text-[#eb7f25] transition duration-300' href="#TestimonialsSec">Testimonials</a></li>
                        <li><a className='hover:text-[#eb7f25] transition duration-300' href="#faq">FAQ</a></li>
                    </ul>
                </nav>
                <div>
                <button className='active:scale-75 bg-[#eb7f25] cursor-pointer p-2 px-8 rounded-xl hover:bg-white hover:text-[#eb7f25] transition duration-400 ease-in-out'>Calculate Solar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
