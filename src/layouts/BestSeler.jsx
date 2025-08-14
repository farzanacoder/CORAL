import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import Heading from "../../components/Heading";
import Bagimg from "../../src/assets/14.png";
import { MdFilterListAlt } from "react-icons/md";
import Card from "../../components/Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import PrevArr from "../../components/PrevArr";
import NextArr from "../../components/NextArr";

const BestSeler = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get("https://dummyjson.com/products");
      setItems(data.data.products);
    }
    fetchData();
  }, []);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArr/>,
    nextArrow: <NextArr/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-10 lg:py-15">
      <Container>
        <Heading className="text-center pb-9 text-black" txt="Best sellers" />
        <Flex className="justify-between flex-col lg:flex-row gap-y-4 md:gap-y-0 pb-10">
          <div className="flex gap-x-10">
            <p className="text-color1 hover:text-color1 duration-500 cursor-pointer text-xs md:text-sm lg:text-base font-sans font-semibold">
              All products
            </p>
            <p className="text-color5 hover:text-color1 duration-500 cursor-pointer text-xs md:text-sm lg:text-base font-sans font-semibold">
              T-shirt
            </p>
            <p className="text-color5 hover:text-color1 duration-500 cursor-pointer text-xs md:text-sm lg:text-base font-sans font-semibold">
              Hoodies
            </p>
            <p className="text-color5 hover:text-color1 duration-500 cursor-pointer text-xs md:text-sm lg:text-base font-sans font-semibold">
              Jacket
            </p>
          </div>
          <div>
            <span className=" inline-flex items-center gap-x-2 bg-black py-1 px-3 text-white text-xs md:text-sm font-sanS font-semibold">
              <MdFilterListAlt />
              <span>Show All</span>
            </span>
          </div>
        </Flex>

        <div className="px-4">
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} className="px-2">
                <Card
                  title={item.title}
                  category="bag"
                  price={`$ ${item.price}`}
                  src={item.thumbnail}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* <Flex className='gap-6 flex-wrap justify-center'>
                    <Card title='Nike Sports Futura Luxe' category='bag' price='$ 12.99' src={Bagimg}/>
                    <Card title='Nike Sports Futura Luxe' category='bag' price='$ 12.99' src={Bagimg}/>
                    <Card title='Nike Sports Futura Luxe' category='bag' price='$ 12.99' src={Bagimg}/>
                    <Card title='Nike Sports Futura Luxe' category='bag' price='$ 12.99' src={Bagimg}/>
                </Flex> */}
      </Container>
    </section>
  );
};

export default BestSeler;
