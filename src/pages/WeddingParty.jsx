import React from 'react'
import Image from '../../components/Image'
import Marige from '../../src/assets/marrrige.jpg'
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WeddingParty = () => {
  let prev = useSelector((state)=>state.bread.prevvalue)
  let current = useSelector((state)=>state.bread.currentvalue)


  return (
    <div>
      <Container>
        <Heading className='pt-10 pb-6' txt="Wedding & Party" />
                <h1 className='pb-15 px-4'>{prev && prev!==current ? <Link to={prev==='Home' ? '/' : `/${prev}`}>{`${prev} >`}</Link> : ''  } Wedding & Party</h1>
      </Container>
        <Image src={Marige}/>
    </div>
  )
}

export default WeddingParty