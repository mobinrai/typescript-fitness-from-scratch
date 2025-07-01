import HText from '@/shared/HText'
import { SelectedPage, type BaseProps, type OurClassesType } from '@/shared/types'
import { motion } from 'framer-motion'
import Image1 from "@/assets/image1.png"
import Image2 from "@/assets/image2.png"
import Image3 from "@/assets/image3.png"
import Image4 from "@/assets/image4.png"
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import OurClass from './OurClass'

const classList: Array<OurClassesType> =[
    {
    name: "Weight Training Classes",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    image: Image2,
  },
  {
    name: "Ab Core Classes",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    image: Image5,
  },
  {
    name: "Training Classes",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image6,
  },
]

const OurClassses = ({setSelectedPage}: BaseProps) => {
    return (
        <section id='ourclasses' className='w-full bg-primary-100 py-20'>
            <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                    <div className='md:w-3/5'>
                        <HText>Our classes.</HText>
                        <p className="my-5 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium voluptates labore eius et quisquam accusamus a tempore voluptatem quos?
                        </p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                    {
                        classList.map((item: OurClassesType, index)=>(
                            <OurClass key={`${item.name}-${index}`}
                            name={item.name}
                            desc={item.desc}
                            image={item.image}
                            />
                        ))
                    }
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClassses