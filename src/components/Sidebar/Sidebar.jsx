import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import WorkerMenu from "../Menu/WorkerMenu";
import BuyerMenu from "../Menu/BuyerMenu";
import AdminMenu from "../Menu/AdminMenu";
import useRole from "../../Hooks/useRole";
const Sidebar = () => {
  const [role, isLoading] = useRole();
console.log(role);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="pt-10">
      <NavLink to="/dashboard" className="flex gap-4 items-center text-white  pl-10 hover:bg-slate-700 py-3 duration-300 cursor-pointer">
        <h2 className="text-xl">
          <IoHome></IoHome>
        </h2>
        <h2 className="text-xl">Home</h2>
      </NavLink>
      {role === "Admin" && <AdminMenu />}
      {role === "Worker" && <WorkerMenu />}
      {role === "Buyer" && <BuyerMenu />}
    </div>
  );
};

export default Sidebar;
