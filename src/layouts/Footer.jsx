import React from "react";
import Image from "../../components/Image";
import Logo from "../../src/assets/logo.png";
import Foter from "../../src/assets/footer.png";
import Flex from "../../components/Flex";
import Container from "../../components/Container";
import { IoArrowUp } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import FootList from "../../components/FootList";

const Footer = () => {
  return (
    <section>
      <header className="py-20">
        <Container>
          <Flex className='flex-col lg:flex-row lg:gap-0 gap-5'>
            <div className="lg:w-2/5 w-full pb-10 lg:pb-0">
              <Image src={Logo} />
              <p className="text-sm lg:text-base text-color4  font-sans py-10 w-full lg:w-[392px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                fugit ullam ad nesciunt, atque voluptatum provident minima
                facere sit voluptatibus.
              </p>
              <Flex className="gap-x-10">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </Flex>
            </div>

            <div className="w-1/5">
              <h3 className="text-base text-black font-semibold font-sans pb-6">
                CATALOG
              </h3>
              <Flex className="flex-col gap-y-5">
                <FootList txt="Necklaces" />
                <FootList txt="hoodies" />
                <FootList txt="Jewelry Box" />
                <FootList txt="t-shirt" />
                <FootList txt="jacket" />
              </Flex>
            </div>
            <div className="w-1/5">
              <h3 className="text-base text-black font-semibold font-sans pb-6">
                ABOUT US
              </h3>
              <Flex className="flex-col gap-y-5">
                <FootList txt="Our Producers" />
                <FootList txt="Sitemap" />
                <FootList txt="FAQ" />
                <FootList txt="About Us" />
                <FootList txt="Terms & Conditions" />
              </Flex>
            </div>
            <div className="w-1/5">
              <h3 className="text-base text-black font-semibold font-sans pb-6">
                CUSTOMER SERVICES
              </h3>
              <Flex className="flex-col gap-y-5">
                <FootList txt="Contact Us" />
                <FootList txt="Track Your Order" />
                <FootList txt="Product Care & Repair" />
                <FootList txt="Book an Appointment" />
                <FootList txt="Shipping & Returns" />
              </Flex>
            </div>
          </Flex>
        </Container>
      </header>



      <footer className="py-10 text-white bg-[#1C232B]">
        <Container>
          <Flex className=''>
            <div className="w-1/3 ">
              <p className="text-sm lg:text-base">© 2022 Coral , Inc.</p>
            </div>
            <div className="w-1/3 ">
              <Image src={Foter} className="text-center h-[20px] lg:h-full" />
            </div>
            <div className="w-1/3 pl-6 lg:!pl-60">
              <p className="flex items-center gap-2 lg:text-base text-sm">
                Scroll to top <IoArrowUp />
              </p>
            </div>
          </Flex>
        </Container>
      </footer>
    </section>
  );
};

export default Footer;
