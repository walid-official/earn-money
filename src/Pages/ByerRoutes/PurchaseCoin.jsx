import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PaymentHistory from "./PaymentHistory";
import { ThemeContext } from "../../context/ThemeContext";

const PurchaseCoin = () => {
  const axiosSecure = useAxiosSecure();
  const { theme } = useContext(ThemeContext);
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
    <div
      className={` ${
        theme === "light"
          ? "bg-white text-black"
          : "dark:bg-black dark:text-white"
      }`}
    >
      <div className="py-10">
        <div
          className={`w-[60%] mx-auto shadow-2xl rounded-xl py-10 ${
            theme === "light"
              ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#c3c0c0] text-black"
              : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
          }`}
        >
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
            className={`card  shadow-xl ${
              theme === "light"
                ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#c3c0c0] text-black"
                : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
            }`}
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
