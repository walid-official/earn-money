import React, { useState } from "react";

const TopRatedTask = ({ ratedTask }) => {
  const { taskImage, title, worker, detail, completionDate, PaymentCoin } =
    ratedTask;
  return (
    <div>
      <div className="">
        <div className="card shadow-xl">
          <figure>
            <img
            className="h-[250px] object-cover"
              src={taskImage}
              alt="TaskImage"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-[18px] ">{title}</h2>
            <p>{detail.slice(0,30)}...</p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#00d7c0] hover:bg-[#00d7c0] text-white border-none">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedTask;
