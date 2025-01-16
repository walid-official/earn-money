import React from "react";
import { FaTasks } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";

const WorkerMenu = () => {
  return (
    <div>
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
    </div>
  );
};

export default WorkerMenu;
