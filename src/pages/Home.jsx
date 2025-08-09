import React from 'react'
import Header from '../layouts/Header'
import Navber from '../layouts/Navber'
import Banner from '../layouts/Banner'
import Brand from '../layouts/Brand'
import Item from '../layouts/Item'
import BrndBaner from '../layouts/BrndBaner'
import Footer from '../layouts/Footer'
import NewsPart from '../layouts/NewsPart'
import BestSeler from '../layouts/BestSeler'
import Products from '../layouts/Products'

const Home = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Banner/>
    <Brand/>
    <Item/>
    <Products/>
    <BrndBaner/>
    <BestSeler/>
    <NewsPart/>
    <Footer/>
    </>
  )
}

export default Home