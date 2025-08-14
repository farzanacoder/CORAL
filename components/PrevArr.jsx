import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PrevArr = ({className,onClick}) => {
  return (
    <div
        className={`bg-[#00000033] w-[64px] h-[64px] flex items-center justify-center rounded-full text-white absolute top-1/3 -translate-1/3 left-7.5 z-20 ${className}`}
      onClick={onClick}>
        <FaLongArrowAltLeft className=' text-xl ' />

    </div>
  )
}

export default PrevArr