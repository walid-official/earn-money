import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import CustomCursor from "../components/CustomCursor/CustomCursor";

const HomePageLayout = () => {
  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028]">
      <CustomCursor></CustomCursor>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePageLayout;
