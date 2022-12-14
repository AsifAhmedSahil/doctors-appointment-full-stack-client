import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppoinement = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToekn")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);

  return (
    <div>
      <h4 className="font-bold text-cyan-500 text-2xl">My Appointment</h4>
      <br />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Time</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* here bookings?.length mane holo load er agee jno map na kore ...length thakle data then map krbe */}
            {bookings?.length && bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {
                    booking.price && !booking.paid &&
                     <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-primary bg-cyan-600 text-white font-semibold rounded ">PAY</button></Link>
                  }
                  {
                    booking.price && booking.paid &&
                     <span className="text-green-500">Paid</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinement;
