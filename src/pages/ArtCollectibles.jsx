import React from "react";
import Image from "../../components/Image";
import Art from "../../src/assets/art.jpg";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ArtCollectibles = () => {
  let prev = useSelector((state)=>state.bread.prevvalue)
  let current = useSelector((state)=>state.bread.currentvalue)



  return (
    <div>
      <Container>
        <Heading className='pt-10 pb-6' txt="Art & Collectibles" />
                <h1 className='pb-15 px-4'>{prev && prev!==current ? <Link to={prev==='Home' ? '/' : `/${prev}`}>{`${prev} >`}</Link> : ''  } Art & Collectibles</h1>
      </Container>
      <Image className="w-[100%]" src={Art} />
    </div>
  );
};

export default ArtCollectibles;
