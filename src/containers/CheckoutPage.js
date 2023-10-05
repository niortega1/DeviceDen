import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51MUDPwJvPCwdTBgx0ip50skvfhXkNB96reiaiXzyQzL7RGjVFgTxS3K41Akt3UOrqLEz7y8IT0wVR9sDF5PdH1B700fGqjU7d7');

const CheckoutPage = () => {
    const handleClick = async () => {
        const stripe = await stripePromise;

        const response = await fetch('http://localhost:5000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
    };

    return (
        <button onClick={handleClick}>Checkout with Stripe</button>
    );
};

export default CheckoutPage;