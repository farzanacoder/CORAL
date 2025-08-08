import React from 'react'
import Image from '../../components/Image'
import Foter from '../../src/assets/footer.png'
import Flex from '../../components/Flex'
import Container from '../../components/Container'
import { IoArrowUp } from 'react-icons/io5'

const Footer = () => {
  return (
    <section>
        







        <footer className='py-10 text-white bg-[#1C232B]'>
          <Container>
            <Flex>
            <div className='w-1/3 '>
            <p>© 2022 Coral , Inc.</p>
          </div>
          <div className='w-1/3 '>
          <Image src={Foter} className='text-center'/>
          </div>
          <div className='w-1/3 !pl-60'>
          <p className='flex items-center gap-2'>Scroll to top <IoArrowUp/></p>
          </div>
          </Flex>
          </Container>


        </footer>
    </section>
  )
}

export default Footer