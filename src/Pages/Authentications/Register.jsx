import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, photo, email, password } = data;

    try {
      const userCredential = await createUser(email, password);
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });
      console.log("User Registered", userCredential);
      toast.success("Successfully Registered Your Account");
      reset();
    } catch (error) {
      console.error("Error Registering User", error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] h-screen">
      <div className="hero bg-gradient-to-t from-[#27292f] to-[#10121d] shadow-2xl rounded-tl-full rounded-br-full w-full min-h-screen">
        <div className="flex gap-8">
          <div className="w-[50%] flex justify-center items-center">
            <div className="">
              <h2 className="font-bold text-4xl text-white">
                Register to Start Earning
              </h2>
              <p className="text-white py-3">
                Sign up now to unlock earning opportunities and access exclusive features.
              </p>
              <div className="flex justify-start py-3 gap-3 items-center">
                <NavLink to="/login">
                  <button className="bg-[#00d7c0] rounded-tr-2xl rounded-bl-2xl font-bold text-white hover:bg-[#00d7c0] py-3 px-7">
                    Go To Login
                  </button>
                </NavLink>
                <NavLink to="/">
                  <button className="text-white font-bold flex items-center gap-2 hover:translate-x-2 duration-500 ">
                    Go To Home
                    <FaArrowRightLong />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="card w-[50%] bg-base-100 max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: "Photo URL is required" })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
              </div>
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
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  {...register("role", { required: "Role is required" })}
                  className="select select-bordered w-full max-w-sm"
                >
                  <option disabled selected value="">
                    Choose Your Role
                  </option>
                  <option value="Worker">Worker</option>
                  <option value="Buyer">Buyer</option>
                </select>
                {errors.role && <p className="text-red-500">{errors.role.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                      message:
                        "Password must be at least 6 characters, include one uppercase letter, one lowercase letter, and one number",
                    },
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#00d7c0] hover:bg-[#00d7c0] border-none text-white font-medium">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
