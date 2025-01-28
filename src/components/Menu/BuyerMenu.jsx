import React from "react";
import { IoBagAdd } from "react-icons/io5";
import { RiSortAsc } from "react-icons/ri";
import { FaPesetaSign } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BuyerMenu = () => {
  return (
    <div>
      <NavLink
        to="/dashboard/addNewTasks"
        className="flex gap-4 items-center text-white  pl-6 hover:bg-slate-700 py-3 duration-300 cursor-pointer"
      >
        <h2 className="text-xl">
          <IoBagAdd></IoBagAdd>
        </h2>
        <h2 className="text-xl">Add task</h2>
      </NavLink>
     
      <NavLink
        to="/dashboard/myTasks"
        className="flex gap-4 items-center text-white  pl-6 hover:bg-slate-700 py-3 duration-300 cursor-pointer"
      >
        <h2 className="text-xl">
          <RiSortAsc></RiSortAsc>
        </h2>
        <h2 className="text-xl">My Tasks</h2>
      </NavLink>
      <NavLink to="/dashboard/purchaseCoin" className="flex gap-4 items-center text-white  pl-6 hover:bg-slate-700 py-3 duration-300 cursor-pointer">
        <h2 className="text-xl">
          <FaPesetaSign></FaPesetaSign>
        </h2>
        <h2 className="text-xl">Credit Coin</h2>
      </NavLink>
    </div>
  );
};

export default BuyerMenu;
