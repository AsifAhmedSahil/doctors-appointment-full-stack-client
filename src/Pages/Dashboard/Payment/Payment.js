import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_pk);
    const booking = useLoaderData()

    const navigation = useNavigation();

    // console.log(booking);
    const {price,slot,appointmentDate,treatment} = booking;

    if(navigation.state === "loading"){
      return <Loading/>
    }
  return (
    <div>
        <p className='text-3xl font-bold'>Payment For {treatment}</p>
        <p className='text-xl mt-6'>Please Pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking} />
            </Elements>
        </div>
    </div>
  )
}

export default Payment