import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { RiSortAsc } from "react-icons/ri";
import { FaPesetaSign } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="pt-10">
        <div className="flex gap-4 items-center text-white  pl-12 hover:bg-slate-700 py-3 duration-300 cursor-pointer">
          <h2 className="text-xl">
            <IoHome></IoHome>
          </h2>
          <h2 className="text-xl">Home</h2>
        </div>
        <div className="flex gap-4 items-center text-white  pl-12  hover:bg-slate-700 py-3 duration-300 cursor-pointer">
          <h2 className="text-xl">
            <FaTasks></FaTasks>
          </h2>
          <h2 className="text-xl">Task List</h2>
        </div>
        <div className="flex gap-4 items-center text-white  pl-12  hover:bg-slate-700 py-3 duration-300 cursor-pointer">
          <h2 className="text-xl">
            <IoCloudDoneSharp></IoCloudDoneSharp>
          </h2>
          <h2 className="text-xl">My Submissions</h2>
        </div>
        <div className="flex gap-4 items-center text-white  pl-12  hover:bg-slate-700 py-3 duration-300 cursor-pointer">
          <h2 className="text-xl">
            <MdPayments></MdPayments>
          </h2>
          <h2 className="text-xl">withdrawals</h2>
        </div>
        <NavLink to="/dashboard/addNewTasks" className="flex gap-4 items-center text-white  pl-12 hover:bg-slate-700 py-3 duration-300 cursor-pointer">
          <h2 className="text-xl">
            <IoBagAdd></IoBagAdd>
          </h2>
          <h2 className="text-xl">Add new task</h2>
        </NavLink>
        <div className="flex gap-4 items-center text-white  pl-12 hover:bg-slate-700 py-3 duration-300 cursor-pointer">
          <h2 className="text-xl">
          <RiSortAsc></RiSortAsc>
          </h2>
          <h2 className="text-xl">My Tasks</h2>
        </div>
        <div className="flex gap-4 items-center text-white  pl-12 hover:bg-slate-700 py-3 duration-300 cursor-pointer">
          <h2 className="text-xl">
            <FaPesetaSign></FaPesetaSign>
          </h2>
          <h2 className="text-xl">Purchase Coin</h2>
        </div>
      </div>
    );
};

export default Sidebar;