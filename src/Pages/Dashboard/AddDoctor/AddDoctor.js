import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();

  const {data:specialities , isLoading} = useQuery({
    queryKey:['speciality'],
    queryFn:async()=>{
        const res = await fetch("http://localhost:5000/appointmentspeciality");
        const data = res.json();
        return data;
    }
  })


  const handleDoctor = (data) => {
    console.log(data);
  };


  if(isLoading){
    return <Loading/>
  }
  return (
    <div className="flex flex-col justify-center p-7 bg-purple-300 w-96  ">
      <h2 className="text-3xl font-bold text-center mb-4 underline">Add Doctor</h2>
      <form onClick={handleSubmit(handleDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">specialty</span>
          </label>

          <select className="select input-bordered w-full max-w-xs">
            
            {
                specialities.map(speciality => <option key={speciality._id} value={speciality.name}>{speciality.name}</option> )
            }
            
            
          </select>

          <input
            type="submit"
            className="btn bg-gray-600 w-full text-white mt-7"
            value="Add Doctor"
          />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
