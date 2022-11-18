import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
 
  const { register, handleSubmit } = useForm();
  const handleLogin = data =>{
    console.log(data);
  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center text-cyan-500">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
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
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
            <input type="submit" className="btn bg-gray-600 w-full text-white" value="Login" />
          </div>
          {/* <p>{data}</p> */}
          
        </form>
        <div className="text-center mt-4">
        <p>New to here? <Link to="/signup" className="text-cyan-500">Create New Account?</Link></p>
        </div>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full rounded">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
