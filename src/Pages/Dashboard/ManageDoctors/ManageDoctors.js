import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import DeleteModal from "../../Shared/DeleteModal/DeleteModal";

const ManageDoctors = () => {
  const [deletingDoctor,setDeletingDoctor] = useState()

  const closeModal = () =>{
    setDeletingDoctor(null);
  }

  
  const { data: doctors ,refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToekn")}`,
          },
        });
        const data = await res.json();
        console.log(data)
        return data;
      } catch (error) {}
    },
  });

  const handleDelete = doctor =>{
    fetch(`http://localhost:5000/doctors/${doctor._id}`,{
      method:"DELETE",
      headers:{
        authorization: `bearer ${localStorage.getItem("accessToekn")}`
      }
    })
    .then(res => res.json())
    .then(data =>{
      // console.log(data);
      if(data.deletedCount > 0){
        toast.success(`Doctor ${doctor.name} deleted successfully`)
        refetch();
      }
      
    })
  }

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
            {doctors &&
              doctors.map((doctor, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{doctor.name}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={doctor.image} alt="/" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                      onClick={()=>setDeletingDoctor(doctor)}
                    >
                      DELETE
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <DeleteModal 
          title = {`Are You want to sure for delete?`}
          message = {`If You want to delete ${deletingDoctor.name}. It can not undo`}
          closemodal = {closeModal}
          modalData = {deletingDoctor}
          successAction = {handleDelete}
        />
      }
    </div>
  );
};

export default ManageDoctors;
