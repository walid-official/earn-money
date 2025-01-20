import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: myHistories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myHistories", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`payment-history/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  console.log(myHistories);

  return (
    <div>
      <div className="py-14">
        <h2 className="font-bold text-center text-3xl">
          Payment History Overview
        </h2>
        <p className="text-center w-[45%] mx-auto py-3">
          Track your transactions with ease, including amounts, dates, and
          statuses, for complete payment transparency.
        </p>
      </div>
      <div className="w-[80%] mx-auto mb-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Transaction Id</th>
                <th>email</th>
                <th>amount</th>
                <th>Status</th>
                <th>currency</th>
                <th>coin</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>{/* row 1 */}

            {
                myHistories.map((history,index) => <PaymentHistoryTable key={index} history={history}></PaymentHistoryTable>)
            }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
