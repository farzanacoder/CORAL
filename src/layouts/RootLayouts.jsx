import React from "react";
import Header from "../layouts/Header";
import Navber from "../layouts/Navber";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";

const RootLayouts = () => {
  return (
    <>
      <Header />
      <Navber />
      <Outlet/>
      <Footer />
    </>
  );
};

export default RootLayouts;
