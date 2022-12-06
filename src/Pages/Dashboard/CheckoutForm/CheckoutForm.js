import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { info } from 'daisyui/src/colors/colorNames';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [cardError, setCardError] = useState();


    const stripe = useStripe();
    const elements = useElements();
    const { price, email, patient, _id } = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads

        fetch("https://doctor-service-server-five.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

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
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess(' ');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('https://doctor-service-server-five.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congress Your Payment Successful');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='mt-6 p-4 btn w-16 bg-gray-700 '
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-600 text-lg'>{success}</p>
                    <p className='text-green-600 text-lg'>Your ReferenceId:{transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;