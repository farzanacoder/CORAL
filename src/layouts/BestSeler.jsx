import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Heading from '../../components/Heading'
import Bagimg from '../../src/assets/14.png'
import { MdFilterListAlt } from 'react-icons/md'
import Card from '../../components/Card'


const BestSeler = () => {
    return (
        <section className='py-10 lg:py-15'>
            <Container>
                <Heading className='text-center pb-9 text-black' txt='Best sellers' />
                <Flex className='justify-between flex-col lg:flex-row gap-y-4 md:gap-y-0 pb-10'>
                    <div className='flex gap-x-10'>
                        <p className='text-color1 hover:text-color1 duration-500 cursor-pointer text-xs md:text-sm lg:text-base font-sans font-semibold'>All products</p>
                        <p className='text-color5 hover:text-color1 duration-500 cursor-pointer text-xs md:text-sm lg:text-base font-sans font-semibold'>T-shirt</p>
                        <p className='text-color5 hover:text-color1 duration-500 cursor-pointer text-xs md:text-sm lg:text-base font-sans font-semibold'>Hoodies</p>
                        <p className='text-color5 hover:text-color1 duration-500 cursor-pointer text-xs md:text-sm lg:text-base font-sans font-semibold'>Jacket</p>
                    </div>
                    <div>
                        <span className=' inline-flex items-center gap-x-2 bg-black py-1 px-3 text-white text-xs md:text-sm font-sanS font-semibold'>
                            <MdFilterListAlt /><span>Show All</span>
                        </span>
                    </div>
                </Flex>
                <Flex className='gap-6 flex-wrap justify-center'>
                    <Card title='Nike Sports Futura Luxe' category='bag' price='$ 12.99' src={Bagimg}/>
                    <Card title='Nike Sports Futura Luxe' category='bag' price='$ 12.99' src={Bagimg}/>
                    <Card title='Nike Sports Futura Luxe' category='bag' price='$ 12.99' src={Bagimg}/>
                    <Card title='Nike Sports Futura Luxe' category='bag' price='$ 12.99' src={Bagimg}/>
                </Flex>
            </Container>
        </section>
    )
}

export default BestSeler