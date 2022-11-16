import React from 'react'
import doctor from "../../../assets/images/doctor.png"
import appointment from "../../../assets/images/appointment.png"

const Appointments = () => {
  return (
    <section className='mt-32' style={{background: `url(${appointment})`}}>
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className=" -mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold text-cyan-500 ">Appointments</h1>
      <p className="py-6 text-white">Doctors are one of the most important people in society. They are the sole reason our society is taking healthy and positive steps towards progress because the health of the body and mind is the reason behind the good work people put up towards development.</p>
      <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
    </div>
  </div>
</section>
  )
}

export default Appointments