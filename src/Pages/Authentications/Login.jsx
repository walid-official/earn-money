import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { createSignInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await createSignInUser(email, password);
      toast.success("Successfully Logged in");
      navigate(location?.state || "/");
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error("Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const data = await signInWithGoogle();
      console.log(data);
      navigate(location?.state || "/");
      const googleUserData = {
        name: data?.user?.displayName,
        email: data?.user?.email,
        photo: data?.user?.photoURL,
        role: "Worker"
      }
      await axios.post("http://localhost:5000/earning-users",googleUserData)
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] h-screen">
      <div className="hero bg-gradient-to-t from-[#27292f] to-[#10121d] rounded-tr-full rounded-bl-full min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <div className="text-center lg:text-left w-[50%]">
            <h2 className="font-bold text-4xl text-white">Login to Account</h2>
            <p className="text-white py-3">
              Log in to track your earnings and access your dashboard.
            </p>
            <div className="flex justify-start items-center gap-4 py-3">
              <NavLink to="/register">
                <button className="bg-[#00d7c0] rounded-tr-2xl rounded-bl-2xl font-bold text-white hover:bg-[#00d7c0] py-3 px-7">
                  Go To Register
                </button>
              </NavLink>
              <NavLink to="/">
                <button className="text-white font-bold flex items-center gap-2 hover:translate-x-2 duration-500">
                  Go To Home
                  <FaArrowRightLong />
                </button>
              </NavLink>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#00d7c0] hover:bg-[#00d7c0] font-bold text-white"
                >
                  Login
                </button>
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="btn mt-3 bg-[#00d7c0] hover:bg-[#00d7c0] font-bold text-white"
                >
                  <img
                    src="https://i.ibb.co/TvvzXfq/google.png"
                    className="w-8"
                    alt="Google"
                  />
                  Continue With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
