import React from "react";
import { IoBagAdd } from "react-icons/io5";
import { RiSortAsc } from "react-icons/ri";
import { FaPesetaSign } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const BuyerMenu = () => {



  return (
    <div>
      <NavLink
        to="/dashboard/addNewTasks"
        className="flex gap-4 items-center text-white  pl-12 hover:bg-slate-700 py-3 duration-300 cursor-pointer"
      >
        <h2 className="text-xl">
          <IoBagAdd></IoBagAdd>
        </h2>
        <h2 className="text-xl">Add new task</h2>
      </NavLink>
      <NavLink
        to="/dashboard/myTasks"
        className="flex gap-4 items-center text-white  pl-12 hover:bg-slate-700 py-3 duration-300 cursor-pointer"
      >
        <h2 className="text-xl">
          <RiSortAsc></RiSortAsc>
        </h2>
        <h2 className="text-xl">My Tasks</h2>
      </NavLink>
      <div className="flex gap-4 items-center text-white  pl-12 hover:bg-slate-700 py-3 duration-300 cursor-pointer">
        <h2 className="text-xl">
          <FaPesetaSign></FaPesetaSign>
        </h2>
        <h2 className="text-xl">Purchase Coin</h2>
      </div>
    </div>
  );
};

export default BuyerMenu;
