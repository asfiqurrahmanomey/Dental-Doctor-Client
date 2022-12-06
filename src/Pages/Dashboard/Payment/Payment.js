import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { info } from 'daisyui/src/colors/colorNames';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { slot, price, treatment, appointmentDate } = booking
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Payment for: {treatment}</h2>
            <p className='text-md'>Please Pay: ${price} for your Appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-16'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;