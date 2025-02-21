import { NavLink, Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import logo from "../assets/logo.png";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const myInfoContext = createContext();

const DashBoardLayout = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { theme } = useContext(ThemeContext);

  const {
    data: myInfo = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myInfo", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`loggedUser/${user?.email}`);
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
        {/* Sidebar for large screens */}
        <div
          className={`lg:w-[20%] lg:min-h-screen shadow-2xl z-10 ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-gradient-to-r from-[#020710] to-[#1b2028] text-white"
          }`}
        >
          <div className="py-6 pl-6 border-gray-600 flex justify-between">
            <NavLink to="/" className="border-b">
              <div className="flex gap-3 items-center">
                <img src={logo} className="w-12 h-12 rounded-full" alt="Logo" />
                <h2 className="font-bold text-2xl">Earnify</h2>
              </div>
            </NavLink>

            {/* Mobile Drawer */}
            <div className="lg:hidden">
              <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className="btn drawer-button sm:mr-10 mr-4">
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

                {/* Fixed Drawer Sidebar */}
                <div className="drawer-side fixed top-0 left-0 h-full w-full z-[60]">
                  <label htmlFor="my-drawer" className="drawer-overlay bg-black/50"></label>
                  <div
                    className={`min-h-screen shadow-2xl sm:w-[300px] w-[250px] ${
                      theme === "light"
                        ? "bg-white text-black"
                        : "bg-gradient-to-r from-[#020710] to-[#1b2028] text-white"
                    }`}
                  >
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar for large screens */}
          <div className="lg:block hidden">
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-[80%] shadow-2xl">
          <DashboardNavbar myInfo={myInfo} />
          <div
            className={`min-h-screen ${
              theme === "light"
                ? "bg-white/30"
                : "bg-[#020710] text-white"
            } z-10`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </myInfoContext.Provider>
  );
};

export default DashBoardLayout;
