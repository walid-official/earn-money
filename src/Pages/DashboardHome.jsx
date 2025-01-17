import React from "react";
import BuyerHome from "./ByerRoutes/BuyerHome";
import AdminHome from "./AdminRoutes/AdminHome";
import WorkerHome from "./WorkerRoutes/WorkerHome";
import useRole from "../Hooks/useRole";

const DashboardHome = () => {
  const [role, isLoading] = useRole();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      {role === "Admin" && <AdminHome></AdminHome>}
      {role === "Buyer" && <BuyerHome></BuyerHome>}
      {role === "Worker" && <WorkerHome></WorkerHome>}
    </div>
  );
};

export default DashboardHome;
