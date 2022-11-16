import React from 'react'
import treatment from "../../../assets/images/treatment.png"

const Features = () => {
  return (
    <div className="hero mt-[150px] ">
  <div className="hero-content flex-col lg:flex-row ">
    <img src={treatment}  className="  lg:w-1/2 w-3/4 rounded-lg shadow-2xl" />
    <div className='mx-20'>
      <h1 className="text-5xl font-bold w-3/4 ">Exceptional Dental Care On Your Terms</h1>
      <p className="py-6">We take great pride in providing you and your family with high-quality dental services. We tailor-fit our treatment plans to address your every need. There is nothing we want more than to see you gain confidence in your smile! Questions or looking to book an appointment?</p>
      <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Features