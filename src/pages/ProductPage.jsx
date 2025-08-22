import React, { useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { FaStar } from 'react-icons/fa'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Bag from '../../src/assets/14.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductPage = () => {
    let products = useParams()
      let [items, setItems] = useState([]);
    

    useEffect(()=>{
        window.scrollTo({top:0})


    }, [])

     
    
    useEffect(() => {
    async function fetchData() {
      let data = await axios.get("https://dummyjson.com/products");
      setItems(data.data.products);
    }

    fetchData();
  }, []);


    let [product, setproduct]=useState(false)
    let [product2, setproduct2]=useState(false)
    let handleProduct=()=>{
        setproduct(!product)
    }
    let handleProduct1=()=>{
        setproduct2(!product2)
        
    }
  return (
    <section className='py-15 lg:py-20 px-5'>
        <Container>
                
            <>
                {
                    items.map(item=>{
                        if(item.title == products.title){

                            return<>
                 <div className='w-full md:w-[300px] h-[230px] md:h-[300px] mt-10 lg:mt-20'><Image className='w-full h-full' src={item.thumbnail}/></div>
                 <h1 className='text-2xl md:text-[28px] lg:text-[39px] text-black font-bold font-sans pt-5'>{item.title}</h1>
           
            <Flex className='gap-x-6 items-center pt-4 pb-6'>
                <ul className='flex gap-x-1'>
                    <li className='text-color6'><FaStar /></li>
                    <li className='text-color6'><FaStar /></li>
                    <li className='text-color6'><FaStar /></li>
                    <li className='text-color6'><FaStar /></li>
                    <li className='text-color6'><FaStar /></li>
                </ul>
                <p className='text-base text-color5 font-sans'>1 Review</p>
            </Flex>

            <Flex className=' gap-x-[22px] items-center pb-7 border-b-3 border-color5 w-full lg:w-[49%]'>
                <h2 className= 'text-sm lg:text-base text-color5 font-normal font-sans'><del className='text-color5'>${item.discountPercentage}</del></h2>
                <h2 className='text-base md:text-lg lg:text-xl text-black font-bold font-sans'>${item.price}</h2>
            </Flex>

            <Flex className='gap-x-13 items-center pt-14'>
                <h4 className='text-sm lg:text-base text-black font-bold font-sans'>COLOR:</h4>
                <ul className='flex gap-x-4'>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#979797] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#FF8686] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#7ED321] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#B6B6B6] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#15CBA5] hover:scale-[1.5] duration-300'></li>
                </ul>
            </Flex>


            <Flex className='gap-x-[75px] items-center pt-14'>
                <h4 className='text-sm lg:text-base text-black font-bold font-sans'>SIZE:</h4>
                <select className='py-2 px-10 border border-color5'>
                    <option value="S">S</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </Flex>


            <Flex className='gap-x-7 items-center pt-14 pb-7 border-b-3 border-color5 w-full lg:w-[49%]'>
                <h4 className='text-sm lg:text-base text-black font-bold font-sans leading-6'>QUANTITY:</h4>
                <Flex className='gap-x-9 py-2 px-8 border border-color5 '>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </Flex>
            </Flex>


            <Flex className='gap-x-7 items-center pt-14 pb-7 border-b-3 border-color5 w-full lg:w-[49%]'>
                <h4 className='text-sm lg:text-base text-black font-bold font-sans'>STATUS:</h4>
                <p className='text-base text-color5 font-sans'>{item.availabilityStatus}</p>
                
            </Flex>
            
            <div className='border-b-3 border-color5 w-full lg:w-[49%] pb-5'>
                <Flex className='justify-between  gap-x-7 items-center pt-14 pb-7  '>
                <h4 className='text-sm lg:text-base text-black font-bold font-sans leading-6'>FEATURES & PRODUCTS</h4>
                <div onClick={handleProduct}>{product ? <RxCross2 className='text-xl text-black font-bold'/>:<MdAdd  className='text-xl text-color1 font-bold'/> } </div>
            </Flex>
                    {
                        product && 
                        <>
                        <ul className='flex flex-col gap-y-5'>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-sans leading-8'>{item.dimensions.width}</li>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-sans leading-8'>{item.dimensions.height}</li>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-sans leading-8'>{item.dimensions.depth}</li>
                        </ul>
                        </>
                    }
            </div>


            <div className='border-b-3 border-color5 w-full lg:w-[49%] pb-5'>
                <Flex className='justify-between  gap-x-7 items-center pt-14 pb-7 '>
                <h4 className='text-sm lg:text-base text-black font-bold font-sans'>SHIPPING & RETURNS</h4>
                <div onClick={handleProduct1}>{product2 ? <RxCross2 className='text-xl text-black font-bold'/>:<MdAdd  className='text-xl text-color1 font-bold'/> }</div>
            </Flex>
             {
                product2 && 
                <>
                <ul className='flex flex-col gap-y-5'>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-sans leading-8'>ertxcvbsdfgh</li>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-sans leading-8'>ertyu</li>
                        </ul>
                </>
             }
            </div>
            <Flex className='flex-col gap-5 pb-10'>
                <div >
                    <h5  className='text-xl text-black font-normal font-sans pt-5'>{item.description}</h5>
                    
                </div>
                <h5  className='text-xl text-black font-bold font-sans leading-7'>Reviews (1)</h5>
            </Flex>


            
            <ul className='text-sm text-black font-normal font-sans leading-7 pb-4 border-b-2 border-color5'>
                <li>{item.reviews[0].rating}</li>
                <li>{item.reviews[0].comment}</li>
                <li>{item.reviews[0].date}</li>
                <li>{item.reviews[0].reviewerName}</li>
                <li>{item.reviews[0].reviewerEmail}</li>
            </ul>
            
            <Flex className='flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:justify-between lg:items-center pt-4 '>
                <div className='flex items-center gap-x-9'>
                    <ul className='flex gap-x-[2px] '>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                </ul>
                
                </div>
                <div>
                    <p className='text-base text-black font-normal font-sans'>{item.warrantyInformation}</p>
                </div>
            </Flex>
           
            
                </>
                        }
                        
                    })
                }
                
             </>
            
        </Container>
    </section>
  )
}

export default ProductPage