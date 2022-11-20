import { format } from "date-fns/esm";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment,refetch }) => {
  const { name:tretmentName, slots } = treatment;
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const slot = form.slot.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: tretmentName,
      patient: name,
      slot,
      email,
      phone,
    };
    // console.log(booking);

    fetch("http://localhost:5000/bookings",{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
      
    })
    .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.acknowledged){
          setTreatment(null);
          refetch();
          toast.success("Booking Successfull")
        }
        else{
          toast.error(data.message)
        }
      })
    
    
  };
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
          <h3 className="text-lg font-bold">{tretmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              defaultValue={user?.email}
              disabled
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
