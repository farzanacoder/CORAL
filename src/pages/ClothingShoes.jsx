import React from "react";
import Image from "../../components/Image";
import Shoe from "../../src/assets/shoes.jpg";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ClothingShoes = () => {
  let prev = useSelector((state)=>state.bread.prevvalue)
  let current = useSelector((state)=>state.bread.currentvalue)


  return (
    <div>
      <Container>
        <Heading className="pt-10 pb-6" txt="Clothing & Shoes" />
                <h1 className='pb-15 px-4'>{prev && prev!==current ? <Link to={prev==='Home' ? '/' : `/${prev}`}>{`${prev} >`}</Link> : ''  } Clothing & Shoes</h1>
      </Container>
      <Image src={Shoe} />
    </div>
  );
};

export default ClothingShoes;
