import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import WorkerMenu from "../Menu/WorkerMenu";
import BuyerMenu from "../Menu/BuyerMenu";
import AdminMenu from "../Menu/AdminMenu";
import useRole from "../../Hooks/useRole";
const Sidebar = () => {
  const [role, isLoading] = useRole();
  const userRole = role.map((singleRole) => singleRole.role);
  console.log(userRole);
  return (
    <div className="pt-10">
      <div className="flex gap-4 items-center text-white  pl-12 hover:bg-slate-700 py-3 duration-300 cursor-pointer">
        <h2 className="text-xl">
          <IoHome></IoHome>
        </h2>
        <h2 className="text-xl">Home</h2>
      </div>
      {userRole.includes("Admin") && <AdminMenu />}
      {userRole.includes("Worker") && <WorkerMenu />}
      {userRole.includes("Buyer") && <BuyerMenu />}
    </div>
  );
};

export default Sidebar;
