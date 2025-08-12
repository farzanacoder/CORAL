import React from 'react'
import Image from '../../components/Image'
import Toys from '../../src/assets/kids.jpg'
import Heading from "../../components/Heading";
import Container from "../../components/Container";

const ToysEntertainment = () => {
  return (
    <div>
      <Container>
        <Heading className='pt-10 pb-6' txt="Art & Collectibles" />
        <h1 className="pb-15">home</h1>
      </Container>
        <Image src={Toys}/>
    </div>
  )
}

export default ToysEntertainment