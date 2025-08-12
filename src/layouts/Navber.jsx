
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import List from '../../components/List'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { breadButton } from '../slices/breadCrumb'

const Navber = () => {
    let dispatch = useDispatch()
     let handleItem=(item)=>{
        dispatch(breadButton(item))
    }

    let [show, setShow] = useState(false)
    let handleClick = () => {
        setShow(!show)
    }


    return (
        <>
            <nav className='py-10 px-4 hidden lg:block'>
                <Container>
                    <Flex className='justify-between items-center'>
                         <Link onClick={()=>handleItem('jewelryaccessories')} to='/jewelryaccessories'><List txt='Jewelry & Accessories' /></Link>
                         <Link onClick={()=>handleItem('clothingshoes')} to='/clothingshoes'><List txt='Clothing & Shoes' /></Link>
                         <Link onClick={()=>handleItem('homeliving')} to='/homeliving'><List txt='Home & Living' /></Link>
                         <Link onClick={()=>handleItem('weddingparty')} to='/weddingparty'><List txt='Wedding & Party' /></Link>
                         <Link onClick={()=>handleItem('toysentertainment')} to='/toysentertainment'><List txt='Toys & Entertainment' /></Link>
                         <Link onClick={()=>handleItem('artcollectibles')} to='/artcollectibles'><List txt='Art & Collectibles' /></Link>
                         <Link onClick={()=>handleItem('craftsupplies')} to='/craftsupplies'><List txt='Craft Supplies & Tools' /></Link>
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
