import React from "react";
import WithdrawalRequestTable from "./WithdrawalRequestTable";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const WithdrawRequests = ({theme}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: withdrawalRequests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["requests", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      if (!user?.email) return [];
      const { data } = await axiosSecure(`withdrawalRequests/${user?.email}`);
      return data;
    },
  });

  console.log(withdrawalRequests);

  // handleWithDrawApproval Button function
  const handleApproval = async (
    approved,
    withdrawCoin,
    email,
    convertedUsd,
    route,
    id
  ) => {
    const date = new Date();
    const notificationObj = {
      message: `You have successfully withdrawn ${convertedUsd} USD`,
      email,
      actionRoute: route,
      time: date,
    };

    try {
      await axiosSecure.post("notifications", notificationObj);
      toast.success("Successfully added notification");
    } catch (err) {
      console.error("Notification error:", err);
    }

    const withdrawUpdateData = { approved, withdrawCoin, email };

    try {
      const { data } = await axiosSecure.patch(
        `withdrawUpdate/${email}`,
        withdrawUpdateData
      ); // Use email directly
      console.log("Withdraw update response:", data);
      toast.success("Withdraw payment is successful!!");
      refetch(); // Ensure refetch is properly bound
    } catch (err) {
      console.error("Withdraw update error:", err);
    }

    try {
      const {data} = await axiosSecure.patch(`withdrawalStatusUpdate/${email}/${id}`,withdrawUpdateData)
      console.log(data);
      toast.success("status is changed!!");
      refetch()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="w-[90%] mx-auto  pb-10">
      
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>Name</th>
                <th>Email</th>
                <th>Withdraw Coin</th>
                <th>Withdraw Amount</th>
                <th>Status</th>
                <th>Account Number</th>
                <th>Method</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {withdrawalRequests.map((requests, index) => (
                <WithdrawalRequestTable
                  handleApproval={handleApproval}
                  key={index}
                  requests={requests}
                ></WithdrawalRequestTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequests;
