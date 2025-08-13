import React from 'react'
import Image from '../../components/Image'
import Live from '../../src/assets/home.jpg'
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomeLiving = () => {
  let prev = useSelector((state)=>state.bread.prevvalue)
  let current = useSelector((state)=>state.bread.currentvalue)


  return (
    <div>
      <Container>
        <Heading className='pt-10 pb-6' txt="Home & Living" />
                <h1 className='pb-15 px-4'>{prev && prev!==current ? <Link to={prev==='Home' ? '/' : `/${prev}`}>{`${prev} >`}</Link> : ''  } Home & Living</h1>
      </Container>
        <Image src={Live}/>
    </div>
  )
}

export default HomeLiving