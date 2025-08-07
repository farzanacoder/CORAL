import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Logo from '../../src/assets/logo.png'
import { IoPerson, IoSearchSharp } from 'react-icons/io5'
import { FaShoppingBag } from 'react-icons/fa'

const Header = () => {
  return (
    <>
    <section>
     <Container className='px-3 lg:px-0 py-5 lg:py-8 border-b border-[#E3E3E3]'>
         <Flex className='justify-between items-center'>
                <div ><div className='w-24 lg:w-full'><Image src={Logo}/></div></div>
                <div ><IoSearchSharp className='text-2xl'/></div>
                <Flex className=' gap-x-6 items-center'>
                    <Flex className='gap-x-3 items-center'>
                        <IoPerson />
                        <p className='text-lg text-color1 font-roboto font-normal hidden lg:block'>Account</p>
                    </Flex>
                    <Flex className='gap-x-3 items-center'>
                        <FaShoppingBag />
                        <p className='text-lg text-color1 font-roboto font-normal hidden lg:block'>Shoping</p>
                    </Flex>
                </Flex>
            </Flex>
    </Container>
   </section>
    </>
  )
}

export default Header