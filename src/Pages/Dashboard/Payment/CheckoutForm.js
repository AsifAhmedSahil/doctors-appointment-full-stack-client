import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'


const CheckoutForm = ({booking}) => {
  const {price,patient,email,_id} = booking

    const [clientSecret, setClientSecret] = useState("");
    const [cardError,setCardError] = useState("");
    const [success,setSuccess] = useState("");
    const [processing,setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    // from stripe documentation

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" ,
          authorization: `bearer ${localStorage.getItem("accessToekn")}`
        },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log( error); 
            setCardError(error.message);
          }
          else{
            setCardError("");
          }

          setSuccess("")
          setProcessing(true)
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email:email
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message);
            return
          }
          const payment ={
            price,
            transactionId: paymentIntent.id,
            email,
            bookingId: _id

          }
          if(paymentIntent.status === "succeeded"){
            
            fetch("http://localhost:5000/payments",{
              method:"POST",
              headers:{
                "content-type":"application/json",
                authorization: `bearer ${localStorage.getItem('accessToekn')}`
              },
              body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if(data.insertedId){
                setSuccess("Completed payment")
                setTransactionId(paymentIntent.id)
              }
            })

          }
          console.log(paymentIntent);
          setProcessing(false)

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
    className='btn btn-primary btn-sm bg-cyan-600 text-white rounded mt-6' 
    type="submit" disabled={!stripe || !clientSecret || processing}>
      Pay
    </button>
  </form>

  <p className='text-red-500 '>{cardError}</p>

  {
    success && 
    <div>
        <p className='text-green-500'>{success}</p>
        <p>Your Transasction id: {transactionId}</p>
    </div>
  }
    </>
  )
}

export default CheckoutForm