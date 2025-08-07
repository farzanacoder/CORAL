import React from 'react'
import Container from '../../components/Container'
import Image from '../../components/Image'
import Bnr1 from '../../src/assets/brand-banner.png'

const BrndBaner = () => {
  return (
    <section className='py-10 lg:py-28'>
            <Image src={Bnr1}/>
    </section>
  )
}

export default BrndBaner