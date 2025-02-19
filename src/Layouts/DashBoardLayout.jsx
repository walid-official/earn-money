import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import logo from "../assets/logo.png";

import Sidebar from "../components/Sidebar/Sidebar";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import { ThemeContext } from "../context/ThemeContext";

export const myInfoContext = createContext();

const DashBoardLayout = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {theme} = useContext(ThemeContext)
  const {
    data: myInfo = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myInfo", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`loggedUser/${user?.email}`);
      console.log(data);

      return data;
    },
  });

  const InfoNav = {
    myInfo,
    isLoading,
    refetch,
  };

  return (
    <myInfoContext.Provider value={InfoNav}>
      
      <div className="lg:flex justify-between">
        <div className="lg:w-[20%] lg:min-h-screen bg-gradient-to-r from-[#020710] to-[#1b2028]">
          <div className="py-6 pl-6 border-gray-600 flex justify-between">
            <NavLink to="/" className="border-b">
              <div className="flex gap-3 items-center fixed">
                <div className="">
                  <img src={logo} className="w-12 h-12 rounded-full" alt="" />
                </div>
                <div className="">
                  <h2 className="font-bold text-2xl text-white items-center">
                    Earnify
                  </h2>
                </div>
              </div>
            </NavLink>
            <div className="lg:hidden flex">
              <div className="drawer ">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor="my-drawer"
                    className="btn drawer-button sm:mr-10 mr-4"
                  >
                    {/* Toggle Button */}
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    className="drawer-overlay "
                  ></label>
                  <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] min-h-screen sm:w-[300px] w-[250px]">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden fixed w-[19.5%]">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className="lg:w-[80%] ">
          <div className="static top-0">
            <DashboardNavbar myInfo={myInfo}></DashboardNavbar>
          </div>
          <div  className={` min-h-screen${
      theme === "light"
        ? "backdrop-blur-xl bg-white/30"
        : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
    } z-10`}>
            <Outlet></Outlet>
          </div>
        </div>

      </div>
    </myInfoContext.Provider>
  );
};

export default DashBoardLayout;
