import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageDoctors = () => {
  const { data: doctors } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await (await res).json();
        return data;
      } catch (error) {}
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>Avatar</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{doctor.name}</td>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} />
                    </div>
                  </div>
                </td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button className="btn btn-sm btn-error">DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
