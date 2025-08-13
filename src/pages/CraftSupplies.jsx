import React from 'react'
import Image from '../../components/Image'
import Craft from '../../src/assets/craft.jpg'
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const CraftSupplies = () => {
  let prev = useSelector((state)=>state.bread.prevvalue)
  let current = useSelector((state)=>state.bread.currentvalue)



  return (
    <div>
        <Container>
        <Heading className='pt-10 pb-6' txt="Craft Supplies & Tools" />
                <h1 className='pb-15 px-4'>{prev && prev!==current ? <Link to={prev==='Home' ? '/' : `/${prev}`}>{`${prev} >`}</Link> : ''  } Craft Supplies & Tools</h1>
      </Container>
        <Image src={Craft}/>
    </div>
  )
}

export default CraftSupplies