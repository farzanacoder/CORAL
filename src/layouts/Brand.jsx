import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Brand_1 from '../../src/assets/brand_1.png'
import Brand_2 from '../../src/assets/brand_2.png'
import Brand_3 from '../../src/assets/02.png'
import Brand_4 from '../../src/assets/03.png'
import Brand_5 from '../../src/assets/04.png'

const Brand = () => {
  return (
    <section className='py-20'>
        <Container>
            <Flex className='justify-between'>
                <Image src={Brand_1}/>
                <Image src={Brand_2}/>
                <Image src={Brand_3}/>
                <Image src={Brand_4}/>
                <Image src={Brand_5}/>
            </Flex>
        </Container>
    </section>

    
  )
}

export default Brand