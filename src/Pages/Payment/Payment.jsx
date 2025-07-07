import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "../../components/CheckOutForm/CheckoutForm";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { myInfoContext } from "../../Layouts/DashBoardLayout";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { refetch } = useContext(myInfoContext);
  const {
    data: singlePurchase = [],
    isLoading,
    error,
    refetch: purchaseFetch,
  } = useQuery({
    queryKey: ["singlePurchase", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`api/payments/details/${id}`);
      console.log(data);
      return data;
    },
    enabled: !!id,
  });

  console.log(singlePurchase);

  // Loading and Error Handling
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-500">
        Error fetching payment details: {error.message}
      </p>
    );
  }

  // Fallback in case data is null or missing required fields
  if (!singlePurchase || !singlePurchase.usd) {
    return (
      <p className="text-center py-10 text-red-500">
        Invalid payment details. Please try again later.
      </p>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="py-10">
        <h2 className="font-bold text-center text-3xl">
          Secure Payment Portal
        </h2>
        <p className="text-center py-3 w-[40%] mx-auto">
          Enjoy fast and secure payments with various options, ensuring a smooth
          and hassle-free checkout experience. Your information is protected at
          every step.
        </p>
      </div>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            singlePurchase={singlePurchase}
            refetch={refetch}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
