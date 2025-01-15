import React, { useContext, useState } from "react";
import registerImg from "../../assets/login.png";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
const {createUser} = useContext(AuthContext)


const handleRegisterForm = async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const photoURL = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const userCredential = await createUser(email, password);
    // await updateUserProfile({
    //   displayName: name,
    //   photoURL: photoURL,
    // });
    console.log("User Registered", userCredential);
    toast.success("Successfully Registered Your Account");
  } catch (error) {
    console.log("Error Registering User", error);
    // setErrorMessage((prev) => ({ ...prev, register: error.message }));
    toast.error("Registration failed");
  }


}



  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] h-screen">
      <div className="hero bg-gradient-to-t from-[#27292f] to-[#10121d] shadow-2xl rounded-tl-full rounded-br-full w-full min-h-screen">
        <div className="flex gap-8">
          <div className="w-[50%] flex justify-center items-center">
            <div className="">
              {/* <img className="w-full" src={registerImg} alt="" /> */}
              <h2 className="font-bold text-4xl text-white">Register to Start Earning</h2>
              <p className="text-white py-3">Sign up now to unlock earning opportunities and access exclusive features.</p>
              <div className="flex justify-start py-3">
                <button className="bg-[#488d94] rounded-tr-2xl rounded-bl-2xl font-bold text-white hover:bg-[#488d94] py-3 px-7">
                  Go To Login
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[50%] bg-base-100 max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select className="select select-bordered w-full max-w-sm">
                  <option disabled selected>
                    Choose Your Role
                  </option>
                  <option>Worker</option>
                  <option>Buyer</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#488d94] hover:bg-[#488d94] border-none text-white font-medium">
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
