import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PaymentHistory from "./PaymentHistory";

const PurchaseCoin = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: purchase = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["purchase"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`paymentDetails`);
      console.log(data);
      return data;
    },
  });

  console.log(purchase);

  return (
    <div className="bg-black">
      <div className="py-10">
        <div className="py-10 bg-gradient-to-r from-[#020710] to-[#1b2028] w-[60%] mx-auto text-white rounded-xl">
          <h2 className="font-bold text-center text-3xl">Payment Info</h2>
          <p className="text-center py-3 w-[40%] mx-auto">
            A form for securely entering payment details to complete a
            transaction.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-[90%] mx-auto">
        {purchase.map((purchaseCoin, index) => (
          <NavLink
            key={index}
            to={`/dashboard/payment/${purchaseCoin._id}`}
            className="card bg-gradient-to-r from-[#020710] to-[#1b2028] text-white shadow-xl"
          >
            <div className="card-body">
              <h2 className="text-3xl font-bold text-center">
                {purchaseCoin?.coin} coins
              </h2>
              <p className="font-bold py-4 text-3xl text-center">=</p>
              <h2 className="font-bold text-2xl text-center">
                {purchaseCoin?.usd}$
              </h2>
            </div>
          </NavLink>
        ))}
      </div>
      <PaymentHistory></PaymentHistory>
    </div>
  );
};

export default PurchaseCoin;
