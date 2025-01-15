import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const DashBoardLayout = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[20%] min-h-screen bg-black"></div>
      <div className="w-[80%]">
        <div className="w-full h-20 bg-slate-700"></div>
        <div className="min-h-[500px]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashBoardLayout;
