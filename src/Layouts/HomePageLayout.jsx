import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import { ThemeContext } from "../context/ThemeContext";

const HomePageLayout = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={` ${
      theme === "light"
        ? "backdrop-blur-xl bg-gradient-to-r from-[#d7d7d7] to-[#eaeaea]"
        : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
    } z-10`}>
      {/* <CustomCursor></CustomCursor> */}
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePageLayout;
