import React from "react";
import { LuActivity } from "react-icons/lu";
import { MdOutlinePending } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const BuyerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
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

  const { data: totalReviewTasks = [] } = useQuery({
    queryKey: ["review-tasks"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`review-tasks`);
      console.log(data);
      return data;
    },
  });

  console.log(totalReviewTasks);
  console.log(addedTasks);

  return (
    <div>
      <div className="py-8">
        <h2 className="text-center font-bold text-4xl py-3">
          Welcome To Buyer Dashboard!
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
              <button className="font-bold text-2xl py-1">
                <LuActivity></LuActivity>
              </button>
              <div className="stat-value">{addedTasks.length}</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Pending Task</div>
              <button className="font-bold text-2xl py-1">
                <MdOutlinePending></MdOutlinePending>
              </button>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Payment</div>
              <button className="font-bold text-2xl py-1">
                <MdOutlinePayment></MdOutlinePayment>
              </button>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerHome;
