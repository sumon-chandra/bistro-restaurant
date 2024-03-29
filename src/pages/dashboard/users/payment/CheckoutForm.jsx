import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";

const CheckoutForm = ({ price, cart }) => {
  const [cardError, setCartError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((response) => {
        setClientSecret(response.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe && !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCartError(error.message);
    } else {
      setCartError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCartError(confirmError.message);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const paymentInfo = {
        transactionId: paymentIntent.id,
        userName: user?.displayName,
        userEmail: user?.email,
        totalSpends: price,
        purchasedItems: cart,
        quantity: cart.length,
        date: new Date(),
        status: "Pending",
      };
      axiosSecure.post("/payment", paymentInfo).then(({ data }) => {
        console.log(data);
        if (
          data.deleteResult.deletedCount > 0 &&
          data.insertResult.insertedId
        ) {
          alert("Payment Successfully");
        }
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="lg:w-4/12 mt-32 mx-auto">
        <CardElement
          className="card-element bg-slate-200 rounded-lg shadow-lg p-4"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-500 font-bold">{cardError}</p>}
        <div className="text-center">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="pay-btn btn btn-sm mt-10 w-52 lg:px-10 px-5 bg-primaryColor hover:bg-secondaryColor border-0"
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-red-500 text-xl font-semibold">
          Payment incomplete with error:- {cardError}
        </p>
      )}
      {transactionId && (
        <p className="text-green-500 text-xl font-semibold">
          Payment successful with transactionId:- {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
