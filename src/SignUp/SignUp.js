import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/AuthProvider'
import useToken from '../hooks/useToken'


const SignUp = () => {
    const {createUser,updateUser} = useContext(AuthContext)
    const {register,handleSubmit} = useForm()
    const [signupError,setSignupError] = useState('')
    const [createdUserEmail,setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    if(token){
      navigate("/")
    }
    const handleSignUp = data =>{
        console.log(data)
        setSignupError("")
        createUser(data.email,data.password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast("User Created Successfully 🙂 ");
            const userInfo = {
              displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
              saveUser(data.name,data.email);
              
            })
            .catch(err => console.log(err));

        })
        .catch(error => {
          console.log(error)
          setSignupError(error.message);
        });
    }

    const saveUser = (name,email) =>{
      const user = {name,email};
      fetch("http://localhost:5000/users",{
        method: 'POST',
        headers:{
          "content-type": "application/json"
        },
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log("saveuser",data);
        setCreatedUserEmail(email)
      })
    }

    
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center text-cyan-500">Sign Up</h2>
        <form onClick={handleSubmit(handleSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              required
              className="input input-bordered w-full max-w-xs"
            />
            {
              signupError && <p> {signupError}</p>
            }
           
            <input
              type="submit"
              className="btn bg-gray-600 w-full text-white mt-7"
              value="Sign Up"
            />
          </div>
          
        </form>
        <div className="text-center mt-4">
          <p>
            Already Have an Account? 
            <Link to="/login" className="text-cyan-500">
               Please Login
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full rounded">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  )
}

export default SignUp