import React from 'react'
import Image from '../../components/Image'
import Craft from '../../src/assets/craft.jpg'
import Heading from "../../components/Heading";
import Container from "../../components/Container";


const CraftSupplies = () => {
  return (
    <div>
        <Container>
        <Heading className='pt-10 pb-6' txt="Art & Collectibles" />
        <h1 className="pb-15">home</h1>
      </Container>
        <Image src={Craft}/>
    </div>
  )
}

export default CraftSupplies