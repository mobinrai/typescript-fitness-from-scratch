import type { JSX } from "react"

export enum SelectedPage {
    Home ="home",
    Benefits="benefits",
    OurClasses="ourclasses",
    ContactUs="contactus",
    AboutUs="aboutus"
}

export interface BaseProps {
    setSelectedPage: (value: SelectedPage) => void
}

export type BenefitTypes={
   icon: JSX.Element,
   title:string,
   desc:string
}