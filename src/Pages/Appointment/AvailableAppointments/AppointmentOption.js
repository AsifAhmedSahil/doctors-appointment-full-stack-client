import React from "react";


const AppointmentOption = ({ appointmentOption,setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div>
      <div className="card shadow-xl mt-6">
        <div className="card-body text-center ">
          <h2 className=" text-3xl font-bold text-cyan-700 text-center">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
          <div className="card-actions justify-center mt-4">
            
            <label onClick={()=>setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn text-white rounded btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Booked Appointment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
