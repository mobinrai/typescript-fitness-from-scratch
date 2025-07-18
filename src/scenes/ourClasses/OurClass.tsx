type Props = {
    name:string,
    desc?:string,
    image:string
}

const OurClass = ({name, desc, image}: Props) => {
    const overlayStyles=`p-5 absolute z-30 flex h-[380px]
    w-[450px] flex-col items-center justify-center whitespace-normal
    bg-primary-500 text-center text-white opacity-0 transition duration-500
    hover:opacity-90`

    return (
        <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
            <div className={overlayStyles}>
                <p className="my-6">{name}</p>
                <p className="text-sm">{desc}</p>
            </div>
            <img src={image} alt={`${image}`}/>
        </li>
    )
}

export default OurClass