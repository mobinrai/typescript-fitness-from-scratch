import { SelectedPage, type BaseProps } from '@/shared/types'
import { motion } from 'framer-motion'
import Logo from "@/assets/Logo.png"
import { useForm } from 'react-hook-form'
import { DevicePhoneMobileIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Footer = ({setSelectedPage}: BaseProps) => {
    const { register,trigger, formState:{ errors } } = useForm()
        const handleSubmit= async(e: any)=>{
            const isValid = await trigger();
            if (!isValid) {
            e.preventDefault();
            }
        }
    return (
        <section id="aboutus" className="py-10 bg-secondary-500">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
            >
                <motion.div className="flex flex-col md:flex-row mx-auto w-5/6 gap-10 text-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}>
                    {/* left side */}
                    <div className="basis-2/5">
                        <img src={Logo} alt="logo" />
                        <p className="text-sm my-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quidem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quidem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quidem.
                        </p>
                        <span className=''>@EvoGym All Rights Reserved</span>
                    </div>
                    <div className="basis-1/5 flex flex-col gap-6">
                        <h2 className='font-Playfair font-bold text-2xl'>Links</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className=' underline hover:text-white cursor-pointer transition duration-500'>Terms and Conditions</li>
                            <li className=' underline hover:text-white cursor-pointer transition duration-500'>Privacy and Policies</li>
                            <li className=' underline hover:text-white cursor-pointer transition duration-500'>Refund</li>
                            <li className=' underline hover:text-white cursor-pointer transition duration-500'>Join Fees</li>                            
                        </ul>
                    </div>
                    <div className="basis-1/5 flex flex-col md:gap-4 gap-4">
                        <h2 className='font-Playfair font-bold text-2xl mb-4'>Contact Us</h2>
                        <p className='font-bold flex gap-4'><MapPinIcon className='h-6 w-6'/> <span>E-walls street, 401</span></p>
                        <p className='font-bold flex gap-4'><DevicePhoneMobileIcon className='h-6 w-6'/> <span>(333)123-4567</span></p>
                    </div>
                    <div className="basis-2/5 flex flex-col md:gap-10 gap-4">
                        <h2 className='font-Playfair font-bold text-2xl'>Our Newsletter</h2>
                        <div className='flex flex-col gap-4'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut qui animi voluptatem aperiam iusto non, recusandae totam eaque assumenda expedita.</p>
                            <form onSubmit={handleSubmit} method='POST'>
                                <div className="flex flex-col gap-6">
                                        <input type="email" id='email' className='w-full rounded-lg bg-white border border-black text-black px-3 py-2 placeholder:text-black font-Playfair text-xl outline-blue-600' placeholder='Your email'
                                        {...register("email", {
                                            required:true,
                                            pattern: /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"[^"\\\r\n]+")@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i
                                        })
                                        }/>
                                        {errors.email && (
                                            <p className='text-sm text-red-600'>
                                                {errors.email.type ==='required' && 'Email is required.'}
                                                {errors.email.type ==='pattern' && 'Invalid email.'}
                                            </p>
                                        )}
                                    <button type='submit' className='flex justify-center rounded-lg py-1 font-bold bg-gray-500 w-2/4 md:w-1/4 transition duration-500 text-white text-lg cursor-pointer border border-gray-500 hover:bg-transparent hover:text-gray-500'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            
        </section>
    )
}

export default Footer