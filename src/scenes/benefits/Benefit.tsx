import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import type { JSX } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface BenefitTypes {
    setSelectedPage: (value: SelectedPage) => void;
    icon : JSX.Element;
    title: string;
    description: string;
}

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1}
}

const Benefit = ({icon,title,description ,setSelectedPage }: BenefitTypes) => {
  return (
    <motion.div className='mt-5 rounded-md border-2 border-[var(--gray-100)] px-5 py-16 text-center'
    variants={childVariant}>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-[var(--gray-100)] p-4 bg-[var(--primary-100)]'>
                {icon}
            </div>
        </div> 
        <h4 className='font-bold '>
                {title}
            </h4>
            <p className='my-3'>
                {description}
            </p>
            <AnchorLink className='text-sm font-bold text-[var(--primary-500)] underline hover:text-[var(--secondary-400)] cursor-pointer' 
                onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
            >
                <p>Learn More</p>
            </AnchorLink>
    </motion.div>
  )
}

export default Benefit