import React from 'react'
import Banner from '../layouts/Banner'
import Brand from '../layouts/Brand'
import Item from '../layouts/Item'
import BrndBaner from '../layouts/BrndBaner'
import NewsPart from '../layouts/NewsPart'
import BestSeler from '../layouts/BestSeler'
import Products from '../layouts/Products'

const Home = () => {
  return (
    <>
    <Banner/>
    <Brand/>
    <Item/>
    <Products/>
    <BrndBaner/>
    <BestSeler/>
    <NewsPart/>
    </>
  )
}

export default Home