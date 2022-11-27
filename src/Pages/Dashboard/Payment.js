import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0gMADuiIiaFlXNz9N5k6HXIPhnvURpmXcZeRZKvElE1vRaWTc2jUCiZQo6KHnurxrTpsvhinpjyKGlXZRDVFwg00cdBRF6R2');

const Payment = () => {
    const { id } = useParams();
    const url = `https://tools-zone.onrender.com/orders/${id}`;

    const { data: details, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Pay for{details.productName}</h2>
                    <p>Your products quantity{details.orderQuantity}</p>
                    <p>Please pay: ${details.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm details={details} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;