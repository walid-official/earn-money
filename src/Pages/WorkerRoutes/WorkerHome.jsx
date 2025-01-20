import React from "react";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiCoinsLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
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

  const totalApprovedData = myTotalSubmissions.filter(approve => approve.status === "Approve");
  console.log(totalApprovedData);

  const totalEarning = totalApprovedData.reduce((total,earning) => total + (earning.PaymentCoin|| 0),0)

  console.log(myTotalSubmissions);
  console.log(pendingSubmissions);

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
              <div className="stat-title text-center">Total Submission</div>
              <button className="font-bold text-2xl py-3 flex justify-center">
                <VscFileSubmodule></VscFileSubmodule>
              </button>
              <div className="stat-value text-center">
                {myTotalSubmissions.length}
              </div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">
                Total Pending Submission
              </div>
              <button className="font-bold text-2xl py-3 flex justify-center">
                <MdOutlinePendingActions></MdOutlinePendingActions>
              </button>
              <div className="stat-value text-center">{pendingSubmissions.length}</div>
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">Total Earning</div>
              <button className="font-bold text-2xl py-3 flex justify-center">
                <RiCoinsLine></RiCoinsLine>
              </button>
              <div className="stat-value text-center">{totalEarning}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
