import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const NextArr = ({ className, onClick }) => {
    return (
        <div
            className={`bg-[#00000033] w-[64px] h-[64px] flex items-center justify-center rounded-full text-white absolute top-1/3 -translate-1/3 -right-1 ${className}`}
            onClick={onClick}>
            <FaLongArrowAltRight className=' text-xl ' />
        </div>
    )
}

export default NextArr