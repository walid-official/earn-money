import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <div>
      <NavLink
        to="/dashboard/manageUsers"
        className="flex gap-4 items-center text-white  pl-10 hover:bg-slate-700 py-3 duration-300 cursor-pointer"
      >
        <h2 className="text-xl">
          <FaUserAlt></FaUserAlt>
        </h2>
        <h2 className="text-xl">Manage Users</h2>
      </NavLink>
      <NavLink
        to="/dashboard/manageTasks"
        className="flex gap-4 items-center text-white  pl-10 hover:bg-slate-700 py-3 duration-300 cursor-pointer"
      >
        <h2 className="text-xl">
          <GrTasks></GrTasks>
        </h2>
        <h2 className="text-xl">Manage Tasks</h2>
      </NavLink>
    </div>
  );
};

export default AdminMenu;
