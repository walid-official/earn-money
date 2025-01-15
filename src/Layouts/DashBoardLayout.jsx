import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import logo from "../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";

const DashBoardLayout = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[20%] min-h-screen bg-gradient-to-r from-[#020710] to-[#1b2028]">
        <div className="py-3 flex justify-center border-b">
          <img src={logo} className="w-16 h-16 rounded-full" alt="" />
        </div>
        <div className="pt-10">
          <div className="flex gap-4 items-center text-white  pl-12">
            <h2 className="text-xl">
              <IoHome></IoHome>
            </h2>
            <h2 className="text-xl">Home</h2>
          </div>
          <div className="flex gap-4 items-center text-white  pl-12 pt-5">
            <h2 className="text-xl">
              <FaTasks></FaTasks>
            </h2>
            <h2 className="text-xl">Task List</h2>
          </div>
          <div className="flex gap-4 items-center text-white  pl-12 pt-5">
            <h2 className="text-xl">
              <IoCloudDoneSharp></IoCloudDoneSharp>
            </h2>
            <h2 className="text-xl">My Submissions</h2>
          </div>
          <div className="flex gap-4 items-center text-white  pl-12 pt-5">
            <h2 className="text-xl">
              <MdPayments></MdPayments>
            </h2>
            <h2 className="text-xl">withdrawals</h2>
          </div>
        </div>
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
