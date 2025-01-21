import React from "react";
import { NavLink } from "react-router-dom";

const TaskList = ({ postedTask }) => {
  const {
    title,
    _id,
    detail,
    payment,
    worker,
    totalPayment,
    completionDate,
    submissionImage,
    taskImage,
    buyerInfo,
  } = postedTask || {};

  let date = new Date(completionDate);
  /* Date format you have */
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  console.log(dateMDY);

  return (
    <div>
      
      <div className="card bg-gradient-to-r from-[#020710] to-[#1b2028] text-white shadow-xl">
        {/* <figure>
          <img src={taskImage} alt="Shoes" />
        </figure> */}
        <div className="px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 justify-between">
            <h2 className="font-bold card-title">{title}</h2>
            <p className="bg-accent text-white px-5 py-2 rounded-lg">{worker}</p>
          </div>
          <p className="font-bold">{buyerInfo?.name}</p>
          <p className="border-b pb-3">{dateMDY}</p>

          <div className="card-actions justify-between items-center ">
            <p className="font-bold text-xl">{payment}.00$</p>
            <NavLink to={`/dashboard/taskDetails/${_id}`} className="btn bg-accent text-white border-none hover:bg-accent">view Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
