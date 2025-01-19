import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageTasks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: manageTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageTasks", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`allTasks/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  console.log(manageTasks);

  return (
    <div className="">
        <div className="py-10">
            <h2 className="font-bold text-center text-3xl">Task Management</h2>
            <p className="py-2 w-[45%] mx-auto text-center"> Streamline and organize your tasks efficiently, ensuring smooth workflow and timely completion of responsibilities.</p>
        </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Detail</th>
              <th>Date</th>
              <th>worker</th>
              <th>Submission</th>
              <th>Payment</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* {myTasks.map((myTask) => (
              <MyTaskTable
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                myTask={myTask}
              ></MyTaskTable>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTasks;
