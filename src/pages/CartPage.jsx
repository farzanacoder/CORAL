import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import { decrement, increment, remove } from '../slices/addToCart'

const CartPage = () => {
    let [alltotal, setAlltotal]=useState(0)
  let dispatch = useDispatch()
  let data = useSelector((state) => state.cart.value)

  let handleIncrement = (item) => {
    dispatch(increment(item))
  }

  let handleDecrement = (item) => {
    dispatch(decrement(item))
  }

  let handleRemove = (item) => {
    dispatch(remove(item))
  }

  useEffect(()=>{
          let total = 0
          data.map(item=>{
               total += (Number(item.price) || 0) * (Number(item.quantity) || 0);


          })
          setAlltotal(total)
      },[data])


  return (
    <section className='py-10 lg:py-20 px-5 '>
      <Container>
        <Heading txt='Cart' className='pb-10' />
        <Flex className='hidden md:flex justify-between bg-third py-4 px-4 rounded-md'>
          <h5 className='text-sm lg:text-base text-black font-bold font-sans w-1/4'>Product</h5>
          <h5 className='text-sm lg:text-base text-black font-bold font-sans w-1/4'>Price</h5>
          <h5 className='text-sm lg:text-base text-black font-bold font-sans w-1/4'>Quantity</h5>
          <h5 className='text-sm lg:text-base text-black font-bold font-sans w-1/4'>Total</h5>
        </Flex>
        {
          data.map(item => (
           
            <Flex className='flex flex-col md:flex-row items-start md:items-center border border-color2 py-5 px-4 gap-4 md:gap-0'>
              <div className='flex items-center gap-4 w-full md:w-1/4'>
                <div onClick={() => handleRemove(item)} className='text-base text-black font-bold cursor-pointer'>x</div>
                <div className='w-[80px] h-[80px]'><Image className='w-full h-full object-cover' src={item.image} /></div>
                <p className='text-base text-black font-bold'>{item.title}</p>
              </div>

              <div className='w-full md:w-1/4 pt-2 md:pt-0'>
                <h5 className='text-base text-black font-bold'>${Number(item.price)}</h5>
              </div>

              <div className='w-full md:w-1/4 pt-2 md:pt-0'>
                <div className='flex items-center justify-start gap-x-4 border border-color2 px-4 py-2 w-fit'>
                  <p onClick={() => handleDecrement(item)} className='cursor-pointer'>-</p>
                  <p>{item.quantity}</p>
                  <p onClick={() => handleIncrement(item)} className='cursor-pointer'>+</p>
                </div>
              </div>

              <div className='w-full md:w-1/4 pt-2 md:pt-0'>
                <h5 className='text-base text-black font-bold'>${Number(item.quantity) * Number(item.price)}</h5>
              </div>
            </Flex>
          ))
        }


        <Flex className='flex-col md:flex-row justify-between items-start md:items-center gap-5 pt-6 pb-7 border border-color2 px-4'>
          <div className='flex gap-3 items-center'>
            <select className='px-4 py-2 border border-color2' name="Size" id="Size">
              <option value="S">S</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="XL">XL</option>
            </select>
            <h5 className='text-sm text-black font-bold'>Apply coupon</h5>
          </div>
          <h5 className='text-sm text-black font-bold'>Update cart</h5>
        </Flex>

        <h5 className='text-lg sm:text-xl text-black font-bold text-right pt-10 pb-4'>Cart totals</h5>

        <div className='flex justify-end'>
          <table className='w-full sm:w-2/3 lg:w-1/2 border border-black text-left'>
            <tbody>
              <tr>
                <td className='px-5 py-4 border border-black font-bold text-black'>Subtotal</td>
                <td className='px-5 py-4 border border-black textblack'>${alltotal}</td>
              </tr>
              <tr>
                <td className='px-5 py-4 border border-black font-bold text-black'>Total</td>
                <td className='px-5 py-4 border border-black text-black'>${alltotal}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='text-right pt-6'>
          <button className='bg-black text-white py-2 px-5 lg:px-7 font-sans font-semibold text-base'>Checkout</button>
        </div>
      </Container>
    </section>

  )
}

export default CartPage