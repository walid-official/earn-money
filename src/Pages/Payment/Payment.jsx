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
const {id} = useParams();
 const axiosSecure = useAxiosSecure();
 const {refetch} = useContext(myInfoContext)
const {
  data: singlePurchase = [],
  isLoading,
  refetch:purchaseFetch,
} = useQuery({
  queryKey: ["singlePurchase", id],
  queryFn: async () => {
    const { data } = await axiosSecure.get(`paymentDetails/${id}`);
    console.log(data);
    return data;
  },
});

console.log(singlePurchase);

  return (
    <div>
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
          <CheckoutForm singlePurchase={singlePurchase} refetch={refetch}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
