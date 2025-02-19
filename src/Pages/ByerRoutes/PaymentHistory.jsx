import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import PaymentHistoryTable from "./PaymentHistoryTable";
import { ThemeContext } from "../../context/ThemeContext";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {theme} = useContext(ThemeContext)
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
      <div className="py-10">
        <div className={`w-[60%] mx-auto rounded-xl py-10 ${
            theme === "light"
              ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#c3c0c0] text-black"
              : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
          }`}>
          <h2 className="font-bold text-center text-3xl">
            Payment History Overview
          </h2>
          <p className="text-center w-[50%] mx-auto py-3">
            Track your transactions with ease, including amounts, dates, and
            statuses, for complete payment transparency.
          </p>
        </div>
      </div>
      <div className={`w-[90%] mx-auto p-10 rounded-xl shadow-xl ${
            theme === "light"
              ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#c3c0c0] text-black"
              : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
          }`}>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className={` ${
      theme === "light"
        ? " text-black"
        : " dark:text-white"
    }`}>
                <th>Transaction Id</th>
                <th>email</th>
                <th>amount</th>
                <th>Status</th>
                <th>currency</th>
                <th>coin</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {myHistories.map((history, index) => (
                <PaymentHistoryTable
                theme={theme}
                  key={index}
                  history={history}
                ></PaymentHistoryTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
