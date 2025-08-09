import React from "react";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import Image from "../../components/Image";
import Inst1 from "../../src/assets/card (4).png";
import Inst2 from "../../src/assets/card (5).png";
import Inst3 from "../../src/assets/card (6).png";
import Inst4 from "../../src/assets/card (7).png";
import Inst5 from "../../src/assets/card (8).png";
import Heading from "../../components/Heading";

const NewsPart = () => {
  return (
    <section className="py-20 bg-color3">
      <Container>
        <Heading
          className="text-center"
          txt="Follow products and discounts on Instagram"
        />
        <Flex className="justify-between py-20">
          <Image src={Inst1} />
          <Image src={Inst2} />
          <Image src={Inst3} />
          <Image src={Inst4} />
          <Image src={Inst5} />
        </Flex>
        <Heading className="text-center" txt="Or subscribe to the newsletter" />

          <div className='flex gap-x-10 justify-center'>
                <input className='w-1/3 border-b border-black py-3 px-3' type="email" placeholder='Email Address...'/> 
                <input type="submit" className='text-base text-black font-normal font-sans border-b border-black cursor-pointer' value='Submit'/>
            </div>
      </Container>
    </section>
  );
};

export default NewsPart;
