import React from "react";
import MyTaskTable from "./MyTaskTable";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyTasks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const { data: myTasks, isLoading } = useQuery({
    queryKey: ["tasks", user],
    queryFn: async () => {
      const { data } = await axiosSecure(`new-tasks/${user?.email}`);
      return data;
    },
  });

  console.log(myTasks);

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
              <th>Submission</th>
              <th>Payment</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">Update</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTasks;
