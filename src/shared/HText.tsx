import React from 'react'

type Props = {
    children: React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h1 className='uppercase basis-3/5 font-Montserrat text-3xl font-bold'>{children}</h1>
  )
}

export default HText