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




  const { data: pendingTasks = [], error, isLoading: pendingLoad } = useQuery({
    queryKey: ["pendingTasks", user?.email],
    queryFn: async () => {
      if (!user?.email) return []; // Return an empty array if user email is not available
      const { data } = await axiosSecure.get(`pendingSubmissions/${user.email}`);
      return data;
    },
    enabled: !!user?.email, // Only run the query if user email is available
  });
  
  console.log(pendingTasks);
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
              <div className="stat-title text-center">Total Task Count</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <LuActivity></LuActivity>
              </button>
              <div className="stat-value text-center">{addedTasks.length}</div>
             
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">Pending Task</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <MdOutlinePending></MdOutlinePending>
              </button>
              <div className="stat-value text-center">89,400</div>
             
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">Total Payment</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <MdOutlinePayment></MdOutlinePayment>
              </button>
              <div className="stat-value text-center">89,400</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerHome;
