import React from "react";
import { LuActivity } from "react-icons/lu";
import { MdOutlinePayment, MdOutlinePending } from "react-icons/md";

const WorkerHome = () => {
  return (
    <div>
      <div className="py-8">
        <h2 className="text-center font-bold text-4xl py-3">
          Welcome To Worker Dashboard!
        </h2>
        <p className="w-[50%] mx-auto text-center">
          Effortlessly manage your account, track activity, and access
          personalized features all in one place. Enjoy a streamlined and
          intuitive experience.
        </p>
      </div>
      <div className="w-[70%] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Task Count</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <MdOutlinePending></MdOutlinePending>
              </button>
              <div className="stat-value">89,400</div>
             
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Pending Task</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <LuActivity></LuActivity>
              </button>
              <div className="stat-value">89,400</div>
             
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Payment</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <MdOutlinePayment></MdOutlinePayment>
              </button>
              <div className="stat-value">89,400</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
