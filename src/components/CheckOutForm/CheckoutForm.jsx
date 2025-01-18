import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
                border: "1px solid #000", // Set border
                borderRadius: "8px", // Set border radius
                padding: "10px", // Add padding if needed
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="btn bg-accent mt-4 text-white"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
