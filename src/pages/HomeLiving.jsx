import React from 'react'
import Image from '../../components/Image'
import Live from '../../src/assets/home.jpg'
import Heading from "../../components/Heading";
import Container from "../../components/Container";

const HomeLiving = () => {
  return (
    <div>
      <Container>
        <Heading className='pt-10 pb-6' txt="Art & Collectibles" />
        <h1 className="pb-15">home</h1>
      </Container>
        <Image src={Live}/>
    </div>
  )
}

export default HomeLiving