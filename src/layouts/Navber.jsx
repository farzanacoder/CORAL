
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import List from '../../components/List'

const Navber = () => {
    let [show, setShow] = useState(false)
    let handleClick = () => {
        setShow(!show)
    }


    return (
        <>
            <nav className='py-10 px-4 hidden lg:block'>
                <Container>
                    <Flex className='justify-between items-center'>
                        <List txt='Jewelry & Accessories' />
                        <List txt='Clothing & Shoes' />
                        <List txt='Home & Living' />
                        <List txt='Wedding & Party' />
                        <List txt='Toys & Entertainment' />
                        <List txt='Art & Collectibles' />
                        <List txt='Craft Supplies & Tools' />
                    </Flex>
                </Container>
            </nav>



            <nav className='py-3 block lg:hidden '>
                {
                    show ? <FaChevronUp className='absolute top-[58px] left-1/2 -transform-y-[50%]' onClick={handleClick} /> :<FaChevronDown className='absolute top-[58px] left-1/2 -transform-y-[50%]' onClick={handleClick} />  

                }
                
                {
                    show &&
                    <div className='bg-white absolute top-[85px]  w-full py-5'>
                        <Flex className='flex-col gap-y-5 items-center'>
                            <List txt='Jewelry & Accessories' />
                            <List txt='Clothing & Shoes' />
                            <List txt='Home & Living' />
                            <List txt='Wedding & Party' />
                            <List txt='Toys & Entertainment' />
                            <List txt='Art & Collectibles' />
                            <List txt='Craft Supplies & Tools' />
                        </Flex>
                    </div>
                }

            </nav>
        </>
    )
}

export default Navber
