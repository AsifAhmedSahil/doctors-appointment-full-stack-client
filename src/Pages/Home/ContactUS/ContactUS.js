import React from 'react'
import bgForm from "../../../assets/images/appointment.png"

const ContactUS = () => {
  return (
    <section style={{background:`url(${bgForm})`,backgroundSize:"cover"}}>
        <div className='text-center py-[50px] mt-[80px]'>
        <h4 className="text-2xl font-bold text-cyan-400">Contact Us</h4>
        <h4 className="text-4xl mt-6 text-white">Stay Connected With Us</h4>
        <div className="flex flex-col gap-5 items-center mt-10">
        <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
        <textarea className="w-80 textarea textarea-bordered h-24" placeholder="Message"></textarea>
        </div>
    </div>
    </section>
  )
}

export default ContactUS