import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import WorkerMenu from "../Menu/WorkerMenu";
import BuyerMenu from "../Menu/BuyerMenu";
import AdminMenu from "../Menu/AdminMenu";
import useRole from "../../Hooks/useRole";
import { CiLogin } from "react-icons/ci";
import useAuth from "../../Hooks/useAuth";
const Sidebar = () => {
  const [role, isLoading] = useRole();
  const {userSignOut} = useAuth();
  // const navigate = useNavigate()

  const handleSidebarLogout = async () => {
    await userSignOut()
  }

  console.log(role);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="pt-10 ">
      <NavLink
        to="/dashboard"
        className="flex gap-4 items-center text-white  pl-10 hover:bg-slate-700 py-3 duration-300 cursor-pointer"
      >
        <h2 className="text-xl">
          <IoHome></IoHome>
        </h2>
        <h2 className="text-xl">Dashboard</h2>
      </NavLink>
      <div className="border-b pb-10 border-gray-600">
        {role === "Admin" && <AdminMenu />}
        {role === "Worker" && <WorkerMenu />}
        {role === "Buyer" && <BuyerMenu />}
      </div>

      <div className=" pt-10">
      <NavLink
        to="/"
        className="flex gap-4 items-center pl-10 text-white hover:bg-slate-700 py-3 duration-300 cursor-pointer"
      >
        <h2 className="text-xl">
          <IoHome></IoHome>
        </h2>
        <h2 className="text-xl">Home</h2>
      </NavLink>
        <NavLink onClick={handleSidebarLogout} className="flex gap-2 pl-10 text-white hover:bg-slate-700 py-3 duration-300 items-center">
          <button className="text-xl font-bold">
            <CiLogin></CiLogin>
          </button>
          <h2 className="text-xl">Logout</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
