import { SelectedPage, type BaseProps } from "@/shared/types"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import HomePageText from "@/assets/HomePageText.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import ActionButton from "@/shared/ActionButton"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "@/hooks/mediaQuery"
import { motion } from "framer-motion"

const Home = ({setSelectedPage}: BaseProps) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    return (
        <section id="home" className="gap-16 bg-gray-20 md:h-full md:pb-0 py-10">
            {/* Main Image and header */}
            <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}>
                {/* Main header */}
                <motion.div className="z-10 mt-20 md:basis-3/5" 
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-100},
                    visible:{opacity:1, x:0}
                }}>
                    {/* headings */}
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-16 before:-left-20 before:z-[-1] md:before:content-[var(--evolvetext)]">
                                <img src={HomePageText} alt="HomePageText"/>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus, enim tenetur ut saepe suscipit doloremque ducimus consequuntur quisquam impedit architecto corporis cum officiis totam iste dolore, tempora excepturi. Consequuntur.</p>
                    </div>
                    {/* Action buttons */}
                    <motion.div className="mt-8 text-sm flex gap-8 items-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{delay:.2,duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-100},
                        visible:{opacity:1, x:0}
                    }}>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className="text-primary-500 underline hover:text-secondary-500 cursor-pointer">
                            Learn More
                        </AnchorLink>
                    </motion.div>
                    {/* Action buttons ends */}

                </motion.div>
                {/* Image section or right section */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="HomePageGraphic" />
                </div>
            </motion.div>
            {/* sponsors */}
            {
                isAboveMediumScreens &&
                (
                    <div className="h-[150px] bg-primary-100 w-full py-10">
                        <div className="mx-auto w-5/6">
                            <div className="flex w-3/5 items-center justify-between gap-8">
                                <img src={SponsorRedBull} alt="redbull-sponsors"/>
                                <img src={SponsorForbes} alt="redbull-sponsors"/>
                                <img src={SponsorFortune} alt="redbull-sponsors"/>
                            </div>
                        </div>
                    </div> 
                )
                
            }
            
        </section>
    )
}

export default Home