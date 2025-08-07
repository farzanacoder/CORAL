import React from 'react'
import Container from '../../components/Container'
import Image from '../../components/Image'
import Bnr from '../../src/assets/banner.png'

const Banner = () => {
  return (
    <section className='py-10 lg:py-28'>
        <Container>
            <Image src={Bnr}/>
        </Container>
    </section>
  )
}

export default Banner