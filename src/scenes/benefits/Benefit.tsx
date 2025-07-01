import { SelectedPage, type BaseProps } from '@/shared/types'
import { type JSX } from 'react'
import { motion } from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface BenefitProps extends BaseProps {
    icon: JSX.Element,
    title: string,
    desc: string
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

const Benefit = ({icon, title, desc, setSelectedPage}: BenefitProps) => {
  return (
        <motion.div className="mt-5 rounded-md border-2 border-gray-100 text-center px-5 py-16 bg-primary-300"
        variants={childVariant}
        >
            <div className=" mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 p-4 bg-primary-100">
                    {icon}
                </div>
            </div>
            <h4 className='font-bold'>{title}</h4>
            <p className='my-3 text-sm'>{desc}</p>
            <AnchorLink className="text-sm text-gray-500 underline hover:text-white cursor-pointer"
            onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}>
                Learn More
            </AnchorLink>
        </motion.div>
  )
}

export default Benefit