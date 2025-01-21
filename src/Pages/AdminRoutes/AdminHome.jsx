import React, { useEffect, useState } from "react";
import { LuActivity } from "react-icons/lu";
import { MdOutlinePayment, MdOutlinePending } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import WithdrawRequests from "./WithdrawRequests";

const AdminHome = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const {
    data: allInfo = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allInfo", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`allUsers/${user?.email}`);
      console.log(data);

      return data;
    },
  });

  const {
    data: allAmounts = [],
  } = useQuery({
    queryKey: ["allAmounts", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`allPayments-history`);
      console.log(data);
      return data;
    },
  });

console.log(allAmounts);
console.log(allInfo);


  const totalBuyers = allInfo.filter(user => user.role === "Buyer").length;
  const totalWorkers = allInfo.filter(user => user.role === "Worker").length;
  const totalCoins = allInfo.reduce((total, user) => total + (user.coin || 0), 0);
  const totalPaymentHistory = allAmounts.reduce((total,historyAmount) => total + (historyAmount.amount || 0),0)

  console.log(totalPaymentHistory);

  const totalUsdPayment = totalPaymentHistory / 100;

  return (
    <div>
      <div className="py-8">
        <h2 className="text-center font-bold text-4xl py-3">
          Welcome To Admin Dashboard!
        </h2>
        <p className="w-[50%] mx-auto text-center">
          Effortlessly manage your account, track activity, and access
          personalized features all in one place. Enjoy a streamlined and
          intuitive experience.
        </p>
      </div>
      <div className="w-[70%] mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">Total Worker</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <GrUserWorker></GrUserWorker>
              </button>
              <div className="stat-value text-center">{totalWorkers}</div>
             
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">Total Buyer</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <FaPersonBreastfeeding></FaPersonBreastfeeding>
              </button>
              <div className="stat-value text-center">{totalBuyers}</div>
             
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">Total Available Coin</div>
              <button className="font-bold text-2xl py-3 flex justify-center">
                <BsCoin></BsCoin>
              </button>
              <div className="stat-value text-center ">{totalCoins}</div>
             
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">Total Payment</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <BsCashCoin></BsCashCoin>
              </button>
              <div className="stat-value text-center">{totalUsdPayment}$</div>
             
            </div>
          </div>
        </div>
      </div>
      <WithdrawRequests refetch={refetch}></WithdrawRequests>
    </div>
  );
};

export default AdminHome;
