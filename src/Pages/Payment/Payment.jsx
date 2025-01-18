import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "../../components/CheckOutForm/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
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
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
