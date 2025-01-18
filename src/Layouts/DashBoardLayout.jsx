import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import logo from "../assets/logo.png";

import Sidebar from "../components/Sidebar/Sidebar";

const DashBoardLayout = () => {

  return (
    <div className="flex justify-between">
      <div className="w-[20%] min-h-screen bg-gradient-to-r from-[#020710] to-[#1b2028]">
        <div className="py-3 flex justify-center border-b">
          <img src={logo} className="w-16 h-16 rounded-full" alt="" />
        </div>
        <Sidebar></Sidebar>
      </div>
      <div className="w-[80%]">
        <DashboardNavbar></DashboardNavbar>
        <div className="min-h-[580px]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashBoardLayout;
