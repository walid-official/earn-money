import React, { useContext } from "react";
import { LuActivity } from "react-icons/lu";
import { MdOutlinePending } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TaskToReview from "./TaskToReview";
import BuyerChart from "../../components/ApexCharts/BuyerChart";
import { ThemeContext } from "../../context/ThemeContext";

const BuyerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {theme} = useContext(ThemeContext)
  const {
    data: addedTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["addedTasks", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`my-tasks/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  const { data: totalWorkers = [],refetch: workerRefetch } = useQuery({
    queryKey: ["totalWorkers", user],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`my-tasks/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  const { data: myAmounts = [] } = useQuery({
    queryKey: ["myAmounts", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`payment-history/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  // const totalCoins = allInfo.reduce((total, user) => total + (user.coin || 0), 0);

  const totalWorker = totalWorkers.reduce(
    (total, Worker) => total + (Worker.worker || 0),
    0
  );
  const myAmount = myAmounts.reduce(
    (total, amount) => total + (amount.amount || 0),
    0
  );

  const usdAmount = myAmount / 100;

  console.log(totalWorkers);
  console.log(addedTasks);

  return (
    <div  className={`p-8 ${
      theme === "light"
        ? "bg-[#f9fafc] text-black"
        : "dark:bg-black dark:text-white"
    }`}>
      {/* <div className="py-8">
        <h2 className="text-center font-bold text-4xl py-3">
          Welcome To Buyer Dashboard!
        </h2>
        <p className="w-[50%] mx-auto text-center">
          Effortlessly manage your account, track activity, and access
          personalized features all in one place. Enjoy a streamlined and
          intuitive experience.
        </p>
      </div> */}
      <div className="lg:flex gap-4">
        <div className="lg:w-[70%] ">
          <div  className={`p-8 rounded-xl shadow-2xl ${
        theme === "light"
          ? "backdrop-blur-xl bg-[#FFFFFF] text-black"
          : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028]"
      }`}>
            <BuyerChart></BuyerChart>
          </div>
          <div className={`p-8 rounded-xl shadow-2xl mt-8  ${
        theme === "light"
          ? "backdrop-blur-xl bg-[#FFFFFF] text-black"
          : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028]"
      }`}>
            <TaskToReview workerRefetch={workerRefetch}></TaskToReview>
          </div>
        </div>
        <div className={`lg:w-[30%] p-8 rounded-xl mt-10 lg:mt-0  ${
        theme === "light"
          ? "backdrop-blur-xl bg-[#FFFFFF] text-black"
          : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
      }`}>
          <div className="space-y-4">
            <div className="stats shadow w-full bg-gradient-to-r from-[#193a98] to-[#070c2e] text-white">
              <div className="stat">
                <div className="stat-title text-center text-white font-bold">
                  Total Task Count
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <LuActivity></LuActivity>
                </button>
                <div className="stat-value text-center">
                  {addedTasks.length}
                </div>
              </div>
            </div>
            <div className="stats shadow w-full bg-gradient-to-r from-[#20d6ef] to-[#0846da] text-white">
              <div className="stat">
                <div className="stat-title text-center text-white font-bold">
                  Total Workers
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <MdOutlinePending></MdOutlinePending>
                </button>
                <div className="stat-value text-center">{totalWorker}</div>
              </div>
            </div>
            <div className="stats shadow w-full bg-gradient-to-r from-[#551f8b] to-[#1c172d] text-white">
              <div className="stat">
                <div className="stat-title text-center font-bold text-white">
                  Total Payment
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <MdOutlinePayment></MdOutlinePayment>
                </button>
                <div className="stat-value text-center">{usdAmount}$</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerHome;
