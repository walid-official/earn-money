import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa"; // Correct icons
import axios from "axios";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

// Environment variables for image hosting
const Image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${Image_hosting_key}`;

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    label: "Strong Your Password",
    color: "bg-red-500",
    progress: 0,
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Evaluate password strength
  const evaluatePasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength({ label: "Weak", color: "bg-red-500", progress: 0 });
      return;
    }

    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;

    if (score <= 2) {
      setPasswordStrength({ label: "Weak", color: "bg-red-500", progress: 25 });
    } else if (score === 3) {
      setPasswordStrength({ label: "Medium", color: "bg-yellow-500", progress: 50 });
    } else if (score >= 4) {
      setPasswordStrength({ label: "Strong", color: "bg-green-500", progress: 100 });
    }
  };

  // Handle form submission
  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password, role } = data;

    let coin = role === "Worker" ? 10 : 50;

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    try {
      const imgResponse = await axios.post(image_hosting_api, formData);
      const photoURL = imgResponse.data.data.display_url;

      const userCredential = await createUser(email, password);
      await updateUserProfile({ displayName: name, photoURL });
      console.log("User Registered", userCredential);

      const userData = {
        name,
        photo: photoURL,
        email,
        role,
        coin,
      };

      await axios.post(
        "https://earn-money-platform-server.vercel.app/earning-users",
        userData
      );
      toast.success("Successfully Registered Your Account");
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.error("Error Registering User", error);
      toast.error("Registration failed");
    }
  };

  // Handle Google registration
  const handleGoogleRegister = async () => {
    try {
      const data = await signInWithGoogle();
      const googleUserData = {
        name: data?.user?.displayName,
        email: data?.user?.email,
        photo: data?.user?.photoURL,
        role: "Worker",
      };
      await axios.post(
        "https://earn-money-platform-server.vercel.app/earning-users",
        googleUserData
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] min-h-screen py-10">
      <CustomCursor></CustomCursor>
      <div className="hero bg-gradient-to-t from-[#27292f] to-[#10121d] py-10 shadow-2xl rounded-tl-full rounded-br-full w-full min-h-screen">
        <div className="w-11/12 mx-auto lg:flex lg:py-0">
          {/* Left Section */}
          <div className="lg:w-[55%] lg:flex justify-center items-center">
            <div className="py-20">
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
                  <button className="text-white font-bold flex items-center gap-2 hover:translate-x-2 duration-500">
                    Go To Home
                    <FaArrowRight />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="card lg:w-[45%] bg-base-100 lg:max-w-md max-w-lg shrink-0 shadow-2xl">
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
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: "Photo is required" })}
                  className="file-input file-input-bordered w-full max-w-xl"
                />
                {errors.photo && (
                  <p className="text-red-500">{errors.photo.message}</p>
                )}
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
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
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
                {errors.role && (
                  <p className="text-red-500">{errors.role.message}</p>
                )}
              </div>
              {/* Password Field */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      message:
                        "Password must be at least 6 characters, include one uppercase letter, one lowercase letter",
                    },
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                  onChange={(e) => evaluatePasswordStrength(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[52px] cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xl" />
                  ) : (
                    <FaEye className="text-xl" />
                  )}
                </div>
                {/* Password Strength */}
                <div className="mt-3">
                  <div className="h-2 w-full bg-gray-300 rounded">
                    <div
                      className={`h-full ${passwordStrength.color} rounded`}
                      style={{ width: `${passwordStrength.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1 text-gray-700">
                     {passwordStrength.label}
                  </p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#00d7c0] hover:bg-[#00d7c0] border-none text-white font-medium"
                >
                  Register Now
                </button>
              </div>
              <div>
                <button
                  onClick={handleGoogleRegister}
                  type="button"
                  className="btn w-full mt-3 bg-[#00d7c0] hover:bg-[#00d7c0] font-bold text-white"
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

export default Register;




{/* <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] min-h-screen">
      <div className="hero bg-gradient-to-t from-[#27292f] to-[#10121d] shadow-2xl rounded-tl-full rounded-br-full w-full min-h-screen">
        <div className="w-11/12 mx-auto lg:flex lg:py-0">
          <div className="lg:w-[50%] lg:flex justify-center items-center">
            <div className="py-20">
              <h2 className="font-bold text-4xl text-white">
                Register to Start Earning
              </h2>
              <p className="text-white py-3">
                Sign up now to unlock earning opportunities and access exclusive
                features.
              </p>
              <div className="flex justify-start py-3 gap-3 items-center">
                <NavLink to="/login">
                  <button className="bg-[#00d7c0] rounded-tr-2xl rounded-bl-2xl font-bold text-white hover:bg-[#00d7c0] py-3 px-7">
                    Go To Login
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
          </div>
          <div className="card lg:w-[50%] bg-base-100 lg:max-w-md max-w-lg shrink-0 shadow-2xl">
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
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: "Photo is required" })}
                  className="file-input file-input-bordered w-full max-w-xl"
                />
                {errors.photo && (
                  <p className="text-red-500">{errors.photo.message}</p>
                )}
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
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
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
                {errors.role && (
                  <p className="text-red-500">{errors.role.message}</p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      message:
                        "Password must be at least 6 characters, include one uppercase letter, one lowercase letter",
                    },
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[52px] cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xl" />
                  ) : (
                    <FaEye className="text-xl" />
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#00d7c0] hover:bg-[#00d7c0] border-none text-white font-medium"
                >
                  Register Now
                </button>
              </div>
              <div>
                <button
                  onClick={handleGoogleRegister}
                  type="button"
                  className="btn w-full mt-3 bg-[#00d7c0] hover:bg-[#00d7c0] font-bold text-white"
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
    </div> */}