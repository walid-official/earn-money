import React from "react";

const TaskList = ({ postedTask }) => {
  const {
    title,
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
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={taskImage} alt="Shoes" />
        </figure>
        <div className="px-4 py-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="bg-accent text-white px-5 py-2 rounded-lg">{worker}</p>
          </div>
          <p className="font-bold">{buyerInfo?.name}</p>
          <p className="border-b pb-3">{dateMDY}</p>

          <div className="card-actions justify-between items-center ">
            <p className="font-bold text-xl">{payment}.00$</p>
            <button className="btn bg-accent text-white">view Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
