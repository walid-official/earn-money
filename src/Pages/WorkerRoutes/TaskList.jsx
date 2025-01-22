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
      <div className="card shadow-xl">
        {/* <figure>
          <img src={taskImage} alt="Shoes" />
        </figure> */}
        <div className="px-4 py-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="">
                <img
                  src={buyerInfo?.photo}
                  className="w-10 h-10 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="">
                <p className="font-bold">{buyerInfo?.name}</p>
                <p className="border-b pb-3">{dateMDY}</p>
              </div>
            </div>
            <div className="">
              <p className="px-5 py-2 rounded-lg">Worker: {worker}</p>
            </div>
          </div>

          <h2 className="font-bold card-title py-3">{title}</h2>

          <div className="card-actions justify-between items-center ">
            <p className="font-bold text-xl">{payment}.00$</p>
            <NavLink
              to={`/dashboard/taskDetails/${_id}`}
              className="btn border-none"
            >
              view Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
