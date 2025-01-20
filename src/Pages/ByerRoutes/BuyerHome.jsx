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


  const {
    data: totalWorkers = [],
   
  } = useQuery({
    queryKey: ["totalWorkers", user],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`my-tasks/${user?.email}`);
      console.log(data);
      return data;
    },
  });



  const {
    data: myAmounts = [],
  } = useQuery({
    queryKey: ["myAmounts", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`payment-history/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  // const totalCoins = allInfo.reduce((total, user) => total + (user.coin || 0), 0);

  const totalWorker = totalWorkers.reduce((total,Worker) => total + (Worker.worker ||0),0)
  const myAmount = myAmounts.reduce((total,amount) => total + (amount.amount || 0),0)

const usdAmount = myAmount / 100;


  console.log(totalWorkers);
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
              <div className="stat-title text-center">Total Workers</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <MdOutlinePending></MdOutlinePending>
              </button>
              <div className="stat-value text-center">{totalWorker}</div>
             
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-center">Total Payment</div>
             <button className="font-bold text-2xl py-3 flex justify-center">
                <MdOutlinePayment></MdOutlinePayment>
              </button>
              <div className="stat-value text-center">{usdAmount}$</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerHome;
