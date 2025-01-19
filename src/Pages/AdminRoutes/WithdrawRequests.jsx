import React from "react";
import WithdrawalRequestTable from "./WithdrawalRequestTable";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const WithdrawRequests = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

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


  const handleApproval = (approved,withdrawCoin,email) => {

    const withdrawUpdateData ={
        approved,withdrawCoin,email
    }
    try{
        const {data} = axiosSecure.patch(`withdrawUpdate/${user?.email}`,withdrawUpdateData);
        console.log(data);
        toast.success("Withdraw payment is successful!!");
        refetch();
    }catch(err){
        console.log(err);
    }
  }

  return (
    <div>
      <div className="py-12">
        <h2 className="text-center font-bold text-4xl py-3">
          Withdrawal Request
        </h2>
        <p className="w-[40%] mx-auto text-center">
          A withdrawal request allows users to securely initiate a transfer of
          their funds from their account to a chosen payment method.
        </p>
      </div>
      <div className="px-4 pb-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
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
              {
                withdrawalRequests.map((requests,index) => <WithdrawalRequestTable handleApproval={handleApproval} key={index} requests={requests}></WithdrawalRequestTable>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequests;
