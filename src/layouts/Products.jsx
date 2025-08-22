import Container from "../../components/Container";
import Flex from "../../components/Flex";
import Heading from "../../components/Heading";
import { MdFilterListAlt } from "react-icons/md";
import Paginate from "../../components/Paginate";

const Products = () => {
   

  return (
    <section className="py-10 lg:py-15">
      <Container>
        <Heading
          className="text-center pb-9 text-black"
          txt="Or subscribe to the newsletter"
        />
        <Flex className="justify-between flex-col lg:flex-row gap-y-4 md:gap-y-0 pb-10">
          <div className="flex gap-x-7 lg:gap-x-10">
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

       

        <div>
          <Paginate itemsPerPage={4} />
        </div>
      </Container>
    </section>
  );
};

export default Products;
