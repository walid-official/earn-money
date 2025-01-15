import React from "react";
import loginImg from "../../assets/register.png";
const Login = () => {
  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] h-screen">
      <div className="hero bg-gradient-to-t from-[#27292f] to-[#10121d] rounded-tr-full rounded-bl-full min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <div className="text-center lg:text-left w-[50%]">
           {/* <img src={loginImg} alt="" /> */}
           <h2 className="font-bold text-4xl text-white"> Login to Account</h2>
              <p className="text-white py-3">Log in to track your earnings and access your dashboard.</p>
           <div className="flex justify-start py-3">
                <button className="bg-[#00d7c0] rounded-tr-2xl rounded-bl-2xl font-bold text-white hover:bg-[#00d7c0] py-3 px-7">
                  Go To Register
                </button>
              </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#00d7c0] font-bold text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
