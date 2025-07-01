import HText from '@/shared/HText'
import { SelectedPage, type BaseProps } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm  } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

const ContactUs = ({setSelectedPage}: BaseProps) => {
    const { register,trigger, formState:{ errors } } = useForm()
    const handleSubmit= async(e: any)=>{
        const isValid = await trigger();
        if (!isValid) {
        e.preventDefault();
        }
    }
    return (
    <section id='contactus' className='mx-auto w-full pt-24 pb-32'>
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
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
                <div className=''>
                    <HText>
                        <span className='text-primary-500'>join now</span> to get remain in shape.
                    </HText>
                    <p className="my-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium voluptates labore eius et quisquam accusamus a tempore voluptatem quos?
                    </p>
                </div>
                <div className='mt-10 justify-between gap-8 md:flex'>
                    {/* CONTACT FORM SECTION*/}
                    <motion.div className='mt-10 basis-2/5 md:mt-0'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    <form action="https://formsubmit.co/0582facd261f2b9bf1a52be6a7f40f45" onSubmit={handleSubmit} target='_blank' method='POST'>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <label className='text-sm text-gray-400' htmlFor="full-name">Full Name *</label>
                                <input type="text" id='full-name' className='form-input' placeholder='Your full name'
                                aria-invalid={errors.fullName ? "true" : "false"}
                                {...register("fullName", 
                                {
                                    required:true,
                                    maxLength:100,
                                    pattern: /^[A-Za-z ]+$/i})}/>
                                {errors.fullName && (
                                    <p className='text-sm text-red-600'>
                                        {errors.fullName.type ==='required' && 'Full Name is required.'}
                                        {errors.fullName.type ==='maxLength' && 'Full Name can not be longer than 100 characters.'}
                                        {errors.fullName.type ==='pattern' && 'Full Name is not valid.'}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className='text-sm text-gray-400' htmlFor="email">Email *</label>
                                <input type="email" id='email' className='form-input' placeholder='Your email'
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
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className='text-sm text-gray-400' htmlFor="message">Message *</label>
                                <textarea rows={5} id='message' className='form-input' placeholder='Your message'{...register("message", {
                                    required:true,
                                    maxLength:1000
                                })
                                }/>
                                {errors.message && (
                                    <p className='text-sm text-red-600'>
                                        {errors.message.type ==='required' && 'Message is required.'}
                                        {errors.message.type ==='pattern' && 'Message is too long. Message can only be 500 characters.'}
                                    </p>
                                )}
                            </div>
                            <button type='submit' className='flex justify-center rounded-lg py-1 font-bold bg-secondary-500 w-2/4 md:w-1/4 transition duration-500 hover:text-white text-lg cursor-pointer'>
                                Submit
                            </button>
                        </div>
                    </form>
                    </motion.div>
                    <motion.div className="relative basis-3/5 mt-16 md:mt-0">
                        <div className='md:before:content-[var(--evolvetext)] before:absolute w-full before:-bottom-20 before:right-30 before:z-[-1]'>
                            <img className='' src={ContactUsPageGraphic} alt="contact us page graphic" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            
        </motion.div>
    </section>
    )
}

export default ContactUs