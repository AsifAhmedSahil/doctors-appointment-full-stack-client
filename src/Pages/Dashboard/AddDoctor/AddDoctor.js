import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const imageHostKey = process.env.REACT_APP_imagebbKey;
  const navigate = useNavigate()

  const {data:specialities , isLoading} = useQuery({
    queryKey:['speciality'],
    queryFn:async()=>{
        const res = await fetch("http://localhost:5000/appointmentspeciality");
        const data = res.json();
        return data;
    }
  })


  const handleDoctor = (data) => {
    
    const image = data.image[0]
    const formData = new FormData();
    formData.append("image",image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res => res.json())
    .then(imgData => {
      // console.log(imgData);
      if(imgData.success){
        console.log(imgData.data.url)
        const doctor = {
          name: data.name,
          email:data.email,
          specialty:data.specialty,
          image:imgData.data.url
        }
        // save doctors info to the database
        fetch('http://localhost:5000/doctors',{
          method:"POST",
          headers:{
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`
          },
          body:JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result);
          toast.success(`${data.name} is added successfully!`)
          navigate("/dashboard/managedoctors")
        })
      }
    })
  };


  if(isLoading){
    return <Loading/>
  }
  return (
    <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {/* {errors.email && <p className='text-red-500'>{errors.email.message}</p>} */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select 
                    {...register('specialty')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            specialities.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                        
                        
                    </select>
                </div>

          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image",{
              required: "photo is required"
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

          

          <input
            type="submit"
            className="btn bg-gray-600 w-full text-white mt-7"
            value="Add Doctor"
          />
        
      </form>
    </div>
  );
};

export default AddDoctor;
