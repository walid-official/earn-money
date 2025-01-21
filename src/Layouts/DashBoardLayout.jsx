import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import logo from "../assets/logo.png";

import Sidebar from "../components/Sidebar/Sidebar";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

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
    myInfo,isLoading,refetch
  }

  return (
    <myInfoContext.Provider value={InfoNav}>
      <div className="flex justify-between">
        <div className="w-[20%] min-h-screen bg-gradient-to-r from-[#020710] to-[#1b2028]">
          <div className="py-3 flex justify-center border-b">
            <img src={logo} className="w-16 h-16 rounded-full" alt="" />
          </div>
          <Sidebar></Sidebar>
        </div>
        <div className="w-[80%]">
          <DashboardNavbar myInfo={myInfo}></DashboardNavbar>
          <div className="min-h-[580px]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </myInfoContext.Provider>
  );
};

export default DashBoardLayout;
