import React from 'react'
import { SelectedPage } from './types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: SelectedPage)=>void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
    return (
        <AnchorLink 
        className='rounded-md py-2 px-10 bg-secondary-500 hover:bg-primary-500 hover:text-white cursor-pointer text-sm'
        onClick={()=> setSelectedPage(SelectedPage.ContactUs)}>
            {children}
        </AnchorLink>
    )
}

export default ActionButton