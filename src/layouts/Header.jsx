import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import Image from "../../components/Image";
import Logo from "../../src/assets/logo.png";
import { IoPerson, IoSearchSharp } from "react-icons/io5";
import { FaChevronDown, FaChevronUp, FaShoppingBag } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, remove } from "../slices/addToCart";
import axios from "axios";
import List from "../../components/List";

const Header = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.cart.value);
  let [click, setClick] = useState(false);
  let [allitem, setAllitem] = useState([]);
  let [alltotal, setAlltotal] = useState(0);
  let [find, setFind] = useState([]);
  let [input, setInput] = useState("");
  let [show1, setShow1] = useState(false);
  let cartRef = useRef(null);
  let inputRef = useRef();
  let [expand, setExpand] = useState(false);

  const handleNav = () => setShow1(!show1);
  const handleCart = () => setClick(!click);
  const handleFocus = () => inputRef.current.focus();

  const handleIncrement = (item) => dispatch(increment(item));
  const handleDecrement = (item) => dispatch(decrement(item));
  const handleRemove = (item) => dispatch(remove(item));

  const handleChange = (e) => {
    let search = allitem.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFind(search);
    setInput(e.target.value);
  };

  const handleProductClick = () => {
    setInput("");
    setFind([]);
  };

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("https://dummyjson.com/products");
      setAllitem(res.data.products);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let total = 0;
    data.forEach((item) => {
      total += Number(item.price) * item.quantity;
    });
    setAlltotal(total);
  }, [data]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (click && cartRef.current && !cartRef.current.contains(event.target))
        setClick(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [click]);

  return (
    <section>
      <Container className="px-3 lg:px-0 py-5 lg:py-8 border-b border-[#E3E3E3]">
        <Flex className="pb-4 justify-between items-center">
          <nav className="py-3 block lg:hidden">
            {show1 ? (
              <FaChevronUp onClick={handleNav} />
            ) : (
              <FaChevronDown onClick={handleNav} />
            )}
            {show1 && (
              <div className="bg-color1 absolute top-[115px] left-0 w-full py-5">
                <Flex className="flex-col gap-y-5 items-center">
                  <Link to="/jewelryaccessories">
                    <List txt="Jewelery & Accessories" />
                  </Link>
                  <Link to="/clothingshoes">
                    <List txt="Clothing & Shoes" />
                  </Link>
                  <Link to="/homeliving">
                    <List txt="Home & Living" />
                  </Link>
                  <Link to="/weddingparty">
                    <List txt="Wedding & Party" />
                  </Link>
                  <Link to="/toyentertainment">
                    <List txt="Toys & Entertainment" />
                  </Link>
                  <Link to="/artcollectibles">
                    <List txt="Art & Collectibles" />
                  </Link>
                  <Link to="/craftsuppliestools">
                    <List txt="Craft Supplies & Tools" />
                  </Link>
                </Flex>
              </div>
            )}
          </nav>
          <Link to="/">
            <div className="w-24 lg:w-full">
              <Image src={Logo} />
            </div>
          </Link>

          <div className="relative w-full lg:w-1/2 mx-auto">
            <input
              onChange={handleChange}
              ref={inputRef}
              className={`py-1 lg:py-2 px-2 border border-color1 rounded-full 
                transition-all duration-500 ease-in-out 
                ${expand ? "w-full pr-10 opacity-100" : "w-0 opacity-0 pr-0"}`}
              type="text"
              placeholder="search"
            />
            <IoSearchSharp
              onClick={() => {
                handleFocus();
                setExpand(!expand);
              }}
              className={`absolute top-1/2 -translate-y-1/2 text-sm lg:text-lg cursor-pointer transition-all duration-500 ease-in-out
                ${expand ? "right-3" : "left-1/2 -translate-x-1/2"}`}
            />

            {find.length > 0 && input.length > 0 && (
              <div className="w-full mx-auto absolute top-[50px] left-0 py-4 bg-white border border-color2">
                {find.map((item, index) => (
                  <Link
                    key={index}
                    onClick={handleProductClick}
                    to={`/productpage/${item.title}`}
                  >
                    <p className="flex gap-3 items-center border-b border-color2 last:border-0">
                      <Image className="w-[50px]" src={item.thumbnail} />{" "}
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Flex className="gap-x-6 items-center">
            <Flex className="gap-x-3 items-center">
              <IoPerson />
              <p className="text-lg text-color1 font-roboto font-normal hidden lg:block">
                Account
              </p>
            </Flex>
            <div
              onClick={handleCart}
              className="flex gap-x-3 items-center cursor-pointer"
            >
              <FaShoppingBag />
              <p className="text-lg text-color1 font-roboto font-normal hidden lg:block">
                Shopping
              </p>
            </div>
            {click && (
              <div
                ref={cartRef}
                className="w-[250px] md:w-[500px] lg:w-[700px] h-auto bg-black absolute top-0 right-2 lg:right-5 z-50"
              >
                <RxCross2
                  onClick={() => setClick(false)}
                  className="text-xl font-bold text-white m-5"
                />
                <ul className="flex justify-between md:justify-around lg:justify-around text-sm md:text-base lg:text-lg text-white font-bold border border-white py-2 px-6">
                  <li>Action:</li>
                  <li>Product:</li>
                  <li className="hidden md:block lg:block">price:</li>
                  <li className="hidden md:block lg:block">Quantity:</li>
                  <li>Subtotal:</li>
                </ul>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <ul
                      key={index}
                      className="relative flex justify-between md:justify-around lg:justify-around items-center text-xs md:text-sm lg:text-base text-white border border-white py-2 px-6 cursor-pointer"
                    >
                      <li onClick={() => handleRemove(item)}>
                        <RxCross2 />
                      </li>
                      <li className="md:w-[140px] lg:w-[140px] pl-10">
                        {item.title}
                      </li>
                      <li className="md:w-[70px] lg:w-[70px] hidden md:block lg:block">
                        ${Number(item.price).toFixed(2)}
                      </li>
                      <li className="border border-color5 py-1 px-5 my-5 h-[35px] mr-4 hidden md:block lg:block">
                        <span onClick={() => handleDecrement(item)}>-</span>
                        <span className="px-2">{item.quantity}</span>
                        <span onClick={() => handleIncrement(item)}>+</span>
                      </li>
                      <li className="md:w-[70px] lg:w-[70px] lg:pr-7">
                        ${(item.quantity * Number(item.price)).toFixed(2)}
                      </li>
                    </ul>
                  ))
                ) : (
                  <h1 className="text-white text-xl lg:text-3xl text-center pt-14">
                    Empty Cart
                  </h1>
                )}
                <div className="flex gap-x-3 lg:gap-x-5 pt-12 lg:pt-20 pb-12 lg:pb-20 justify-center">
                  <Link to="/cartpage">
                    <button className="text-sm font-bold font-sans py-4 px-3 md:px-8 lg:px-10 text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white">
                      View cart
                    </button>
                  </Link>
                  <button className="text-sm font-bold font-sans py-4 px-3 md:px-8 lg:px-10 text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white">
                    Checkout
                  </button>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold py-5 text-right pr-5">
                  Total: ${alltotal.toFixed(2)}
                </p>
              </div>
            )}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
