import { motion } from 'framer-motion';

const ToolCard = (props) => {
  return (
    <motion.div className='mt-5' id='tools'
        initial={{ opacity: 0, y: 100, scale: 0.80 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
        <div className='text-white bg-black p-10 rounded-xl md:min-h-[250px] will-change-transform overflow-x-auto'>
            <div className='w-fit p-5 rounded-full bg-[#eb7f25]'>
                <img src={props.img} alt="House Image" />
            </div>
            <p className='mt-6 font-semibold'>{props.para1} <br /> {props.para2}</p>
        </div>
    </motion.div>
  )
}

export default ToolCard
