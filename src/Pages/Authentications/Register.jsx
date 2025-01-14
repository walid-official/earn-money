import React from "react";
import registerImg from "../../assets/login.png";
const Register = () => {
  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] h-screen">
      <div className="hero bg-gradient-to-t from-[#27292f] to-[#10121d] shadow-2xl rounded-tl-full rounded-br-full w-full min-h-screen">
        <div className="flex gap-8">
          <div className="w-[50%] flex justify-center items-center">
            <div className="">
              <img className="w-full" src={registerImg} alt="" />
              <div className="flex justify-center py-10">
                <button className="bg-[#488d94] rounded-tr-2xl rounded-bl-2xl font-bold text-white hover:bg-[#488d94] py-3 px-7">
                  Go To Login
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[50%] bg-base-100 max-w-md shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
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
