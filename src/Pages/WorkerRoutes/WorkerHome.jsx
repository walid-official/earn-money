import React from "react";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiCoinsLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ApprovedSubmissions from "./ApprovedSubmissions";
import ApexCharts from "../../components/ApexCharts/ApexCharts";
const WorkerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

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

  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028]">
      <h2 className="font-bold text-2xl p-10 pb-0 text-white">ProfitHub 360: Your Earnings Dashboard at a Glance</h2>
      <div className="p-10 lg:flex gap-3 justify-between">
        <div className="lg:w-[70%]">
          <ApexCharts></ApexCharts>
          <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] rounded-xl mt-4">
          <h2 className="font-bold text-center text-white py-6 text-3xl">Approval Submission</h2>
            <ApprovedSubmissions
              totalApprovedData={totalApprovedData}
            ></ApprovedSubmissions>
          </div>
        </div>
        <div className="lg:w-[30%] mt-10 lg:mt-0">
          <div className="space-y-3 bg-gradient-to-r from-[#020710] to-[#1b2028] p-6 shadow-2xl rounded-xl">
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
      {/* <div className="py-8">
        <h2 className="text-center font-bold text-4xl py-3">
          Welcome To Worker Dashboard!
        </h2>
        <p className="w-[50%] mx-auto text-center">
          Effortlessly manage your account, track activity, and access
          personalized features all in one place. Enjoy a streamlined and
          intuitive experience.
        </p>
      </div> */}
      <div className="w-[75%] mx-auto "></div>
    </div>
  );
};

export default WorkerHome;
