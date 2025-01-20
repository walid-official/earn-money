import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const CheckoutForm = ({singlePurchase}) => {
  const stripe = useStripe();
  const {user} = useAuth()
  const [transactionId,setTransactionId] = useState("")
  const elements = useElements();
  const [error,setError] = useState([]);
  const [clientSecret,setClientSecret] = useState("")
  const axiosSecure = useAxiosSecure()
  console.log(singlePurchase.usd);
  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const { data } = await axiosSecure.post("create-payment-intent", { price: singlePurchase.usd });
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };
    fetchClientSecret();
  }, [axiosSecure, singlePurchase]);
  



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
      setError("payment error", error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError('');
    }


    const { paymentIntent,error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "anonymous",
          email: user?.email || "anonymous"
        },
      },
    })

    if(confirmError){
      console.log("confirm error");
    }
    else{
      console.log("payment intent", paymentIntent)
      if (paymentIntent.status === "succeeded") {
        setTransactionId(`Your Transaction Id: ${paymentIntent.id}`);
      }
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
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {
          transactionId && <p className="text-cyan-500">{transactionId}</p>
        }
        
      </form>
    </div>
  );
};

export default CheckoutForm;
