import React from "react";
import Image from "../../components/Image";
import Shoe from "../../src/assets/shoes.jpg";
import Heading from "../../components/Heading";
import Container from "../../components/Container";

const ClothingShoes = () => {
  return (
    <div>
      <Container>
        <Heading className="pt-10 pb-6" txt="Clothing & Shoes" />
        <h1 className="pb-15">home</h1>
      </Container>
      <Image src={Shoe} />
    </div>
  );
};

export default ClothingShoes;
