import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
  const { name,slots } = treatment;
  const date = format(selectedDate, "PP");
  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const slot = form.slot.value;
    const phone = form.phone.value;

    const booking = {
        appointmentDate: Date,
        treatment:name,
        patient:name,
        slot,
        email,
        phone
    }

    console.log(booking);
    setTreatment(null)

  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 text-white btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
            
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full ">
              
                {
                    slots.map((slot,i) => <option value={slot} key={i} >
                        {slot}
                      </option>)
                }
              
            </select>
            <input
            name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
            name="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
            name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn w-full bg-gray-600 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
