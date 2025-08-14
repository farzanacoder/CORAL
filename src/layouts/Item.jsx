import React from "react";
import Image from "../../components/Image";
import Crd_1 from "../../src/assets/card.png";
import Crd from "../../src/assets/18.jpg";
import Crd_2 from "../../src/assets/card_1.png";
import Crd_3 from "../../src/assets/card_2.png";
import Crd_4 from "../../src/assets/card_3.png";
import Container from "../../components/Container";
import Flex from "../../components/Flex";

const Item = () => {
  return (
    <section className="py-10 lg:py-15 px-3">
      <Container>
        <Flex className="gap-x-6 flex-col lg:flex-row gap-y-6 lg:gap-y-0">
          <div className="lg:w-1/2 w-full">
          <div className=" h-[510px] w-[530px]"><Image className='w-full h-full' src={Crd} /></div>
          </div>

          <div className="lg:w-1/2 w-full">
            <Flex className="flex-wrap gap-5 justify-center">
              <div className="lg:h-2xl lg:w-[48%] w-[46%]">
                <Image src={Crd_1} className="w-full h-full" />
              </div>
              <div className="lg:h-2xl lg:w-[48%] w-[46%]">
                <Image src={Crd_2} className="w-full h-full" />
              </div>
              <div className="lg:h-2xl lg:w-[48%] w-[46%]">
                <Image src={Crd_3} className="w-full h-full" />
              </div>
              <div className="lg:h-2xl lg:w-[48%] w-[46%]">
                <Image src={Crd_4} className="w-full h-full" />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Item;
