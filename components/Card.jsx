import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { FaRegHeart } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Card = ({title, price, category, src }) => {
  return (
    <div className='lg:w-[250px] w-[330px] h-[460px] group relative border border-color3'>
        <span className='bg-black py-1 px-2 text-sm text-white font-semibold font-sans absolute top-5 left-0'>Sale</span>
        <div className='w-full h-[300px] lg:h-[330px]'><Image className='w-full h-full' src={src}/></div>
       <Link to={`/productpage/${title}`}><p className='text-black text-base font-semibold font-sans px-4 pt-5 lg:pt-8'>{title}</p></Link>
        <Flex className='px-4 justify-between pt-3 lg:pt-5'>
            <span className='text-color5 text-base font-normal font-sans'>{category}</span>
            <span className='text-black text-base font-semibold font-sans '>{price}</span>
        </Flex>
          <div className='cursor-pointer text-white absolute left-0 bottom-0 bg-black w-full h-[55px] flex justify-between items-center px-5 opacity-0 group-hover:opacity-95 group-hover:bottom-[116px] duration-500'>
            <FaRegHeart/> 
            <span className='flex gap-x-3 items-center'><FaBagShopping/> <span className='text-sm font-semibold font-san'>Shop Now</span></span>
        </div>
    </div>
  )
}

export default Card