import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import { Link } from "./Link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/mediaQuery";
import { useState } from "react";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage)=>void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(true)
    const isMediaQuery = useMediaQuery("(min-width:1060px)")
    return (
        <nav>
            <div className="flexBetween fixed z-30 bg-white w-full top-0 py-4">
                <div className="flexBetween mx-auto w-5/6">
                <div className="flexBetween w-full gap-16">
                    {/* left side */}
                    <img src={Logo} alt="logo" />
                    {
                        isMediaQuery ? 
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
                                <button>Become a Member</button>
                            </div>
                            </div>
                        ):
                     <button className="rounded-full bg-secondary-500 p-2" onClick={()=> setIsMenuToggle(!isMenuToggle)}>
                        { isMenuToggle ? 
                            <Bars3Icon className="w-6 h-6 text-white"/> :
                            <XMarkIcon className="w-6 h-6 text-white"/>
                        }
                     </button>
                    }
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar