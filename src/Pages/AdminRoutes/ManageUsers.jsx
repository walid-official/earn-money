import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import ManageUsersTable from "./ManageUsersTable";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user?.email);
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
        if (!user?.email) return [];
      const { data } = await axiosSecure(`allUsers/${user?.email}`);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  const handleUserDelete = async (id) => {
    try{
        const {data} = await axiosSecure.delete(`/user/${id}`);
        console.log(data);
        refetch()
    }catch(err){
        console.log(err);
    }
  }

  return (
    <div>
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
            {allUsers.map((singleUser, index) => (
              <ManageUsersTable
                key={index}
                handleUserDelete={handleUserDelete}
                singleUser={singleUser}
              ></ManageUsersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
