import React from 'react'
import chair from '../../../assets/images/chair.png'

const Bannar = () => {
  return (
    <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
      <p className="py-6">Doctors are one of the most important people in society. They are the sole reason our society is taking healthy and positive steps towards progress because the health of the body and mind is the reason behind the good work people put up towards development.</p>
      <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Bannar