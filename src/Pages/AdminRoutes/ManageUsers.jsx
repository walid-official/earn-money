import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import ManageUsersTable from "./ManageUsersTable";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`allUsers`);
      return data;
    },
  });
 

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

    console.log(allUsers);

  return <div>
  <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>photo</th>
              <th>Email</th>
              <th>Role</th>
              <th>Coin</th>
              <th>Update role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUsers.map((singleUser,index) => (
              <ManageUsersTable
               key={index}
               singleUser={singleUser}
              ></ManageUsersTable>
            ))}
          </tbody>
        </table>
      </div>
  </div>;
};

export default ManageUsers;
