import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import logo from "../assets/logo.png";

import Sidebar from "../components/Sidebar/Sidebar";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
// import Sidebar from './../components/Sidebar/Sidebar';

export const myInfoContext = createContext();

const DashBoardLayout = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
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
          <div className="py-4 pl-6 border-b flex justify-between">
            <div className="">
              <img src={logo} className="w-16 h-16 rounded-full" alt="" />
            </div>
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
                    className="btn drawer-button mr-10"
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
                <div className="drawer-side ">
                  <label htmlFor="my-drawer" className="drawer-overlay "></label>
                  <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] min-h-screen w-[300px]">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden ">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className="lg:w-[80%]">
          <div className="">
            <DashboardNavbar myInfo={myInfo}></DashboardNavbar>
          </div>
          <div className="min-h-[580px]">
            <Outlet></Outlet>
          </div>
          <div className="bg-[#242835]">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </myInfoContext.Provider>
  );
};

export default DashBoardLayout;
