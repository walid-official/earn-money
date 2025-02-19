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
  const { refetch } = useContext(myInfoContext);
  const axiosSecure = useAxiosSecure();
  const [singleTask, setSingleTask] = useState(null);
  const {theme} = useContext(ThemeContext)
  const {
    data: myTasks = [],
    isLoading,
    refetch: myTaskRefetch,
  } = useQuery({
    queryKey: ["myTasks", user],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`my-tasks/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  console.log(myTasks);

  const handleDelete = async (id, paymentCoin) => {
    try {
      const { data } = await axiosSecure.patch(`refillData/${user?.email}`, {
        paymentCoin,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosSecure.delete(`tasks/${id}`);
      console.log(data);
      myTaskRefetch();
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    document.getElementById("my_modal_1").showModal();

    try {
      const { data } = await axiosSecure.get(`tasks/${id}`);
      myTaskRefetch();
      setSingleTask(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(singleTask);

  return (
    <div className={`min-h-screen ${
      theme === "light"
        ? "backdrop-blur-xl bg-white text-black"
        : "dark:bg-black dark:text-white"
    }`}>
      <div className="py-10">
        <div className={`p-8 rounded-xl w-[60%] mx-auto ${
        theme === "light"
          ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#c3c0c0] text-black"
          : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
      }`}>
          <h2 className="font-bold text-3xl text-center">
            Task Manager - Stay Organized, Stay Ahead
          </h2>
          <p className="w-[60%] mx-auto text-center py-3">
            Efficiently track, prioritize, and manage your tasks with clarity.
            Stay on top of deadlines and achieve your goals with ease.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] w-[80%] mx-auto py-10  rounded-xl">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>Title</th>
                <th>Detail</th>
                <th>Date</th>
                <th>worker</th>
                <th>per Worker</th>
                <th>Coin</th>
                <th>Submission</th>
                <th>Total Payment</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myTasks.map((myTask) => (
                <MyTaskTable
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  myTask={myTask}
                ></MyTaskTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UpdateModal
        singleTask={singleTask}
        myTaskRefetch={myTaskRefetch}
      ></UpdateModal>
    </div>
  );
};

export default MyTasks;
