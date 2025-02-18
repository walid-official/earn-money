import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Logo from "../../assets/logo.png";
import coinNav from "../../assets/coinNav.png";
import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const {theme,toggleTheme} = useContext(ThemeContext)
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    userSignOut().then(() => {
      navigate("/login");
    });
  };
  const {
    data: UserCoin = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["UserCoin", user?.email],
    queryFn: async () => {
      if (!user?.email) return {};
      const { data } = await axios.get(
        `https://earn-money-platform-server.vercel.app/userCoin/${user?.email}`
      );
      return data || {};
    },
  });

  console.log(UserCoin);

  // const totalCoins = allUsersCoin.reduce(
  //   (total, user) => total + (user.coin || 0),
  //   0
  // );

  return (
    <div className="w-11/12  py-6 mx-auto">
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
          <div className="">
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
                aria-label="Toggle dark mode"
              />
              {/* Sun Icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* Moon Icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <div className="flex gap-6 items-center pt-1">
              <NavLink to="/dashboard" className=" text-white ">
                Dashboard
              </NavLink>
              <NavLink to="/about" className=" text-white border-none ">
                About
              </NavLink>
              <NavLink to="/contact" className=" text-white border-none ">
                Contact
              </NavLink>
              <a
                href="https://github.com/walid-official"
                target="_blank"
                className=" text-white "
              >
                Join as developer
              </a>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <NavLink
                to="login"
                className="rounded-md font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                Login
              </NavLink>
              {/* <NavLink to="/test" className="text-white">Test</NavLink> */}
              <NavLink
                to="register"
                className="rounded-md font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                Register
              </NavLink>
              <a
                href="https://github.com/walid-official"
                target="_blank"
                className="rounded-md font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                Join as developer
              </a>
              <NavLink
                to="/dashboard"
                className="rounded-md font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
              >
                About
              </NavLink>
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
                  <NavLink
                    to="/about"
                    className="rounded-md font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    About
                  </NavLink>

                  <div className="flex py-3 justify-between gap-3">
                    <div className="text-[#000] flex items-center gap-2">
                      <img className="w-10" src={coinNav} alt="" />
                      <h2>{UserCoin?.coin}</h2>
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
                <div className="md:flex gap-4 items-center">
                  <NavLink
                    to="login"
                    className=" rounded-lg text-center block  font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    Login
                  </NavLink>
                  {/* <NavLink to="/test" className="text-white">Test</NavLink> */}
                  <NavLink
                    to="register"
                    className="rounded-lg my-2 text-center block  font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    Register
                  </NavLink>
                  <a
                    href="https://github.com/walid-official"
                    target="_blank"
                    className="rounded-lg text-center block  font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    Join as developer
                  </a>
                  <NavLink
                    to="/about"
                    className="rounded-md font-bold bg-[#00d7c0] text-white border-none py-3 px-6"
                  >
                    About
                  </NavLink>
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
