import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name,slots } = treatment;
  const date = format(selectedDate, "PP");
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
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select className="select select-bordered w-full ">
              <option disabled selected>
                Who shot first?
              </option>
                {
                    slots.map(slot => <option value={slot} >
                        {slot}
                      </option>)
                }
              
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
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
