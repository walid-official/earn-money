import React, { useContext } from "react";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiCoinsLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ApprovedSubmissions from "./ApprovedSubmissions";
import ApexCharts from "../../components/ApexCharts/ApexCharts";
import { ThemeContext } from "../../context/ThemeContext";
const WorkerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { theme } = useContext(ThemeContext);
  const {
    data: { result: myTotalSubmissions = [], total = 0 } = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mySubmission", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`mySubmissions/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  const { data: pendingSubmissions = [] } = useQuery({
    queryKey: ["pendingSubmissions", user?.email],

    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `pendingSubmissions/${user?.email}`
      );
      console.log(data);
      return data;
    },
  });

  // const totalBuyers = allInfo.filter(user => user.role === "Buyer").length;

  const totalApprovedData = myTotalSubmissions.filter(
    (approve) => approve.status === "Approve"
  );
  console.log(totalApprovedData);

  const totalEarning = totalApprovedData.reduce(
    (total, earning) => total + (earning.PaymentCoin || 0),
    0
  );

  console.log(myTotalSubmissions);
  console.log(pendingSubmissions);
  // #d4ceca
  return (
    <div
      className={` ${
        theme === "light"
          ? "backdrop-blur-xl bg-white/30"
          : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
      } z-10`}
    >
      <h2 className="font-bold text-2xl p-10 pb-0 ">
        ProfitHub 360: Your Earnings Dashboard at a Glance
      </h2>
      <div className="p-10 lg:flex gap-3 justify-between">
        <div className="lg:w-[70%]">
          <ApexCharts theme={theme}></ApexCharts>
          <div
            className={`rounded-xl mt-4 ${
              theme === "light"
                ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#f3f3f3] text-black"
                : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
            } z-10`}
          >
            <h2 className="font-bold text-center  py-6 text-3xl">
              Approval Submission
            </h2>
            <ApprovedSubmissions
              totalApprovedData={totalApprovedData}
            ></ApprovedSubmissions>
          </div>
        </div>
        <div className="lg:w-[30%] mt-10 lg:mt-0">
          <div className={`space-y-3 p-6 shadow-2xl rounded-xl ${
      theme === "light"
        ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#f3f3f3] "
        : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
    } z-10`}>
            <div className="stats shadow w-full bg-[#54ade7] text-white">
              <div className="stat">
                <div className="stat-title text-center text-white font-bold">
                  Total Submission
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <VscFileSubmodule></VscFileSubmodule>
                </button>
                <div className="stat-value text-center">
                  {myTotalSubmissions.length}
                </div>
              </div>
            </div>
            <div className="stats shadow w-full bg-[#6330bc] text-white">
              <div className="stat">
                <div className="stat-title text-center text-white font-bold">
                  Total Pending Submission
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <MdOutlinePendingActions></MdOutlinePendingActions>
                </button>
                <div className="stat-value text-center">
                  {pendingSubmissions.length}
                </div>
              </div>
            </div>

            <div className="stats shadow w-full bg-[#00e396] text-white">
              <div className="stat">
                <div className="stat-title text-center text-white font-bold">
                  Total Earning
                </div>
                <button className="font-bold text-2xl py-3 flex justify-center">
                  <RiCoinsLine></RiCoinsLine>
                </button>
                <div className="stat-value text-center">{totalEarning}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[75%] mx-auto "></div>
    </div>
  );
};

export default WorkerHome;
