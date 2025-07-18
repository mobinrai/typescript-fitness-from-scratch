import { useEffect, useState } from "react"
import Navbar from "@/scenes/navbar"
import { SelectedPage } from "@/shared/types"
import Home from "@/scenes/home"
import Benefits from "./scenes/benefits"
import OurClassses from "./scenes/ourClasses"
import ContactUs from "./scenes/contactUs"
import Footer from "./scenes/footer"

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

    useEffect(()=>{

        const handleScroll = ()=>{
            if(window.scrollY ===0){
                setIsTopOfPage(true)
                setSelectedPage(SelectedPage.Home)
            }
            if(scrollY !==0){
                setIsTopOfPage(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll)
    },[])
    return (
        <div className="text-4xl"> 
            <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Home setSelectedPage={setSelectedPage}/>
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClassses setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} />
            <Footer setSelectedPage={setSelectedPage}/>
        </div>
    )
}

export default App
