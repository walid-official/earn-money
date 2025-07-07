import React, { useContext } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ManageTaskTable from "./ManageTaskTable";
import toast from "react-hot-toast";
import { ThemeContext } from "../../context/ThemeContext";

const ManageTasks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
    const {theme} = useContext(ThemeContext)
  const {
    data: manageTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageTasks", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`api/tasks/all/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  console.log(manageTasks);

  const ManageTaskRemove = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`api/tasks/remove/${id}`);
      console.log(data);
      toast.success("Task is successfully deleted");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`min-h-screen ${
      theme === "light"
        ? "backdrop-blur-xl bg-[#FFFFFF] text-black"
        : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
    }`}>
      <div className="w-[90%] mx-auto">
        <div className="py-10">
          <h2 className="font-bold text-center text-3xl">Task Management</h2>
          <p className="py-2 w-[50%] mx-auto text-center">
            {" "}
            Streamline and organize your tasks efficiently, ensuring smooth
            workflow and timely completion of responsibilities.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className={` ${
      theme === "light"
        ? " text-black"
        : " dark:text-white"
    }`}>
                <th>Title</th>
                <th>Detail</th>
                <th>Date</th>
                <th>worker</th>
                <th>Submission</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {manageTasks.map((manageTask, index) => (
                <ManageTaskTable
                  key={index}
                  ManageTaskRemove={ManageTaskRemove}
                  manageTask={manageTask}
                ></ManageTaskTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTasks;
