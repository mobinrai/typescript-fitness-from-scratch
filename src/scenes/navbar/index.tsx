import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import { Link } from "./Link"
import { SelectedPage, type BaseProps } from "@/shared/types";
import useMediaQuery from "@/hooks/mediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

interface NavProps extends BaseProps {
    isTopOfPage:boolean;
    selectedPage: SelectedPage;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: NavProps) => {
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
    const isAboveMediaQuery = useMediaQuery("(min-width:1060px)")
    const backgroundColor = isTopOfPage? "": "bg-white"

    return (
        <nav>
            <div className={`${backgroundColor} flexBetween fixed z-30 w-full top-0 py-4 drop-shadow`}>
                <div className="flexBetween mx-auto w-5/6">
                    <div className="flexBetween w-full gap-16">
                        {/* left side */}
                        <img src={Logo} alt="logo" />
                        {
                            isAboveMediaQuery ? 
                            (
                                <div className="flexBetween w-full">
                                <div className="flexBetween gap-8 text-sm">
                                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                    <Link page="Our Services" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                    <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                </div>
                                <div className="flexBetween gap-8 text-sm">
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                                </div>
                            ):
                        <button className="rounded-full bg-secondary-500 p-2 cursor-pointer" onClick={()=> setIsMenuToggle(!isMenuToggle)}>
                            { !isMenuToggle ? 
                                <Bars3Icon className="w-6 h-6 text-white"/> :
                                <XMarkIcon className="w-6 h-6 text-white"/>
                            }
                        </button>
                        }
                    </div>
                </div>
            </div>
            {/* MOBILE MENU */}
            {

                !isAboveMediaQuery && isMenuToggle && (
                    <div className="fixed h-full top-[72px] right-0 bottom-0 bg-primary-100 w-[300px] shadow-2xl z-40">
                        <div className="flex flex-col items-center mt-10 gap-10 text-2xl h-full">
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Our Services" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                    </div>
                )
            }
            
        </nav>
    )
}

export default Navbar