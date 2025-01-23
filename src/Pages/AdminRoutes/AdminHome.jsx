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
import AdminRecharts from "../../components/Recharts/AdminRecharts";
import PieCircle from "../../components/ApexCharts/PieCircle";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
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

  const { data: allAmounts = [] } = useQuery({
    queryKey: ["allAmounts", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`allPayments-history`);
      console.log(data);
      return data;
    },
  });

  console.log(allAmounts);
  console.log(allInfo);

  const totalBuyers = allInfo.filter((user) => user.role === "Buyer").length;
  const totalWorkers = allInfo.filter((user) => user.role === "Worker").length;
  const totalCoins = allInfo.reduce(
    (total, user) => total + (user.coin || 0),
    0
  );
  const totalPaymentHistory = allAmounts.reduce(
    (total, historyAmount) => total + (historyAmount.amount || 0),
    0
  );

  console.log(totalPaymentHistory);

  const totalUsdPayment = totalPaymentHistory / 100;

  return (
    <div className="bg-black p-8">
      <div className="lg:flex gap-4">
        <div className="lg:w-[70%]">
          <div className="grid lg:grid-cols-2 bg-gradient-to-r from-[#020710] to-[#1b2028] p-8 rounded-xl gap-4">
            <div className="stats shadow text-white bg-gradient-to-r from-[#cf71f2] to-[#cf71f2]">
              <div className="stat">
                <div className="stat-title text-center text-white font-bold text-2xl">
                  Total Worker
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <GrUserWorker></GrUserWorker>
                </button>
                <div className="stat-value text-center">{totalWorkers}</div>
              </div>
            </div>
            <div className="stats shadow bg-gradient-to-r from-[#26dce3] text-white to-[#488bda]">
              <div className="stat">
                <div className="stat-title text-center text-white font-bold text-2xl">
                  Total Buyer
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <FaPersonBreastfeeding></FaPersonBreastfeeding>
                </button>
                <div className="stat-value text-center">{totalBuyers}</div>
              </div>
            </div>
            <div className="stats shadow bg-gradient-to-r from-[#fcc09e] text-white to-[#f99289]">
              <div className="stat">
                <div className="stat-title text-center text-white font-bold text-2xl">
                  Total Available Coin
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <BsCoin></BsCoin>
                </button>
                <div className="stat-value text-center ">{totalCoins}</div>
              </div>
            </div>

            <div className="stats shadow bg-gradient-to-r from-[#7464c9] text-white to-[#352d69]">
              <div className="stat">
                <div className="stat-title text-center font-bold text-white text-2xl">
                  Total Payment
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <BsCashCoin></BsCashCoin>
                </button>
                <div className="stat-value text-center">{totalUsdPayment}$</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] mt-8 p-4 rounded-xl">
            <AdminRecharts></AdminRecharts>
          </div>
        
        </div>
        <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] rounded-xl lg:w-[30%]">
          <div className="py-6">
            <PieCircle></PieCircle>
          </div>
          <div className="p-4">
            <div className="stat bg-gradient-to-r from-[#020710] to-[#1b2028] rounded-xl text-white ">
              <div className="stat-title text-white text-center">Referral Earnings</div>
              <div className="stat-value text-white text-center">$4.5K</div>
              <div className="stat-desc text-white text-center">↗︎ $500 (12%)</div>
            </div>

            <div className="stat bg-gradient-to-r from-[#020710] to-[#1b2028] rounded-xl text-white my-3">
              <div className="stat-title text-white text-center">Platform Revenue</div>
              <div className="stat-value text-white text-center">$8.9K</div>
              <div className="stat-desc text-white text-center">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat bg-gradient-to-r from-[#020710] to-[#1b2028] rounded-xl text-white">
              <div className="stat-title text-white text-center">Active Users</div>
              <div className="stat-value text-white text-center">2,310</div>
              <div className="stat-desc text-white text-center">↗︎ 120 (5%)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] mt-8 p-4 rounded-xl">
            <WithdrawRequests refetch={refetch}></WithdrawRequests>
          </div>
    </div>
  );
};

export default AdminHome;
