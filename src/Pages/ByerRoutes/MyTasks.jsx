import MyTaskTable from "./MyTaskTable";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UpdateModal from "./UpdateModal";
import { useContext, useState } from "react";
import { myInfoContext } from "../../Layouts/DashBoardLayout";

const MyTasks = () => {
  const { user } = useAuth();
  const {refetch} = useContext(myInfoContext)
  const axiosSecure = useAxiosSecure();
  const [singleTask, setSingleTask] = useState(null);
  const {
    data: myTasks = [],
    isLoading,
    refetch:myTaskRefetch,
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
      myTaskRefetch()
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    document.getElementById("my_modal_1").showModal();

    try {
      const { data } = await axiosSecure.get(`tasks/${id}`);
      setSingleTask(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(singleTask);

  return (
    <div className="w-[90%] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
      <UpdateModal singleTask={singleTask} refetch={refetch}></UpdateModal>
    </div>
  );
};

export default MyTasks;
