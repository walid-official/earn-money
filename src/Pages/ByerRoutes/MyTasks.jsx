import MyTaskTable from "./MyTaskTable"; 
import { useQuery } from "@tanstack/react-query";
import useAuth from "./../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UpdateModal from "./UpdateModal";
import { useContext, useState } from "react";
import { myInfoContext } from "../../Layouts/DashBoardLayout";
import { ThemeContext } from "../../context/ThemeContext";

const MyTasks = () => {
  const { user } = useAuth();
  const context = useContext(myInfoContext);
  const refetch = context?.refetch;

  if (!context) {
    console.warn("⚠️ Warning: myInfoContext is undefined. Make sure the provider is wrapping this component.");
  }

  const axiosSecure = useAxiosSecure();
  const [singleTask, setSingleTask] = useState(null);
  const { theme } = useContext(ThemeContext);

  const {
    data: myTasks = [],
    isLoading,
    refetch: myTaskRefetch,
  } = useQuery({
    queryKey: ["myTasks", user],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`my-tasks/${user?.email}`);
      return data;
    },
  });

  const handleDelete = async (id, paymentCoin) => {
    try {
      await axiosSecure.patch(`refillData/${user?.email}`, {
        paymentCoin,
      });
    } catch (err) {
      console.error("Error refilling data:", err);
    }

    try {
      await axiosSecure.delete(`tasks/${id}`);
      myTaskRefetch();
      refetch?.(); // Safe call
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const handleUpdate = async (id) => {
    document.getElementById("my_modal_1").showModal();

    try {
      const { data } = await axiosSecure.get(`tasks/${id}`);
      myTaskRefetch();
      setSingleTask(data);
    } catch (err) {
      console.error("Error fetching task for update:", err);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "light"
          ? "backdrop-blur-xl bg-[#f9fafc] text-black"
          : "dark:bg-black dark:text-white"
      }`}
    >
      <div className="py-10">
        <div
          className={`p-8 rounded-xl shadow-xl w-[60%] mx-auto ${
            theme === "light"
              ? "backdrop-blur-xl bg-[#FFFFFF] text-black"
              : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
          }`}
        >
          <h2 className="font-bold text-3xl text-center">
            Task Manager - Stay Organized, Stay Ahead
          </h2>
          <p className="w-[60%] mx-auto text-center py-3">
            Efficiently track, prioritize, and manage your tasks with clarity.
            Stay on top of deadlines and achieve your goals with ease.
          </p>
        </div>
      </div>

      <div
        className={`w-[90%] shadow-xl mx-auto py-10 rounded-xl ${
          theme === "light"
            ? "backdrop-blur-xl bg-[#FFFFFF] text-black"
            : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr
                className={`${
                  theme === "light" ? "text-black" : "dark:text-white"
                }`}
              >
                <th>Title</th>
                <th>Detail</th>
                <th>Date</th>
                <th>Worker</th>
                <th>Per Worker</th>
                <th>Coin</th>
                <th>Submission</th>
                <th>Total Payment</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((myTask) => (
                <MyTaskTable
                  key={myTask._id}
                  theme={theme}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  myTask={myTask}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <UpdateModal
        singleTask={singleTask}
        myTaskRefetch={myTaskRefetch}
      />
    </div>
  );
};

export default MyTasks;
