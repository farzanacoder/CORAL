import React from 'react'
import Home from './pages/Home'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from './layouts/RootLayouts';
import JewelryAccessories from './pages/JewelryAccessories';
import ClothingShoes from './pages/ClothingShoes';
import HomeLiving from './pages/HomeLiving';
import WeddingParty from './pages/WeddingParty';
import ToysEntertainment from './pages/ToysEntertainment';
import ArtCollectibles from './pages/ArtCollectibles';
import CraftSupplies from './pages/CraftSupplies';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter( createRoutesFromElements(
   <>
    <Route path="/" element={<RootLayouts />} >
    <Route path="/" element={<Home />} ></Route>
    <Route path="/jewelryaccessories" element={<JewelryAccessories />} ></Route>
    <Route path="/clothingshoes" element={<ClothingShoes />} ></Route>
    <Route path="/homeliving" element={<HomeLiving />} ></Route>
    <Route path="/weddingparty" element={<WeddingParty />} ></Route>
    <Route path="/toysentertainment" element={<ToysEntertainment />} ></Route>
    <Route path="/artcollectibles" element={<ArtCollectibles />} ></Route>
    <Route path="/craftsupplies" element={<CraftSupplies />} ></Route>
    <Route path="/productpage/:title" element={<ProductPage />} ></Route>
    </Route>
   </>
  )
);


const App = () => {
  return (
    <>
           <RouterProvider router={router} />

    </>
  )
}

export default App