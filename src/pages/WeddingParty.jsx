import React from 'react'
import Image from '../../components/Image'
import Marige from '../../src/assets/marrrige.jpg'
import Heading from "../../components/Heading";
import Container from "../../components/Container";

const WeddingParty = () => {
  return (
    <div>
      <Container>
        <Heading className='pt-10 pb-6' txt="Art & Collectibles" />
        <h1 className="pb-15">home</h1>
      </Container>
        <Image src={Marige}/>
    </div>
  )
}

export default WeddingParty