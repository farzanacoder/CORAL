import React from "react";
import Image from "../../components/Image";
import Art from "../../src/assets/art.jpg";
import Heading from "../../components/Heading";
import Container from "../../components/Container";

const ArtCollectibles = () => {
  return (
    <div>
      <Container>
        <Heading className='pt-10 pb-6' txt="Art & Collectibles" />
        <h1 className="pb-15">home</h1>
      </Container>
      <Image className="w-[100%]" src={Art} />
    </div>
  );
};

export default ArtCollectibles;
