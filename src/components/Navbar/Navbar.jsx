import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Logo from "../../assets/logo.png";
import coinNav from "../../assets/coinNav.png";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    userSignOut().then(() => {
      navigate("/login");
    });
  };
  const {
    data: allUsersCoin = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsersCoin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`allUsersCoin`);
      console.log(data);

      return data;
    },
  });

  const totalCoins = allUsersCoin.reduce(
    (total, user) => total + (user.coin || 0),
    0
  );

  return (
    <div className="w-11/12  py-5 mx-auto">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="">
            <NavLink to="/" className=" flex gap-3 items-center">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={Logo}
                alt=""
              />
              <h2 className="text-3xl font-bold text-white">Earnify</h2>
            </NavLink>
          </div>
        </div>

        <div className="lg:flex hidden">
          {user ? (
            <div className="flex gap-4 items-center pt-1">
              <NavLink to="/dashboard" className="text-white">
                Dashboard
              </NavLink>

              <div className="flex gap-2 items-center text-white">
                <img className="w-10" src={coinNav} alt="" />
                <h2>{totalCoins ? totalCoins : 0}</h2>
              </div>

              <div className="bg-white w-12 h-12 rounded-full">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <NavLink
                onClick={handleLogoutUser}
                className="rounded-tr-2xl  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                {" "}
                Logout
              </NavLink>
              {/* <a className="btn">Button</a> */}
              <a
                href="https://github.com/walid-official"
                target="_blank"
                className="rounded-tr-2xl  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                Join as developer
              </a>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <NavLink
                to="login"
                className="rounded-tr-2xl  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                Login
              </NavLink>
              {/* <NavLink to="/test" className="text-white">Test</NavLink> */}
              <NavLink
                to="register"
                className="rounded-tr-2xl  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                Register
              </NavLink>
              <a
                href="https://github.com/walid-official"
                target="_blank"
                className="rounded-tr-2xl  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                Join as developer
              </a>
            </div>
          )}
        </div>
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xl dropdown-content bg-base-100 rounded-box z-10 w-[300px] mt-3 p-10 shadow"
            >
              {user ? (
                <div className="">
                  <NavLink
                    to="/dashboard"
                    className="rounded-tr-2xl block text-center rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6 "
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    onClick={handleLogoutUser}
                    className="rounded-tr-2xl block my-3 text-center rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    {" "}
                    Logout
                  </NavLink>
                  {/* <a className="btn">Button</a> */}
                  <a
                    href="https://github.com/walid-official"
                    target="_blank"
                    className="rounded-tr-2xl text-center block rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    Join as developer
                  </a>

                  <div className="flex py-3 justify-between gap-3">
                    <div className="text-[#000] flex items-center gap-2">
                      <img className="w-10" src={coinNav} alt="" />
                      <h2>{totalCoins ? totalCoins : 0}</h2>
                    </div>

                    <div className="bg-white w-12 h-12 rounded-full">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <NavLink
                    to="login"
                    className="rounded-tr-2xl text-center  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    Login
                  </NavLink>
                  {/* <NavLink to="/test" className="text-white">Test</NavLink> */}
                  <NavLink
                    to="register"
                    className="rounded-tr-2xl text-center rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    Register
                  </NavLink>
                  <a
                    href="https://github.com/walid-official"
                    target="_blank"
                    className="rounded-tr-2xl text-center  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    Join as developer
                  </a>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
