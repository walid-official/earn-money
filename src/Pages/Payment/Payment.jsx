import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../../components/CheckOutForm/CheckoutForm";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
const {id} = useParams();
 const axiosSecure = useAxiosSecure()
const {
  data: singlePurchase = [],
  isLoading,
  refetch,
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
          <CheckoutForm singlePurchase={singlePurchase}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
